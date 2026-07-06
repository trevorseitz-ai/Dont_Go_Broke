import sys
import json
import statistics
from pathlib import Path
import fitz

pdf_path = "reference/Dont-Go-Broke-publishing-standard.pdf"
if not Path(pdf_path).exists():
    print(json.dumps({"error": "File not found"}))
    sys.exit(0)

doc = fitz.open(pdf_path)

# Trim width and height (from page 0 media box)
page0 = doc[0]
rect = page0.rect
width_pts, height_pts = rect.width, rect.height
# Convert points to inches (1 inch = 72 pts)
width_in, height_in = width_pts / 72, height_pts / 72

metrics = {
    "trim_width_pts": round(width_pts, 2),
    "trim_height_pts": round(height_pts, 2),
    "trim_width_in": round(width_in, 2),
    "trim_height_in": round(height_in, 2),
    "pages": len(doc)
}

# Collect all text spans to find dominant fonts
fonts = {}
page_stats = []

for page_num, page in enumerate(doc):
    page_dict = page.get_text("dict")
    
    body_lines = []
    blocks_bboxes = []
    
    for block in page_dict.get("blocks", []):
        if block.get("type") == 0:  # text
            blocks_bboxes.append(block["bbox"])
            for line in block.get("lines", []):
                line_text = ""
                for span in line.get("spans", []):
                    font = span["font"]
                    size = round(span["size"], 1)
                    key = f"{font}_{size}"
                    fonts[key] = fonts.get(key, 0) + len(span["text"])
                    line_text += span["text"]
                body_lines.append({"text": line_text, "bbox": line["bbox"]})

# Determine body and heading fonts by frequency
sorted_fonts = sorted(fonts.items(), key=lambda x: x[1], reverse=True)
body_font_key = sorted_fonts[0][0] if sorted_fonts else ""
body_font_name, body_font_size = body_font_key.rsplit("_", 1)
body_font_size = float(body_font_size)

# Find heading font (usually larger size, or second most common if same size but bold)
heading_font_name, heading_font_size = "", 0
for f, count in sorted_fonts:
    name, size = f.rsplit("_", 1)
    size = float(size)
    if size > body_font_size + 2:
        heading_font_name = name
        heading_font_size = size
        break

metrics["body_font_family"] = body_font_name
metrics["body_font_size"] = body_font_size
metrics["heading_font_family"] = heading_font_name
metrics["heading_font_size"] = heading_font_size

# Calculate margins, line height, and text density on full text pages
left_margins, right_margins, top_margins, bottom_margins = [], [], [], []
line_heights = []
full_text_pages = []

for page_num, page in enumerate(doc):
    page_dict = page.get_text("dict")
    body_lines = []
    all_bboxes = []
    
    # Track page numbers (folios)
    # Usually bottom center or bottom margin
    
    for block in page_dict.get("blocks", []):
        if block.get("type") == 0:
            for line in block.get("lines", []):
                is_body = False
                line_text = ""
                for span in line.get("spans", []):
                    line_text += span["text"]
                    if round(span["size"], 1) == body_font_size:
                        is_body = True
                
                line_text = line_text.strip()
                if is_body and line_text and not line_text.isdigit():
                    body_lines.append({"text": line_text, "bbox": line["bbox"]})
                    all_bboxes.append(line["bbox"])
    
    if all_bboxes:
        min_x = min(b[0] for b in all_bboxes)
        max_x = max(b[2] for b in all_bboxes)
        left_margins.append(min_x)
        right_margins.append(width_pts - max_x)
        
    if len(body_lines) >= 15: # Arbitrary threshold to find solid text pages
        # Compute line heights
        for i in range(len(body_lines)-1):
            y1 = body_lines[i]["bbox"][3]
            y2 = body_lines[i+1]["bbox"][3]
            diff = y2 - y1
            if 0 < diff < body_font_size * 2.5: # avoid paragraph breaks
                line_heights.append(diff)
        
        full_text_pages.append(body_lines)

if line_heights:
    metrics["line_height_pts"] = round(statistics.median(line_heights), 1)
else:
    metrics["line_height_pts"] = 0
    
if left_margins:
    metrics["left_margin_pts"] = round(statistics.median(left_margins), 1)
    metrics["right_margin_pts"] = round(statistics.median(right_margins), 1)
    metrics["text_column_width_pts"] = round(width_pts - metrics["left_margin_pts"] - metrics["right_margin_pts"], 1)

# Density metrics
all_ft_chars_per_line = []
words_per_ft_page = []

for page_lines in full_text_pages:
    words_per_page = 0
    page_chars = []
    for line in page_lines:
        text = line["text"]
        page_chars.append(len(text))
        words_per_page += len(text.split())
    
    words_per_ft_page.append(words_per_page)
    all_ft_chars_per_line.extend(page_chars)

if all_ft_chars_per_line:
    metrics["avg_chars_per_line"] = round(sum(all_ft_chars_per_line) / len(all_ft_chars_per_line), 1)
    metrics["med_chars_per_line"] = statistics.median(all_ft_chars_per_line)
    
if words_per_ft_page:
    metrics["avg_lines_per_ft_page"] = round(sum(len(p) for p in full_text_pages) / len(full_text_pages), 1)
    metrics["avg_words_per_ft_page"] = round(sum(words_per_ft_page) / len(words_per_ft_page), 1)
    metrics["max_words_per_ft_page"] = max(words_per_ft_page)
    
print(json.dumps(metrics, indent=2))

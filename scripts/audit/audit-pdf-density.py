import sys
import statistics
import json
from pathlib import Path
try:
    import fitz
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf", "--quiet", "--break-system-packages"])
    import fitz

booklets = [
    "before-the-idea-becomes-reality",
    "before-the-build-starts",
    "before-the-agent-starts",
    "before-you-trust-the-first-draft",
    "after-launch-the-meter-still-runs"
]

results = {}

for b in booklets:
    pdf_path = f"products/dont-go-broke/booklets/{b}/dist/{b}-layout-proof-v1.0.pdf"
    if not Path(pdf_path).exists():
        continue
    
    doc = fitz.open(pdf_path)
    
    # First pass: find the body font size
    # We collect all font sizes and take the mode (most common)
    all_font_sizes = []
    for page in doc:
        for block in page.get_text("dict").get("blocks", []):
            if block.get("type") == 0:  # text block
                for line in block.get("lines", []):
                    for span in line.get("spans", []):
                        all_font_sizes.append(round(span["size"], 1))
    
    if not all_font_sizes:
        continue
        
    body_font_size = statistics.mode(all_font_sizes)
    
    page_metrics = []
    
    for page in doc:
        body_lines = []
        body_words_count = 0
        
        for block in page.get_text("dict").get("blocks", []):
            if block.get("type") == 0:  # text block
                for line in block.get("lines", []):
                    # Check if line is body text
                    is_body = False
                    line_text = ""
                    for span in line.get("spans", []):
                        line_text += span["text"]
                        if round(span["size"], 1) == body_font_size:
                            is_body = True
                            
                    line_text = line_text.strip()
                    # Exclude pure page numbers
                    if is_body and line_text and not line_text.isdigit():
                        body_lines.append(line_text)
                        body_words_count += len(line_text.split())
                        
        if len(body_lines) > 0:
            page_metrics.append({
                "line_count": len(body_lines),
                "chars_per_line": [len(l) for l in body_lines],
                "words": body_words_count
            })
            
    # Full text pages threshold
    # The reference says ~28 lines. Let's define full text page as >= 24 lines.
    full_text_pages = [p for p in page_metrics if p["line_count"] >= 24]
    
    if not full_text_pages:
        # Fallback if no page has >= 24 lines
        full_text_pages = page_metrics
        
    all_ft_chars_per_line = []
    for p in full_text_pages:
        all_ft_chars_per_line.extend(p["chars_per_line"])
        
    avg_chars = sum(all_ft_chars_per_line) / len(all_ft_chars_per_line) if all_ft_chars_per_line else 0
    med_chars = statistics.median(all_ft_chars_per_line) if all_ft_chars_per_line else 0
    max_chars = max(all_ft_chars_per_line) if all_ft_chars_per_line else 0
    
    avg_lines = sum(p["line_count"] for p in full_text_pages) / len(full_text_pages) if full_text_pages else 0
    avg_words = sum(p["words"] for p in full_text_pages) / len(full_text_pages) if full_text_pages else 0
    max_words = max(p["words"] for p in full_text_pages) if full_text_pages else 0
    
    results[b] = {
        "body_font_size": body_font_size,
        "avg_chars": avg_chars,
        "med_chars": med_chars,
        "max_chars": max_chars,
        "avg_lines": avg_lines,
        "avg_words": avg_words,
        "max_words": max_words,
        "full_text_pages": len(full_text_pages)
    }

print(json.dumps(results, indent=2))

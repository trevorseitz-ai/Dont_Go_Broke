import re
import json

booklets = [
    "before-the-idea-becomes-reality",
    "before-the-build-starts",
    "before-the-agent-starts",
    "before-you-trust-the-first-draft",
    "after-launch-the-meter-still-runs"
]

results = {}

for b in booklets:
    with open(f"products/dont-go-broke/booklets/{b}/05-final-copy.md", 'r') as f:
        text = f.read()
        
    words = len(text.split())
    
    h2s = re.findall(r'^##\s+(.*)', text, re.MULTILINE)
    
    total_h2 = len(h2s)
    
    numbered_sections = []
    field_notes = []
    tools = []
    back_matter = []
    
    for h2 in h2s:
        lower_h2 = h2.lower()
        if re.match(r'^\d+\.\s', h2):
            numbered_sections.append(h2)
            if any(kw in lower_h2 for kw in ['checklist', 'tool', 'worksheet', 'receipt', 'map', 'gate', 'rhythm', 'audit', 'test', 'review', 'pack']):
                tools.append(h2)
        elif "field note" in lower_h2:
            field_notes.append(h2)
        else:
            if any(kw in lower_h2 for kw in ['checklist', 'tool', 'worksheet', 'receipt', 'map', 'gate', 'rhythm', 'audit', 'test', 'review', 'pack']):
                tools.append(h2)
            else:
                back_matter.append(h2)
                
    results[b] = {
        "words": words,
        "total_h2": total_h2,
        "major_numbered": len(numbered_sections),
        "field_notes": len(field_notes),
        "tools": len(tools),
        "back_matter": len(back_matter),
        "all_h2s": h2s
    }

print(json.dumps(results, indent=2))

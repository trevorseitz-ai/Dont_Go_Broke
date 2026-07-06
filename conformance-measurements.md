# Payhip Conformance Measurements

## Measurement Method
A programmatic line-geometry extraction script using `PyMuPDF (fitz)` was applied to `reference/Dont-Go-Broke-publishing-standard.pdf`. The script identified the dominant text blocks by rendering size to extract layout bounds, font sizing, line height, and text density.

## Locked Measurements

### Page Geometry
* **Trim Width:** 612.0 pts (8.5 inches / US Letter)
* **Trim Height:** 792.0 pts (11.0 inches / US Letter)
* **Text Column Width:** ~418.3 pts (5.81 inches)
* **Left Margin:** ~95.9 pts (1.33 inches)
* **Right Margin:** ~97.8 pts (1.35 inches)

### Typography
* **Body Font Size:** 11.0 pt
* **Body Line Height (Leading):** 18.0 pts (~1.63 line-height)
* **Heading Font Size:** 16.5 pt
* **Heading/Body Ratio:** 1.5x

### Density Metrics
* **Average Characters per Body Line:** 67.0
* **Median Characters per Body Line:** 78.0
* **Average Body Lines per Full Text Page:** 24.8
* **Average Words per Full Text Page:** 293.1
* **Max Words on Full Text Page:** 375

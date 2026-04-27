Build App 2 for MKT 472 Module 4: Perceived Customer Value Index Builder.

Use vanilla HTML, CSS, and JavaScript. Chart.js via CDN is acceptable. The app must run fully client-side, embed cleanly in Canvas as an iframe, and use no localStorage, cookies, server calls, or Canvas API.

Required files:
- index.html
- styles.css
- script.js

Core purpose:
Students build the full PCV Index calculation chain:
Product Performance Index → Service Quality Index → Brand Reputation Index → Overall Performance Index → Cost of Purchase Index → PCV Index.

The app must force sequential completion through four tabs:
Tab A: Product Performance
Tab B: Service Quality
Tab C: Brand Reputation + OPI weights
Tab D: Cost of Purchase + SIGN CHECK mechanism

Sequential unlock:
- Tab A unlocked by default.
- Tab B unlocks after Tab A has valid importance weights summing to 100.
- Tab C unlocks after Tab B is valid.
- Tab D unlocks after Tab C is valid and OPI weights are valid.
- Locked tabs should be visible but disabled with explanatory text.

Relative advantage calculation:
For each attribute:
1. Compare business rating to each competitor rating.
2. If business rating - competitor rating >= 2, award +importance points.
3. If business rating - competitor rating <= -2, award -importance points.
4. If absolute difference <= 1, award 0 points.
5. RA = average of the three comparison point scores.

Important threshold:
A difference of exactly 2 earns the full points. Do not use >2.

Sub-index formula:
Sub-index = 100 + sum of attribute RA scores.

Default Tab A Product Performance data:
- Machine Uptime: importance 40, business 8, comp A 7, comp B 5, comp C 6, expected RA 27
- Print Speed: importance 30, business 9, comp A 8, comp B 5, comp C 5, expected RA 20
- Image Quality: importance 20, business 7, comp A 7, comp B 7, comp C 6, expected RA 0
- Ease of Use: importance 10, business 4, comp A 6, comp B 7, comp C 6, expected RA -10
Expected PPI = 137

Tab B Service Quality:
Use editable four-row structure like Tab A. Preload values that produce SQI = 90. If exact source values are not available, create clear default rows and include a visible note that the defaults are calibrated to SQI = 90.

Tab C Brand Reputation:
Use editable four-row structure like Tab A. Preload values that produce BRI = 140. If exact source values are not available, create clear default rows and include a visible note that the defaults are calibrated to BRI = 140.

Tab C OPI weights:
- Product = 0.60
- Service = 0.30
- Brand = 0.10
Weights must sum to 1.0.
OPI = PPI × product weight + SQI × service weight + BRI × brand weight
Expected default OPI = 123

Tab D Cost of Purchase default data:
- Purchase Price: importance 40, business 7, comp A 8, comp B 5, comp C 5, expected RA +27
- Service & Repair: importance 30, business 5, comp A 6, comp B 7, comp C 6, expected RA -10
- Toner: importance 20, business 5, comp A 8, comp B 7, comp C 5, expected RA -14
- Paper: importance 10, business 6, comp A 6, comp B 5, comp C 5, expected RA 0
Expected CPI = 103
Expected PCV = 123 - 103 = 20

SIGN CHECK mechanism for Tab D:
If any Cost of Purchase RA score is positive, hide Tab D outputs and show this red alert:

"SIGN CHECK: You have a positive relative advantage score on a cost component. For cost components, the sign runs in the OPPOSITE direction from the performance index: a HIGHER cost rating means your product costs MORE than competitors — which is a competitive DISADVANTAGE on that dimension, not an advantage.

Purchase Price RA = +27 does NOT mean you are 27% better on price. It means customers rate your price as HIGHER than competitors.

Confirm you understand this before viewing your Cost of Purchase Index."

Add button:
"I understand — show my results"

After click:
- Reveal CPI and PCV outputs.
- Collapse alert.
- Keep small badge:
  "Review sign rule before case."

Summary outputs:
- PPI
- SQI
- BRI
- OPI
- CPI
- PCV Index = OPI - CPI
- Zone classification:
  - Superior if PCV > 0
  - Fair if PCV = 0
  - Inferior if PCV < 0
- Text inference:
  "PCV Index of X → [Superior/Fair/Inferior] value zone → [above/equal/below] average profitability expected."

Value map:
Create a simple X-Y scatter chart:
- X-axis = CPI
- Y-axis = OPI
- Plot the company point.
- Show a fair value reference line where OPI = CPI.
- Label superior and inferior zones.

Rounding:
- Index values to one decimal place unless integer.
- RA values to one decimal place when needed.

Validation:
- Each tab’s importance weights must sum to exactly 100.
- If not, show:
  "Importance weights must sum to 100. Current total: [X]."
- Disable that tab’s sub-index until corrected.
- OPI weights must sum to 1.0.

Accessibility:
- ARIA labels on all inputs, tabs, alerts, and buttons.
- Tabs must be keyboard accessible.
- Do not rely on color alone.

Important:
Do not include worksheet answers as a hidden answer panel. The app is a calculation builder only.
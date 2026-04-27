/*
MKT 472 · Module 4 · App 2
Perceived Customer Value Index Builder

Purpose:
This app walks students through the full PCV Index chain:
1. Product Performance Index (PPI)
2. Service Quality Index (SQI)
3. Brand Reputation Index (BRI)
4. Overall Performance Index (OPI)
5. Cost of Purchase Index (CPI)
6. PCV Index = OPI - CPI

The app must make students build each sub-index before reaching the
final PCV Index. The major instructional trap is the Cost of Purchase
sign inversion: a positive RA on a cost component means the company is
rated as more costly, which is a disadvantage.

Tab sequence:
- Tab A: Product Performance
- Tab B: Service Quality
- Tab C: Brand Reputation + OPI weights
- Tab D: Cost of Purchase + SIGN CHECK

Sequential unlock:
- Tab A unlocked by default.
- Tab B unlocks only after Tab A is valid.
- Tab C unlocks only after Tab B is valid.
- Tab D unlocks only after Tab C and OPI weights are valid.

Relative Advantage rule:
For each attribute, compare the business rating to each competitor rating.

Let difference = business rating - competitor rating.

If difference >= 2:
  award +importance points.

If difference <= -2:
  award -importance points.

If -1 <= difference <= 1:
  award 0 points.

RA for the attribute =
  average of the three comparison point scores.

Important:
A difference of exactly 2 DOES trigger the threshold.
Do not code this as difference > 2.

Sub-index formula:
Sub-index = 100 + sum(attribute RA scores)

Default Tab A data:
Product Performance should produce PPI = 137.

Rows:
1. Machine Uptime
   importance 40, business 8, compA 7, compB 5, compC 6
   expected RA = 27

2. Print Speed
   importance 30, business 9, compA 8, compB 5, compC 5
   expected RA = 20

3. Image Quality
   importance 20, business 7, compA 7, compB 7, compC 6
   expected RA = 0

4. Ease of Use
   importance 10, business 4, compA 6, compB 7, compC 6
   expected RA = -10

Default Tab B:
Service Quality should produce SQI = 90.

Default Tab C:
Brand Reputation should produce BRI = 140.

OPI weights:
- Product weight = 0.60
- Service weight = 0.30
- Brand weight = 0.10

OPI formula:
OPI = PPI * productWeight + SQI * serviceWeight + BRI * brandWeight

Expected default:
PPI = 137
SQI = 90
BRI = 140
OPI = 123

Default Tab D Cost of Purchase data:
Cost of Purchase should produce CPI = 103.

Rows:
1. Purchase Price
   importance 40, business 7, compA 8, compB 5, compC 5
   expected RA = +27
   This is the deliberate SIGN CHECK trap.

2. Service & Repair
   importance 30, business 5, compA 6, compB 7, compC 6
   expected RA = -10

3. Toner
   importance 20, business 5, compA 8, compB 7, compC 5
   expected RA = -14

4. Paper
   importance 10, business 6, compA 6, compB 5, compC 5
   expected RA = 0

CPI formula:
CPI = 100 + sum(cost RA scores)

PCV formula:
PCV = OPI - CPI

Expected default:
CPI = 103
PCV = 20
Zone = Superior

Zone classification:
- PCV > 0: Superior value zone
- PCV = 0: Fair value zone
- PCV < 0: Inferior value zone

SIGN CHECK mechanism:
If any Tab D cost RA is positive:
- Hide CPI and PCV outputs.
- Display red alert explaining the sign inversion.
- Require the student to click:
  "I understand — show my results"
- After confirmation, reveal CPI and PCV.
- Keep a small reminder badge:
  "Review sign rule before case."

Required SIGN CHECK text:
"SIGN CHECK: You have a positive relative advantage score on a cost component.
For cost components, the sign runs in the OPPOSITE direction from the performance
index: a HIGHER cost rating means your product costs MORE than competitors —
which is a competitive DISADVANTAGE on that dimension, not an advantage.

Purchase Price RA = +27 does NOT mean you are 27% better on price. It means
customers rate your price as HIGHER than competitors.

Confirm you understand this before viewing your Cost of Purchase Index."

Validation:
- Tab A/B/C/D importance weights must sum to exactly 100.
- If not, show:
  "Importance weights must sum to 100. Current total: [X]."
- OPI weights must sum to 1.0.

Value map:
- X-axis = CPI.
- Y-axis = OPI.
- Fair value line: OPI = CPI.
- Company point plotted at current CPI and OPI.

Display precision:
- RA scores: one decimal if needed.
- Index values: one decimal if needed.
- PCV: one decimal if needed.

Technical constraints:
- Vanilla JavaScript.
- Chart.js CDN permitted.
- No persistence.
- No Canvas API.
- No server calls.
- Canvas iframe-safe.
- Mobile responsive to 320px.
- ARIA labels and keyboard-accessible tabs, inputs, alerts, and buttons required.

Do not expose worksheet answer keys inside the app UI.
*/
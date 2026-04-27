/*
MKT 472 · Module 4 · App 1
Lifecycle Cost & Economic Value Calculator

Purpose:
This app helps students see that a higher-priced product can still create
positive customer value when lifecycle cost savings exceed the purchase-price
premium. The key instructional contrast is between purchase price and total
lifecycle cost.

Core calculations:
- Competitor LCC =
  competitor purchase price
  + competitor installation/acquisition
  + competitor usage/operating
  + competitor financing/insurance
  + competitor maintenance
  + competitor disposal

- Company LCC =
  company purchase price
  + company installation/acquisition
  + company usage/operating
  + company financing/insurance
  + company maintenance
  + company disposal

- Economic Value =
  Competitor LCC - Company LCC

- Price Premium % =
  ((Company Purchase Price - Competitor Purchase Price) / Competitor Purchase Price) * 100

- Company Non-Price Costs =
  company installation/acquisition
  + company usage/operating
  + company financing/insurance
  + company maintenance
  + company disposal

- Indifference Price =
  Competitor LCC - Company Non-Price Costs

- Headroom =
  Indifference Price - Company Purchase Price

- Customer Savings at Scale =
  Economic Value * selected quantity

Required presets:
1. Telecom Switch
   Competitor:
   - Purchase Price = 300
   - Installation / Acquisition = 200
   - Usage / Operating = 500
   - Financing / Insurance = 0
   - Maintenance = 0
   - Disposal = 0

   Company:
   - Purchase Price = 375
   - Installation / Acquisition = 100
   - Usage / Operating = 400
   - Financing / Insurance = 0
   - Maintenance = 0
   - Disposal = 0

   Expected outputs:
   - Competitor LCC = 1000
   - Company LCC = 875
   - Economic Value = 125
   - Indifference Price = 500
   - Headroom = 125

2. Indifference Zone
   Same as Telecom Switch except:
   - Company Purchase Price = 500

   Expected outputs:
   - Competitor LCC = 1000
   - Company LCC = 1000
   - Economic Value = 0
   - Indifference Price = 500
   - Headroom = 0

Display rules:
- Dollar amounts: nearest dollar with $ formatting.
- Percentages: one decimal place with sign.
- Economic Value:
  - Green state if positive.
  - Gold state if zero.
  - Red state if negative.
- If Company Purchase Price > Indifference Price, display above-ceiling warning.
- Quantity toggle must update total customer savings for 1, 10, and 100 units.

Chart:
- Stacked bar chart comparing Competitor LCC and Company LCC.
- Six stack components:
  purchase price, installation/acquisition, usage/operating,
  financing/insurance, maintenance, disposal.

Technical constraints:
- Vanilla JavaScript.
- No persistence.
- No server calls.
- No Canvas API.
- Canvas iframe-safe.
- Mobile responsive to 320px.
- ARIA labels and keyboard-accessible controls required.

Do not expose worksheet answer keys inside the app UI.
*/
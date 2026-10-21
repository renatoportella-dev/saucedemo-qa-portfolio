# Manual Test Cases — SauceDemo

**Application:** https://www.saucedemo.com/  
**Author:** Renato Portella  
**Status:** Test design complete, execution **NOT RUN**  
**Default precondition:** App loads in a clean browser session.  
**Accounts:** Use the public demo credentials shown on the application's login page; `standard_user` is used unless a case specifies otherwise.

> Each scenario below is a **planned** test, not a claim of successful execution. Record actual results and evidence when running it.

| ID | Feature | Priority | Expected result | Execution |
|---|---|---|---|---|
| TC-001 | Valid login | P0 | Inventory page opens | Not Run |
| TC-002 | Invalid login | P1 | Error message; no login | Not Run |
| TC-003 | Empty credentials | P1 | Required-field message | Not Run |
| TC-004 | Locked-out account | P1 | Login denied with feedback | Not Run |
| TC-005 | Logout | P1 | Returns to login | Not Run |
| TC-006 | Inventory listing | P1 | Products and key details display | Not Run |
| TC-007 | Product details | P2 | Details match selected product | Not Run |
| TC-008 | Sort name A→Z | P2 | Names ascending | Not Run |
| TC-009 | Sort name Z→A | P2 | Names descending | Not Run |
| TC-010 | Sort price low→high | P2 | Prices ascending | Not Run |
| TC-011 | Sort price high→low | P2 | Prices descending | Not Run |
| TC-012 | Add product | P0 | Cart badge and contents update | Not Run |
| TC-013 | Remove product | P1 | Item removed and badge updates | Not Run |
| TC-014 | Add multiple products | P1 | All selected items in cart | Not Run |
| TC-015 | Cart navigation | P1 | Cart contents persist through navigation | Not Run |
| TC-016 | Empty checkout fields | P1 | Missing data is rejected | Not Run |
| TC-017 | Valid customer details | P0 | Checkout overview opens | Not Run |
| TC-018 | Checkout total | P1 | Item total and calculated total are consistent | Not Run |
| TC-019 | Finish checkout | P0 | Order completion confirmation appears | Not Run |
| TC-020 | Cancel checkout | P2 | Expected navigation; no order confirmation | Not Run |

## Detailed steps and assertions

### TC-001 — Successful login
**Precondition:** Signed out. **Data:** `standard_user` plus public demo password.  
1. Open the login page.
2. Enter valid demo credentials.
3. Select **Login**.  
**Expected:** Inventory opens and product items are visible. **Actual:** Pending. **Evidence:** Pending.

### TC-002 — Invalid login
**Precondition:** Signed out. **Data:** Username `invalid_qa_account`, password `wrong_password`.  
1. Enter the invalid username and password.
2. Select **Login**.  
**Expected:** Login is rejected and a useful error message is shown. **Actual:** Pending. **Evidence:** Pending.

### TC-003 — Login with blank credentials
**Precondition:** Signed out.  
1. Leave both username and password empty.
2. Select **Login**.  
**Expected:** Login is prevented and an appropriate required-field error is shown. **Actual:** Pending. **Evidence:** Pending.

### TC-004 — Locked-out account
**Precondition:** Signed out. **Data:** `locked_out_user` plus public demo password.  
1. Enter the locked-out demo username and password.
2. Select **Login**.  
**Expected:** Account cannot proceed and receives a meaningful error message. **Actual:** Pending. **Evidence:** Pending.

### TC-005 — Logout
**Precondition:** Signed in as standard user.  
1. Open the application menu.
2. Select **Logout**.  
**Expected:** The login screen is displayed; protected inventory is no longer open. **Actual:** Pending. **Evidence:** Pending.

### TC-006 — Inventory list and essential information
**Precondition:** Signed in.  
1. Open Inventory.
2. Inspect item cards, names, prices, descriptions, and product action buttons.  
**Expected:** Products are listed; each visible card includes required product information. **Actual:** Pending. **Evidence:** Pending.

### TC-007 — Product detail consistency
**Precondition:** Signed in, inventory visible.  
1. Note a product's name and price in inventory.
2. Open its detail page.
3. Compare name and price.  
**Expected:** Selected product details correspond to the inventory card. **Actual:** Pending. **Evidence:** Pending.

### TC-008 — Sort names ascending
**Precondition:** Inventory page open.  
1. Select **Name (A to Z)**.
2. Read visible product names in order.  
**Expected:** Product names are alphabetically ascending. **Actual:** Pending. **Evidence:** Pending.

### TC-009 — Sort names descending
**Precondition:** Inventory page open.  
1. Select **Name (Z to A)**.
2. Read visible product names in order.  
**Expected:** Product names are alphabetically descending. **Actual:** Pending. **Evidence:** Pending.

### TC-010 — Sort prices ascending
**Precondition:** Inventory page open.  
1. Select **Price (low to high)**.
2. Record prices in displayed order.  
**Expected:** Each price is greater than or equal to the prior price. **Actual:** Pending. **Evidence:** Pending.

### TC-011 — Sort prices descending
**Precondition:** Inventory page open.  
1. Select **Price (high to low)**.
2. Record prices in displayed order.  
**Expected:** Each price is less than or equal to the prior price. **Actual:** Pending. **Evidence:** Pending.

### TC-012 — Add to cart
**Precondition:** Signed in with an empty cart.  
1. Add **Sauce Labs Backpack**.
2. Inspect the shopping cart badge.
3. Open the cart.  
**Expected:** Badge shows one item and Backpack is visible in the cart. **Actual:** Pending. **Evidence:** Pending.

### TC-013 — Remove from cart
**Precondition:** Backpack is in the cart.  
1. Open the cart.
2. Select **Remove** on Backpack.  
**Expected:** Backpack disappears and the badge accurately reflects remaining items. **Actual:** Pending. **Evidence:** Pending.

### TC-014 — Multiple products
**Precondition:** Signed in, cart empty.  
1. Add Backpack and Bike Light.
2. Open the cart.  
**Expected:** Both products are present and badge count is two. **Actual:** Pending. **Evidence:** Pending.

### TC-015 — Cart persistence during navigation
**Precondition:** An item has been added.  
1. Open the cart.
2. Return to the inventory.
3. Reopen the cart.  
**Expected:** The previously selected product remains in the cart. **Actual:** Pending. **Evidence:** Pending.

### TC-016 — Reject empty checkout information
**Precondition:** A product is in cart.  
1. Open cart and proceed to checkout.
2. Leave first name, last name, and postal code blank.
3. Select **Continue**.  
**Expected:** Checkout does not advance and displays missing-information feedback. **Actual:** Pending. **Evidence:** Pending.

### TC-017 — Valid checkout information
**Precondition:** A product is in cart. **Data:** `QA`, `Tester`, `12345`.  
1. Open checkout information.
2. Enter dummy first name, last name, and postal code.
3. Select **Continue**.  
**Expected:** Checkout overview opens with the selected item. **Actual:** Pending. **Evidence:** Pending.

### TC-018 — Checkout totals
**Precondition:** Checkout overview open with products in cart.  
1. Record each item price and displayed item subtotal.
2. Record tax and final total.
3. Compare subtotal to sum of items and total to subtotal plus tax (allow normal rounding).  
**Expected:** Displayed amounts are arithmetically consistent. **Actual:** Pending. **Evidence:** Pending.

### TC-019 — Checkout completion
**Precondition:** Overview page open with valid customer details.  
1. Select **Finish**.
2. Observe completion screen.  
**Expected:** A clear order completion confirmation appears. **Actual:** Pending. **Evidence:** Pending.

### TC-020 — Cancel checkout
**Precondition:** Checkout information or overview is open.  
1. Select **Cancel**.
2. Record destination page and cart state.  
**Expected:** Checkout is abandoned without an order completion confirmation; navigation follows the application's intended flow. **Actual:** Pending. **Evidence:** Pending.

## Execution record template

For every run, copy this record into an execution log:

- **Case ID:**
- **Execution date (timezone):**
- **Tester:**
- **OS / browser / version:**
- **Demo user and initial cart state:**
- **Actual result:**
- **Status:** Pass / Fail / Blocked / Not Run
- **Evidence path or URL:**
- **Defect ID if failed:**
- **Notes / observations:**

## Evidence naming

Use descriptive filenames like `TC-012-cart-backpack-2026-10-21.png`. Do not include private details or passwords in screenshots.

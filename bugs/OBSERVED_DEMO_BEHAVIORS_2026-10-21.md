# Observed Behaviors — SauceDemo Demo Accounts

**Date of manual exploratory session:** October 21, 2026  
**Tester:** Renato Portella  
**Status:** Evidence recorded; reproduction steps and account verification still need completion before formally filing a defect.

SauceDemo intentionally offers demo users with different, sometimes faulty behavior. These are **QA training findings**, not accusations of defects in a production store.

## DEMO-001 — Incorrect repeated product imagery with `problem_user`

- **Category:** Product presentation / UI
- **Observed:** Different inventory items (Backpack, Bike Light, shirts and jacket) display the same dog photograph in their cards.
- **Expected:** Each product card should display the image corresponding to its product.
- **Account recorded in historical notes:** `problem_user`
- **Evidence filename:** `image(20261021-185017).png`
- **Impact in the demo:** Images do not communicate the advertised products accurately.
- **Reproducibility:** One screenshot evidence set; repetitions across distinct sessions not measured.
- **Classification:** Observed demo-account anomaly; likely intentional behavior for QA training.
- **Follow-up if creating a standalone bug report:** Log in to `problem_user`, inspect inventory cards, record actual repeatability, attach image evidence.

## DEMO-002 — Sorting error dialog and inconsistent ascending price order

- **Category:** Functional / product sorting
- **Observed:** A browser alert states “Sorting is broken! This error has been reported to Backtrace.” In another captured image, “Price (low to high)” is selected, but visible prices include **$6.96, $67.43, $36.62, $92.59, $88.33, $17**, which are not ascending.
- **Expected:** The selected sorting mode places prices in non-decreasing order with no blocking error.
- **Account:** Historical notes refer to `error_user`; **the screenshots do not identify the active account**, so the exact account remains unverified.
- **Evidence filenames:** `image(20261021-185720).png` and `image(20261021-190009).png`
- **Impact in the demo:** Sorting cannot be trusted to present ordered products.
- **Reproducibility:** Captured within one exploratory session; cross-session repeatability not measured.
- **Classification:** Observed demo-account anomaly; possibly intentionally seeded.

## Other observations awaiting differentiation

- A cart screenshot does not display a product image alongside the item. This alone **does not establish a defect**; the cart may intentionally omit images.
- Some product-detail screenshots did not show product description. The original account is not fully documented; review against intended demo design.
- `performance_glitch_user` felt slow in earlier notes, but no timed measurements exist, so no performance bug is claimed.

## Evidence integrity

Source screenshots are stored in the separate recovered evidence archive and are not yet committed to GitHub. Do not claim further bug reproduction or fixes without a test record.

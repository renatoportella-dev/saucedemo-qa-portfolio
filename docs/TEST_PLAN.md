# Test Plan — SauceDemo

**Project:** SauceDemo Manual QA Portfolio  
**Author:** Renato Portella  
**Application:** https://www.saucedemo.com/  
**Document version:** 1.0  
**Document status:** Test design complete; execution pending

## 1. Objective

Evaluate critical e-commerce user journeys using a repeatable, evidence-based manual QA process. The objective is to document test coverage, identify reproducible defects, and communicate risk clearly.

## 2. In scope

- Authentication: valid, invalid, blank, and locked-out users
- Product inventory: visibility, product details, and sorting
- Shopping cart: adding/removing items, badge accuracy, persistence while navigating
- Checkout: required customer fields, review, and completion
- Navigation, logout, and basic UI feedback
- Exploratory investigation of different SauceDemo demo-user behaviors

## 3. Out of scope

- Real payments or payment processing
- Security penetration tests and load testing
- Real user/customer data
- Backend database changes (no access to SauceDemo's actual backend)
- Claims about browser or device compatibility until actually tested

## 4. Test environment

| Attribute | Target / recording instruction |
| --- | --- |
| Base URL | https://www.saucedemo.com/ |
| Platform | Desktop web |
| Browser | Record actual browser and version during execution |
| Operating system | Record actual OS during execution |
| Test accounts | Public demo accounts displayed by SauceDemo |
| Test data | Dummy customer names and postal codes only |
| Network | Record relevant outages or failures |

**Do not enter personal credentials, payment cards, or sensitive information.**

## 5. Test approach

1. Open a clean browser session and confirm the application is reachable.
2. For each case, record execution date, browser, demo user, and test data.
3. Perform the documented steps exactly.
4. Compare the actual outcome to the expected outcome.
5. Mark **Pass**, **Fail**, **Blocked**, or **Not Run**.
6. Attach evidence for relevant results. Failed cases require a reproducible bug report or an explicit explanation.
7. Re-test defects after any observed change.

## 6. Priorities and risks

- **P0 / Critical:** Cannot sign in using standard credentials or cannot complete the basic checkout path.
- **P1 / High:** Major cart or checkout logic is incorrect.
- **P2 / Medium:** Sorting, validation, or product details behave incorrectly.
- **P3 / Low:** Cosmetic feedback, alignment, or copy issues.

Priority refers to what should be tested or addressed first. Severity is assessed separately when a verified defect is filed.

## 7. Entry and exit criteria

**Entry:** URL reachable, expected demo credentials available, test cases reviewed.

**Exit (for a completed cycle):** All targeted cases have recorded outcomes; failed tests link to defect reports; evidence and a summary include date, environment, coverage, and unresolved limitations. If not all cases run, explicitly state partial coverage.

## 8. Deliverables

- `manual/TEST_CASES.md` — 20 designed manual cases
- `bugs/BUG_REPORT_TEMPLATE.md` — reporting format (not an actual defect)
- `reports/TEST_EXECUTION_SUMMARY.md` — pending execution summary
- `tests/saucedemo.spec.js` — sample automated smoke tests

## 9. Reporting rules

Do not count a designed test as executed, a possible problem as a confirmed defect, or an unrun automation as passing. All statuses start at **Not Run**. This repository demonstrates a transparent QA workflow, with results added after real execution.

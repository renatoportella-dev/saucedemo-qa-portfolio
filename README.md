# SauceDemo — QA Engineering Portfolio

**Manual testing · Playwright automation · Bug reporting · API testing · SQL · AI quality evaluation**

**Author:** Renato Portella  
**Contact:** [rportella.pe@gmail.com](mailto:rportella.pe@gmail.com)  
**Application under test:** [SauceDemo](https://www.saucedemo.com/)

## Project overview

An independent, educational software quality assurance portfolio demonstrating structured test design, reproducible bug-reporting practices, browser automation, API checks, SQL validation, and AI response evaluation.

**Evidence integrity:** An earlier manual testing session on October 21, 2026 documented **10 exploratory scenarios with 28 recovered screenshots**. These historical results are separate from the subsequently authored **20-case structured plan**. The **28 original PNG screenshots are published in GitHub** in [evidence/capturas](evidence/capturas/). The six automated tests were independently validated by GitHub Actions. Demo-account anomalies are recorded as training observations, not production defect claims.

## Portfolio contents

| Area | Document | What it demonstrates |
| --- | --- | --- |
| Test strategy | [Test plan](docs/TEST_PLAN.md) | Scope, risks, environment, process and exit criteria |
| Manual QA | [20 designed cases](manual/TEST_CASES.md) · [10 historically executed scenarios](manual/SESSION_2026-10-21.md) | Login, sorting, cart, and checkout observations with a restored evidence ledger |
| Defect tracking | [Bug report template](bugs/BUG_REPORT_TEMPLATE.md) · [Observed demo anomalies](bugs/OBSERVED_DEMO_BEHAVIORS_2026-10-21.md) | Two screenshot-backed observations, with repeatability limits clearly stated |
| Test reporting | [Manual execution summary](reports/TEST_EXECUTION_SUMMARY.md) · [Verified automation report](reports/AUTOMATION_EXECUTION_2026-10-21.md) | Transparent outcomes and CI evidence |
| Browser automation | [Playwright tests](tests/saucedemo.spec.js) · [Instructions](automation/README.md) | Six coded checks; artifacts and traces on failure |
| API testing | [API practice](api/README.md) | HTTP response validation with a separate public demo API |
| SQL | [PostgreSQL exercise](sql/QA_VALIDATION_EXERCISES.sql) | Queries for validating fictional orders |
| AI evaluation | [Evaluation rubric](ai-qa/AI_EVALUATION_RUBRIC.md) | Accuracy, safety, instruction-following, usefulness |
| Evidence | [28 screenshots with direct links](evidence/SCREENSHOT_INDEX.md) · [Image folder](evidence/capturas/) | Original PNG evidence published and linked |

## Manual QA — recovered evidence and structured plan

### Example screenshots

| Normal catalog view | Exploratory anomaly in `problem_user` |
| --- | --- |
| ![Normal product inventory](evidence/capturas/image%2820261021-181050%29.png) | ![Repeated dog image on unrelated products](evidence/capturas/image%2820261021-185017%29.png) |

[Browse all 28 PNG screenshots](evidence/SCREENSHOT_INDEX.md).


The historical October 21 session contains **10 documented manual scenarios**: **7** showing expected behavior, **2** showing intentionally problematic demo-account behavior, and **1** requiring more context. All original screenshots are now [published in GitHub](evidence/capturas/) and linked to the [manual session](manual/SESSION_2026-10-21.md). [Read the historical manual session](manual/SESSION_2026-10-21.md).

Separately, the **20-case formal test plan** covers authentication, logout, inventory, sorting, cart and checkout. At least eight of the planned cases have related historical evidence; remaining case-level reconciliation must not be mistaken for missing all earlier work. [Read the current manual test summary](reports/TEST_EXECUTION_SUMMARY.md).

## Automated QA — Playwright

The repository contains six browser tests and a GitHub Actions workflow configured to run them in Chromium on pushes, pull requests and manual dispatch.

**Verified CI execution (October 21, 2026): 6 passed · 0 failed · 3.6 seconds.** [View the successful updated workflow run](https://github.com/renatoportella-dev/saucedemo-qa-portfolio/actions/runs/39695605034) or [read the execution report](reports/AUTOMATION_EXECUTION_2026-10-21.md). This result concerns six automated checks only; previously captured manual observations are documented separately.

```bash
npm install
npx playwright install chromium
npm test
```

Runs: [GitHub Actions — Playwright QA Tests](https://github.com/renatoportella-dev/saucedemo-qa-portfolio/actions/workflows/playwright.yml)

GitHub Actions reports and failure evidence are generated during CI execution. Results are specific to each individual run and can change on future builds.

## Skills practiced

- Manual test strategy and case design
- Positive and negative testing
- E-commerce smoke and regression workflows
- Playwright and JavaScript browser automation
- GitHub Actions continuous integration
- Test evidence collection and defect documentation
- REST API response assertions
- SQL queries for data validation
- AI answer evaluation and scoring rubrics

## Next milestones

- [x] Repository and structured QA documentation
- [x] 20 designed manual test cases
- [x] Six Playwright test scripts
- [x] GitHub Actions configuration
- [x] API, SQL, and AI evaluation practice materials
- [x] Recover and document historical manual execution (10 scenarios; 28 original screenshots)
- [x] Publish all 28 PNG screenshots in GitHub and link them in the reports
- [x] Verify successful Playwright GitHub Actions run and publish execution evidence
- [x] Document two screenshot-supported demo-account anomalies with explicit limitations
- [ ] Reconcile historical steps and inputs with the 20-case formal manual test plan
- [ ] Add completed API/SQL/AI execution evidence

---

Independent learning project; not endorsed by Sauce Labs or the SauceDemo maintainers.

# SauceDemo — QA Engineering Portfolio

**Manual testing · Playwright automation · Bug reporting · API testing · SQL · AI quality evaluation**

**Author:** Renato Portella  
**Contact:** [rportella.pe@gmail.com](mailto:rportella.pe@gmail.com)  
**Application under test:** [SauceDemo](https://www.saucedemo.com/)

## Project overview

An independent, educational software quality assurance portfolio demonstrating structured test design, reproducible bug-reporting practices, browser automation, API checks, SQL validation, and AI response evaluation.

**Integrity note:** Scenarios and test code have been authored, but manual execution statuses remain **Not Run** until independently verified. Automation success or failure should be taken only from completed GitHub Actions runs, not inferred from code being present. The bug report currently available is a template, not a discovered defect.

## Portfolio contents

| Area | Document | What it demonstrates |
| --- | --- | --- |
| Test strategy | [Test plan](docs/TEST_PLAN.md) | Scope, risks, environment, process and exit criteria |
| Manual QA | [20 manual test cases](manual/TEST_CASES.md) | Valid and invalid login, sorting, cart, checkout |
| Defect tracking | [Bug report template](bugs/BUG_REPORT_TEMPLATE.md) | Reproducibility, severity, expected vs. actual, evidence |
| Test reporting | [Execution summary](reports/TEST_EXECUTION_SUMMARY.md) | Transparent execution metrics and constraints |
| Browser automation | [Playwright tests](tests/saucedemo.spec.js) · [Instructions](automation/README.md) | Six coded checks; artifacts and traces on failure |
| API testing | [API practice](api/README.md) | HTTP response validation with a separate public demo API |
| SQL | [PostgreSQL exercise](sql/QA_VALIDATION_EXERCISES.sql) | Queries for validating fictional orders |
| AI evaluation | [Evaluation rubric](ai-qa/AI_EVALUATION_RUBRIC.md) | Accuracy, safety, instruction-following, usefulness |
| Evidence | [Evidence instructions](evidence/README.md) | Real, sanitized screenshot handling |

## Manual QA — planned coverage

20 documented test cases cover authentication, logout, inventory display, product details, sorting, adding/removing items, cart navigation, and checkout. Each case includes steps and expected results. **All are initially Not Run.**

## Automated QA — Playwright

The repository contains six browser tests and a GitHub Actions workflow configured to run them in Chromium on pushes, pull requests and manual dispatch.

```bash
npm install
npx playwright install chromium
npm test
```

Runs: [GitHub Actions — Playwright QA Tests](https://github.com/renatoportella-dev/saucedemo-qa-portfolio/actions/workflows/playwright.yml)

**Do not assume automated tests have passed until the workflow shows a completed result.** GitHub Actions reports and failure evidence are generated during CI execution.

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
- [ ] Record real manual execution and link screenshots
- [ ] Review completed automation workflow outcome and investigate failures
- [ ] Submit confirmed bug reports only after reproduction
- [ ] Add completed API/SQL/AI execution evidence

---

Independent learning project; not endorsed by Sauce Labs or the SauceDemo maintainers.

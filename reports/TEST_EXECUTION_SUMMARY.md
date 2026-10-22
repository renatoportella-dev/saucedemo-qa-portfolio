# QA Test Execution Summary — SauceDemo

**Portfolio owner:** Renato Portella  
**Historical manual session:** October 21, 2026  
**Application:** https://www.saucedemo.com/  
**Environment:** Desktop web browser; OS and exact browser version not recorded  
**Source of historical results:** [Manual session records](../manual/SESSION_2026-10-21.md) and recovered screenshot archive  
**Image availability:** 28 original PNGs recovered in a separate ZIP, **not yet attached as binary files in GitHub**.

## Historical manual testing — restored results

A SauceDemo exploratory session **was already performed** before the new 20-case test plan was authored. The old session documented ten discrete scenarios:

| Historical manual outcome | Scenarios |
| --- | ---: |
| Expected behavior observed | **7** |
| Demo-account anomalies observed | **2** |
| Observation requiring further interpretation | **1** |
| **Total historical scenarios documented** | **10** |

This does **not** mean 10 out of the later 20 formal test cases passed. Historical test IDs M-01–M-10 and planned test IDs TC-001–TC-020 are **different scopes**. At least eight planned IDs have related historical evidence, but precise prerequisites and input data may differ.

- [Read full historical manual test ledger](../manual/SESSION_2026-10-21.md)
- [See observed demo-account behaviors](../bugs/OBSERVED_DEMO_BEHAVIORS_2026-10-21.md)
- [Browse screenshot filename index](../evidence/SCREENSHOT_INDEX.md)

## 20-case structured manual plan

| Metric | Count / status |
| --- | --- |
| Formal cases designed | 20 |
| Formal results conclusively reconciled to historical screenshots | 0 / 20 (mapping underway; not a statement that no prior testing occurred) |
| Planned cases with identified related historical screenshots | 8 / 20 |
| Remaining planned cases | 12 / 20 (evidence coverage not yet matched) |

Related current IDs: TC-002, TC-003, TC-004, TC-006, TC-010, TC-017, TC-018, TC-019.

**No re-execution is needed solely to migrate already collected evidence**. Missing or materially different planned test conditions should be marked separately rather than retroactively called passes.

## Confirmed automation — separate QA evidence

The successful Playwright run on October 21, 2026 produced **6 passed / 0 failed** using Chromium. [Read the CI report](AUTOMATION_EXECUTION_2026-10-21.md) or the [successful GitHub Actions run](https://github.com/renatoportella-dev/saucedemo-qa-portfolio/actions/runs/39695605034).

Manual exploratory anomalies are not failures in the separate `standard_user` automated suite.

## Defect interpretation

**Two demo-account issues were captured:**

- Repeated incorrect product photographs with `problem_user`.
- Sorting-error alert and inconsistent order, with the specific active account not proven by the image alone.

These are valid findings for a QA portfolio, but SauceDemo's demo users intentionally exhibit different behavior. They are **not presented as independently confirmed production defects**.

An absent image in a cart screenshot and subjective performance impressions remain inconclusive without the relevant design requirements and timing data.

## Remaining documentation tasks

1. Upload original screenshot PNGs from the recovered ZIP into `evidence/capturas/` and replace filenames with working source links.
2. Reconcile individual historical screenshots to the later 20 formal test-case IDs where preconditions match.
3. Preserve separate results for the automated CI suite.
4. File standalone defect reports only when reproduction details justify that label.

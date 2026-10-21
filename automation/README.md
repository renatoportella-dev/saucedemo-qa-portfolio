# Automated QA — Playwright

This project provides six Playwright tests against SauceDemo, with Chromium as the configured browser.

## Requirements

- Node.js 20+ (Node.js 22 recommended)
- Internet access to the public SauceDemo demo application

## Run locally

```bash
npm install
npx playwright install chromium
npm test
```

To run just critical smoke tests:

```bash
npm run test:smoke
```

To see a local browser window:

```bash
npm run test:headed
```

## GitHub Actions

See `.github/workflows/playwright.yml`. The workflow is configured for pushes to `main`, pull requests, and manual runs from the **Actions** tab. It uploads a Playwright HTML report, and saves traces/screenshots on failures. Actual results must be read from a completed workflow run; creating this workflow does not itself prove a pass.

## Coverage

- AT-001: valid login
- AT-002: invalid login
- AT-003: add and remove shopping-cart item
- AT-004: checkout completion
- AT-005: price ascending sort
- AT-006: locked-out demo account

These tests are educational and independent of SauceDemo's maintainers. External website behavior and demo account availability may change. If a test fails, inspect the trace and re-run before classifying the result as an application defect.

const { test, expect } = require('@playwright/test');

const demoPassword = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';

async function login(page, username = 'standard_user') {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(demoPassword);
  await page.locator('[data-test="login-button"]').click();
}

test.describe('SauceDemo automated smoke tests', () => {
  test('AT-001 @smoke: standard user can sign in', async ({ page }) => {
    await login(page);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('AT-002 @smoke: invalid credentials are rejected', async ({ page }) => {
    await login(page, 'invalid_qa_account');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page).not.toHaveURL(/inventory\.html/);
  });

  test('AT-003 @smoke: user can add and remove item from cart', async ({ page }) => {
    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_link').click();
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(0);
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

  test('AT-004 @smoke: valid checkout reaches completion', async ({ page }) => {
    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('QA');
    await page.locator('[data-test="lastName"]').fill('Tester');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(page.locator('.complete-header')).toContainText('Thank you for your order');
  });

  test('AT-005: inventory sorts prices from low to high', async ({ page }) => {
    await login(page);
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    const priceTexts = await page.locator('.inventory_item_price').allTextContents();
    const prices = priceTexts.map(value => Number(value.replace('$', '').trim()));
    expect(prices.length).toBeGreaterThan(1);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  test('AT-006: locked-out user sees a login error', async ({ page }) => {
    await login(page, 'locked_out_user');
    await expect(page.locator('[data-test="error"]')).toContainText(/locked out/i);
    await expect(page).not.toHaveURL(/inventory\.html/);
  });
});

import { test, expect } from '../src/fixtures/base';

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
  await page.screenshot({path: 'title.png', fullPage:true});
});

test('get started link', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.screenshot({path: 'link.png', fullPage:true});
});

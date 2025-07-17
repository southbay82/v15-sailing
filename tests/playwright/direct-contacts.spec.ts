import { test, expect } from '@playwright/test';

test('Direct navigation to /articles/contacts renders correct heading', async ({ page }) => {
  await page.goto('http://localhost:3000/articles/contacts');
  await expect(page.locator('h1').first()).toHaveText('Vanguard 15 Contacts');
});

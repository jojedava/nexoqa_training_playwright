import { test, expect } from '@playwright/test';

test('Empty songs', async ({ page }) => {
  page.route('http://192.168.1.102:8081/songs', async (route) => {
    console.log('Interceptions: ', route.request().url());
    route.fulfill({
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
  });

  await page.goto('http://192.168.1.102:8080');
  await expect(page.locator('div.pl-4').nth(1)).toContainText(
    'No slot content defined.'
  );
});

test('Return 2 songs', async ({ page }) => {
  page.route('http://192.168.1.102:8081/songs', async (route) => {
    console.log('Interceptions: ', route.request().url());
    route.fulfill({
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      path: './tests/data/songs.json',
    });
  });

  await page.goto('http://192.168.1.102:8080');
  var total = await page.locator('.song').count();
  await expect(total).toBe(2);
});

test.only('Return 2 songs - fetch', async ({ page }) => {
  page.route('**/songs', async (route) => {
    console.log('Interceptions: ', route.request().url());

    const response = await route.fetch();
    const json = await response.json();
    const array = <any>[];
    for (let index = 0; index < 2; index++) {
      array[index] = json[index];
    }

    route.fulfill({
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(array),
    });
  });

  await page.goto('http://192.168.1.102:8080');
  var total = await page.locator('.song').count();
  await expect(total).toBe(2);
});

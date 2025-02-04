import { describe, before, after, test, it } from 'node:test';
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { createServer } from 'http';
import handler from 'serve-handler';
import getPort from 'get-port';

// only test canonical paths
const paths = (() => {
  const file = readFileSync('./_site/sitemap.xml', { encoding: 'utf8' });
  const pathMatch = file.matchAll(/<loc>(.+?\/)<\/loc>/g);
  return Array.from(pathMatch).map(([, url]) => new URL(url).pathname);
})();

describe('accessibility', () => {
  /** @type {Server} */
  let server;

  /** @type {number} */
  let port;

  /** @type {import('puppeteer').Browser} */
  let browser;

  before(async () => {
    port = await getPort();
    browser = await puppeteer.launch();
    server = createServer((request, response) =>
      handler(request, response, { public: '_site' }),
    ).listen(port);
  });

  after(async () => {
    await Promise.all([browser.close(), server.close()]);
  });

  it('has pages to test', () => {
    assert(paths.length);
  });

  paths.forEach((path) => {
    test(path, async () => {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${path}`);
      const results = await new AxePuppeteer(page)
        .withTags([
          'wcag2a',
          'wcag2aa',
          'wcag21a',
          'wcag21aa',
          'wcag22a',
          'wcag22aa',
          'best-practice',
        ])
        .exclude("$('div[data-touchpoints-form-id]')")
        .analyze();
      await page.close();

      assert.deepStrictEqual(results.violations, []);
    });
  });
});

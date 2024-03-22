import { describe, before, after, test, it } from 'node:test';
import assert from 'node:assert';
import { relative, dirname } from 'node:path';
import glob from 'fast-glob';
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { createServer } from 'http';
import path from 'path';
import handler from 'serve-handler';
import getPort from 'get-port';
import { Server } from 'node:http';

const paths = glob
	.sync('_site/**/index.html')
	.map((path) => dirname(relative('_site', path)))
  .filter((path) => path !== '.')
  .map((path) => `/${path}/`);


describe('accessibility', () => {
  /** @type {string} */
	let publicPath;

	/** @type {Server} */
  let server;

	/** @type {number} */
  let port;

	/** @type {import('puppeteer').Browser} */
  let browser;

  before(async () => {
    publicPath = path.relative(process.cwd(), path.resolve('../../_site'));
    port = await getPort();
    browser = await puppeteer.launch();
    server = createServer((request, response) =>
			handler(request, response, { public: publicPath }),
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
      const results = await new AxePuppeteer(page).withTags(['wcag2a', 'wcag2aa']).analyze();
      await page.close();

      assert.deepStrictEqual(results.violations, []);
    });
  });
});
import { describe, before, after, test, it } from 'node:test';
import assert from 'node:assert';
import puppeteer from 'puppeteer';
import { createServer } from 'http';
import handler from 'serve-handler';
import getPort from 'get-port';

const isEqual = assert.deepStrictEqual;
const notEqual = assert.notDeepStrictEqual;

describe('accordions', () => {
  let server, port, browser, page;

  before(async () => {
    port = await getPort();
    console.log(`http://localhost:${port}`);
    browser = await puppeteer.launch({
      headless:false
    });
    server = createServer((req, res) => {
      handler(req, res, { public: '_site' });
    }).listen(port);
  });

  after(async () => {
    await Promise.all([browser.close(), server.close()]);
  });

  test('on /index', async () => {
    page = await browser.newPage();

    await test('is not expanded by default', async () => {
      await page.goto(`http://localhost:${port}/`);
      const accordionBtn = await page
        .waitForSelector('#integration-checklist-accordion > button');
      const accordionContent = await page
        .waitForSelector('#home-register-checklist');
      
      isEqual(
        await accordionBtn.evaluate(el => el.innerText),
        'Information you need to register your application',
        'Accordion button is missing correct text',
      );
      isEqual(
        await accordionContent.evaluate(el => el.checkVisibility()),
        false,
        'Accordion should not be expanded',
      );
      isEqual(
        await accordionBtn.evaluate(el => el.getAttribute('aria-expanded')),
        'false',
        'aria-expanded incorrectly set to "true"',
      )
    });

    await test('is expanded with an anchor in the URL', async () => {
      await page.goto(`http://localhost:${port}/#integration-checklist-accordion`);
      const accordionBtn = await page
        .waitForSelector('#integration-checklist-accordion > button');
      const accordionContent = await page
        .waitForSelector('#home-register-checklist');

      isEqual(
        await accordionContent.evaluate(el => el.checkVisibility()),
        true,
        'Accordion should be expanded',
      );

      const definition = await page
        .waitForSelector('#integration-checklist-accordion ~ dd');
      assert.match(
        await definition.evaluate(el => el.innerText),
        new RegExp('Inter-agency agreement application name'),
        'Checklist content is incorrect',
      );
      isEqual(
        await accordionBtn.evaluate(el => el.getAttribute('aria-expanded')),
        'true',
        'aria-expanded incorrectly set to "false"',
      );
    })
  });
});

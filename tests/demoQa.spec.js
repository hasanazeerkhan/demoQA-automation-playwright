const { test, expect } = require('@playwright/test');
import { linkAndStatus, radioButton, textBox, variousClicks } from "../webElements/elements.js";

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  //Navigating to base url
  await page.goto('/');
  await page.waitForTimeout(5000);
});

test.describe('Demo QA testing', () => {

  test('Text box', async ({ }) => {

    //Verifying URL
    await expect(page).toHaveURL('https://demoqa.com')

    //Verifying page title
    await expect(page).toHaveTitle('DEMOQA')

    //Verifying the visibility of the elements tab
    const element = page.locator(textBox.elements.cardElements)
    await expect(element).toBeVisible();

    //Navigating to text box button
    await page.click(textBox.elements.cardElements);
    await page.click(textBox.elements.textBoxButton);

    //Updating text box    
    await page.locator(textBox.elements.firstName).fill(textBox.textBoxInput[0]);
    await page.locator(textBox.elements.email).fill(textBox.textBoxInput[1]);
    await page.locator(textBox.elements.currentAddress).fill(textBox.textBoxInput[2]);
    await page.locator(textBox.elements.permanentAddress).fill(textBox.textBoxInput[3]);

    //Form submission
    await page.click(textBox.elements.submit);

    //Running a loop to verify the output with respect to the given input
    for (let i = 0; i > textBox.textBoxOutput; i++) {
      const outputVisibility = page.locator(textBox.textBoxOutput[i]);
      await expect(outputVisibility).toBeVisible();
      await expect(outputVisibility).toContainText(textBox.textBoxInput[i]);
    }
  })

  test('Radio button', async ({ }) => {

    //Navigating to Radio tab
    await page.click(textBox.elements.cardElements);
    await page.click(radioButton.elements.radioButtonTab);

    //Verifying Yes
    await page.getByText('Yes').click();
    const element1 = page.locator(radioButton.elements.verification[0]);
    await expect(element1).toBeVisible();

    //Verifying Impressive
    await page.getByText('Impressive').click();
    const element2 = page.locator(radioButton.elements.verification[1]);
    await expect(element2).toBeVisible();

    //Verifying NO button is in disabled state
    const disabledNoButton = page.locator(radioButton.elements.input[2]);
    await expect(disabledNoButton).toBeDisabled()
  })

  test('Various clicks', async ({ }) => {

    //Navigating to Tab
    await page.click(textBox.elements.cardElements);
    await page.click(variousClicks.tab);

    //Double click and its verification
    await page.locator(variousClicks.doubleClick).dblclick();
    const element1 = page.locator(variousClicks.message.doubleClick);
    await expect(element1).toBeVisible();

    //Right click and its verification
    await page.locator(variousClicks.rightClick).click({ button: 'right' });
    const element2 = page.locator(variousClicks.message.rightClick);
    await expect(element2).toBeVisible();

    //Single click and its verification
    await page.locator(variousClicks.singleClick).click();
    const element3 = page.locator(variousClicks.message.singleClick);
    await expect(element3).toBeVisible();
  })

});

test.afterAll(async ({ browser }) => {
  await browser.close();
});
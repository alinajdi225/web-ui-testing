const { By, until } = require("selenium-webdriver");
const { TARGET_URL } = require("../../config");
const delay = require("../../utils/delay");

async function performAction(driver) {
  await driver.get(`${TARGET_URL}/contact_us`);
  await delay(2000);

  const nameInput = await driver.wait(
    until.elementLocated(By.css('input[data-qa="name"]')),
    10000
  );
  const emailInput = await driver.findElement(By.css('input[data-qa="email"]'));
  const subjectInput = await driver.findElement(By.css('input[data-qa="subject"]'));
  const messageInput = await driver.findElement(By.css('textarea[data-qa="message"]'));

  await nameInput.sendKeys("Demo User");
  await emailInput.sendKeys("demo@example.com");
  await subjectInput.sendKeys("Automation inquiry");
  await messageInput.sendKeys("This is a demo message from the UI automation project.");
  await delay(1000);

  console.log("Filled out the contact form.");
}

module.exports = performAction;

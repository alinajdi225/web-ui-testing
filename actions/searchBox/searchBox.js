const { By, until } = require("selenium-webdriver");
const delay = require("../../utils/delay");
const { PRODUCTS_URL } = require("../../config");

async function performAction(driver) {
  await driver.get(PRODUCTS_URL);
  await delay(1500);

  const searchInput = await driver.wait(
    until.elementLocated(By.id("search_product")),
    10000
  );
  const searchButton = await driver.findElement(By.id("submit_search"));

  await searchInput.clear();
  await searchInput.sendKeys("Top");
  await delay(500);
  await searchButton.click();
  await delay(2000);

  console.log('Searched for products matching "Top".');
}

module.exports = performAction;

const { By, until } = require("selenium-webdriver");
const delay = require("../../utils/delay");
const { PRODUCTS_URL } = require("../../config");

async function performAction(driver) {
  await driver.get(PRODUCTS_URL);
  await delay(1500);

  const productCards = await driver.wait(
    until.elementsLocated(By.css(".product-image-wrapper")),
    10000
  );

  await driver.actions({ bridge: true }).move({ origin: productCards[0] }).perform();
  await delay(500);

  const addToCartButton = await driver.wait(
    until.elementLocated(By.css(".overlay-content .add-to-cart")),
    10000
  );
  await driver.executeScript("arguments[0].click();", addToCartButton);
  await delay(1000);

  const continueShopping = await driver.wait(
    until.elementLocated(By.css(".modal-content button.btn-success")),
    5000
  );
  await continueShopping.click();
  await delay(1500);

  console.log("Added a product to the cart.");
}

module.exports = performAction;

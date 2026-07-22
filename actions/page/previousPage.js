const { By, until } = require("selenium-webdriver");
const { TARGET_URL } = require("../../config");
const delay = require("../../utils/delay");

async function performAction(driver) {
  await driver.get(`${TARGET_URL}/view_cart`);
  await delay(2000);

  const cartItems = await driver.findElements(By.css("#cart_info_table tbody tr"));
  console.log(`Cart page opened with ${cartItems.length} item(s).`);

  await driver.get(`${TARGET_URL}/products`);
  await delay(1500);
}

module.exports = performAction;

const { TARGET_URL } = require("../../config");
const delay = require("../../utils/delay");

async function performAction(driver) {
  await driver.get(`${TARGET_URL}/about_us`);
  await delay(2000);
  console.log("Opened About Us page.");

  await driver.get(`${TARGET_URL}/products`);
  await delay(1500);
}

module.exports = performAction;

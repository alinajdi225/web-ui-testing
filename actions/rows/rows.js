const { By, until } = require("selenium-webdriver");
const delay = require("../../utils/delay");

async function selectRows(driver, index) {
  const viewProductLinks = await driver.wait(
    until.elementsLocated(By.linkText("View Product")),
    10000
  );

  const productIndex = Math.min(index, viewProductLinks.length) - 1;
  const targetLink = viewProductLinks[productIndex];

  await driver.executeScript(
    "arguments[0].scrollIntoView({ block: 'center' });",
    targetLink
  );
  await delay(500);
  await driver.executeScript("arguments[0].click();", targetLink);
  await delay(2000);

  console.log(`Opened product details for item #${productIndex + 1}.`);

  await driver.navigate().back();
  await delay(2000);
}

module.exports = selectRows;

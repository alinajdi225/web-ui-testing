const { By, until } = require("selenium-webdriver");

async function selectRows(driver, index) {
  const rowsXPath = `/html/body/div/div/div[3]/div[3]/div[2]/div[1]/select/option[${index}]`;

  const rowsElement = await driver.wait(
    until.elementIsVisible(driver.findElement(By.xpath(rowsXPath))),
    10000
  );
  
  await rowsElement.click();
}

module.exports = selectRows;
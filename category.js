const { By, until } = require("selenium-webdriver");

async function selectCategory(driver, index) {
  const categoryXPath = `/html/body/div/div/div[3]/div[2]/div[${index}]`;
  


  const categoryElement = await driver.wait(
    until.elementIsVisible(driver.findElement(By.xpath(categoryXPath))),
    10000
  );
  
  await categoryElement.click();
}

module.exports = selectCategory


const { By, until } = require("selenium-webdriver");

async function selectLocation(driver, index) {
  const cityXPath = `/html/body/div/div/div[3]/div[1]/div[1]/div[2]/ul/li[${index}]`;

  const locationDropDown =  await driver.wait(
    until.elementIsVisible(
      driver.findElement(
        By.xpath("/html/body/div/div/div[3]/div[1]/div[1]/div[1]/div")
      )
    ),
    10000
  );
  await locationDropDown.click();
  await delay (2000);

  const cityElement = await driver.wait(
    until.elementIsVisible(driver.findElement(By.xpath(cityXPath))),
    10000
  );
  
  await cityElement.click();
}

module.exports = selectLocation;



async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

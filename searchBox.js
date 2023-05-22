const { By, until } = require("selenium-webdriver");

//type
async function performAction(driver) {
  const searchBox = await driver.wait(
    until.elementIsVisible(
      driver.findElement(
        By.xpath("/html/body/div/div/div[3]/div[1]/div[2]/div/input")
      )
    ),
    10000
  );
  await searchBox.sendKeys("test");
}

module.exports = performAction;

const { By, until } = require("selenium-webdriver");

//click
async function performAction(driver) {
  const aboutAreeba = await driver.wait(
    until.elementIsVisible(
      driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div[2]/a[1]"))
    ),
    10000
  );
  await aboutAreeba.click();
}

module.exports = performAction;

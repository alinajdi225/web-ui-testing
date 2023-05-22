const { By, until } = require("selenium-webdriver");

//click
async function performAction(driver) {
  const getInTouch = await driver.wait(
    until.elementIsVisible(
      driver.findElement(By.xpath("/html/body/div/div/div[1]/div/div[2]/a[2]"))
    ),
    10000
  );
  await getInTouch.click();
}

module.exports = performAction;

const { By, until } = require("selenium-webdriver");

//click
async function performAction(driver) {
  const previousPage = await driver.wait(
    until.elementIsVisible(
      driver.findElement(
        By.xpath(
          "/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[2]/img[1]"
        )
      )
    ),
    10000
  );
  await previousPage.click();
}

module.exports = performAction;
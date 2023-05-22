const { By, until } = require("selenium-webdriver");

//click
async function performAction(driver) {
  const nextPage = await driver.wait(
    until.elementIsVisible(
      driver.findElement(
        By.xpath(
          "/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[2]/img[2]"
        )
      )
    ),
    10000
  );
  await nextPage.click();
}

module.exports = performAction;

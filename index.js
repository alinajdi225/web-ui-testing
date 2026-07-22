const { Builder } = require("selenium-webdriver");
const { TARGET_URL } = require("./config");
const delay = require("./utils/delay");

const actions = {
  selectLocation: require("./actions/location/location"),
  selectCategory: require("./actions/category/category"),
  selectRows: require("./actions/rows/rows"),
  searchBox: require("./actions/searchBox/searchBox"),
  aboutPage: require("./actions/navBar/aboutPage"),
  contactLink: require("./actions/navBar/contactLink"),
  nextPage: require("./actions/page/nextPage"),
  previousPage: require("./actions/page/previousPage"),
};

async function runAutomationFlow(driver) {
  await driver.manage().window().maximize();

  await actions.selectCategory(driver, 1);
  await delay(2000);

  await actions.selectLocation(driver, 1);
  await delay(2000);

  await actions.searchBox(driver);
  await delay(2000);

  await actions.nextPage(driver);
  await delay(2000);

  await actions.previousPage(driver);
  await delay(2000);

  await actions.selectRows(driver, 1);
  await delay(2000);

  await actions.aboutPage(driver);
  await delay(2000);

  await actions.contactLink(driver);
  await delay(2000);

  console.log("All automation steps completed successfully.");
}

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    console.log(`Navigating to ${TARGET_URL}...`);
    await driver.get(TARGET_URL);
    await runAutomationFlow(driver);
  } catch (error) {
    console.error("Automation failed:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

main();

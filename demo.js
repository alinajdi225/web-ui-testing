const { Builder, By, until } = require("selenium-webdriver");
const XLSX = require("xlsx");
const { TARGET_URL } = require("./config");
const delay = require("./utils/delay");

const actions = {
  selectCategory: require("./actions/category/category"),
  selectLocation: require("./actions/location/location"),
  searchBox: require("./actions/searchBox/searchBox"),
};

async function exportProductList(driver) {
  const productCards = await driver.wait(
    until.elementsLocated(By.css(".productinfo")),
    10000
  );

  const rows = [["Product Name", "Price"]];

  for (const card of productCards) {
    const name = await card.findElement(By.css("h2")).getText();
    const price = await card.findElement(By.css("p")).getText();
    rows.push([name, price]);
  }

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
  XLSX.writeFile(workbook, "product_list.xlsx");
  console.log(`Excel file generated with ${rows.length - 1} products.`);
}

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    console.log(`Navigating to ${TARGET_URL}...`);
    await driver.get(TARGET_URL);
    await driver.manage().window().maximize();

    await actions.selectCategory(driver, 1);
    await actions.selectLocation(driver, 2);
    await actions.searchBox(driver);
    await delay(2000);
    await exportProductList(driver);
  } catch (error) {
    console.error("Demo failed:", error.message);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
}

main();

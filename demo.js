const { Builder, By, until } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
const XLSX = require('xlsx');

const selectLocation = require("./actions/location/location");
const selectCategory = require("./actions/category/category");
const selectRows = require("./actions/rows/rows");
const searchBox = require("./actions/searchBox/searchBox");
const aboutAreeba = require("./actions/navBar/aboutAreeba");
const getInTouch = require("./actions/navBar/getInTouch");
const nextPage = require("./actions/page/nextPage");
const previousPage = require("./actions/page/previousPage");

async function main() {
  try {
    await driver.get("https://areebamerchants.com/#/");

    await driver.wait(async function () {
      const loadingComponent = await driver.findElements(
        By.css(
          ".fixed.bottom-0.left-0.right-0.top-0.z-50.flex.w-full.items-center.justify-center"
        )
      );
      return loadingComponent.length === 0;
    });

    await driver.manage().window().maximize(); // Maximize the window

    //await selectLocation(driver, 2)
    await selectCategory(driver, 4)

    await selectRows(driver, 3);
    await delay(2000);

    const tableElement = await driver.findElement(By.xpath('//table'));

  // Extract the table headers
  const headerElements = await tableElement.findElements(By.xpath('.//th'));
  const headers = await Promise.all(headerElements.map(element => element.getText()));

  // Extract the table rows
  const rowElements = await tableElement.findElements(By.xpath('.//tr'));
  const data = await Promise.all(rowElements.map(async rowElement => {
    const cellElements = await rowElement.findElements(By.xpath('.//td'));
    return Promise.all(cellElements.map(element => element.getText()));
  }));



  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');

  XLSX.writeFile(workbook, 'table_data.xlsx');
  console.log('Excel file generated with table data!');

} finally {
    //await driver.quit();
  }
}

main();

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


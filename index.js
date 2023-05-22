const { Builder, By, until } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

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

    // Function to scroll to an element
    const scrollToElement = async (element) => {
      await driver.executeScript(
        "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
        element
      );
    };

    // Scroll to selectLocation action
    const locationElement = await driver.findElement(
      By.xpath("/html/body/div/div/div[3]/div[1]/div[1]/div[1]/div")
    );
    await scrollToElement(locationElement);

    await delay(2000);
    //await selectLocation(driver, 2);
    await delay(2000);

    //Scroll to selectCategory action
    const categoryElement = await driver.findElement(
      By.xpath(`/html/body/div/div/div[3]/div[2]/div`)
    );
    await scrollToElement(categoryElement);

    await delay(2000);
    await selectCategory(driver, 2);
    await delay(2000);

    // Scroll to nextPage action
    const nextPageElement = await driver.findElement(
      By.xpath("/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[2]/img[2]")
    );
    await scrollToElement(nextPageElement);

    await delay(2000);
    await nextPage(driver);
    await delay(2000);

    // Scroll to previousPage action
    const previousPageElement = await driver.findElement(
      By.xpath("/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[2]/img[1]")
    );
    await scrollToElement(previousPageElement);

    await delay(2000);
    await previousPage(driver);
    await delay(2000);

    // Scroll to selectRows action
    const rowsElement = await driver.findElement(
      By.xpath(`/html/body/div/div/div[3]/div[3]/div[2]/div[1]/select/option`)
    );
    
    await selectRows(driver, 2);
    await delay(2000);

    await scrollToElement(rowsElement);
    await delay(2000);
    // Scroll to searchBox action
    const searchBoxElement = await driver.findElement(
      By.xpath("/html/body/div/div/div[3]/div[1]/div[2]/div/input")
    );
    await scrollToElement(searchBoxElement);

    await delay(2000);
    await searchBox(driver);

    // Scroll to getInTouch action
    const getInTouchElement = await driver.findElement(
      By.xpath("/html/body/div/div/div[1]/div/div[2]/a[2]")
    );
    await scrollToElement(getInTouchElement);

    await delay(2000);
    await getInTouch(driver);
  } finally {
    //await driver.quit();
  }
}

main();

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

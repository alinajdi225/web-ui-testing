const { By, until } = require("selenium-webdriver");
const { TARGET_URL } = require("../../config");
const delay = require("../../utils/delay");

const BRANDS = [
  "Polo",
  "H&M",
  "Madam",
  "Master & Harbour",
  "Babyhug",
  "Allen Solly Junior",
  "Kookie Kids",
  "Biba",
];

async function selectLocation(driver, index) {
  const brandName = BRANDS[index - 1] || BRANDS[0];
  const brandPath = `/brand_products/${encodeURIComponent(brandName)}`;

  await driver.get(`${TARGET_URL}${brandPath}`);
  await delay(2000);
  console.log(`Selected brand filter: ${brandName}`);
}

module.exports = selectLocation;

const { By, until } = require("selenium-webdriver");
const { TARGET_URL } = require("../../config");
const delay = require("../../utils/delay");

const CATEGORIES = [
  { href: "/category_products/1", name: "Women" },
  { href: "/category_products/2", name: "Dress" },
  { href: "/category_products/3", name: "Men" },
  { href: "/category_products/6", name: "Kids" },
];

async function selectCategory(driver, index) {
  const category = CATEGORIES[index - 1] || CATEGORIES[0];

  await driver.get(`${TARGET_URL}${category.href}`);
  await delay(2000);
  console.log(`Selected category: ${category.name}`);
}

module.exports = selectCategory;

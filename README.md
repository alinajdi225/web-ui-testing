# Web UI Testing

A Selenium WebDriver automation project that demonstrates end-to-end browser testing on a demo e-commerce website. The project automates real user flows such as category filtering, product search, cart management, and form interaction.

## Demo website

This project uses [Automation Exercise](https://automationexercise.com/) — a public demo site built specifically for UI automation practice. It does not trigger CAPTCHA and supports rich interactions out of the box.

## Features

- Browser automation with Selenium WebDriver
- Modular action-based architecture
- Brand and category filtering
- Product search
- Add to cart and view cart
- Product detail navigation
- About and Contact page flows
- Excel export of product data (`demo.js`)

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- Google Chrome

## Setup

```bash
npm install
```

## Run

Main automation flow:

```bash
npm start
```

Demo with Excel export:

```bash
npm run demo
```

## Configuration

The target website URL is defined in `config.js`.

## Project structure

```
actions/
  category/     - Select a product category
  location/     - Select a brand filter
  navBar/       - About and Contact page actions
  page/         - Cart actions (add to cart, view cart)
  rows/         - Open a product detail page
  searchBox/    - Search for products
config.js       - Target URL configuration
index.js        - Main test runner
demo.js         - Demo with Excel export
utils/          - Shared helpers
```

## License

ISC

Qubika Sports Club Management - Automated Testing Suite

Project Description:
This repository contains an end-to-end automated test suite for the Qubika Sports Club Management System. It utilizes Playwright and TypeScript to automate both API and UI workflows within the same test. 

Test Workflow
The test suite covers the following steps:

-Create a new user through the API:
-A POST request is sent to create a new user. The user information is saved for subsequent steps.
-Navigate to the Qubika Sports Club Management System:
-Open the login page and validate its elements.
-Use the previously created user's credentials to log in.

Post-login actions:
-Access the Category page.
-Create a new category and validate its successful creation.
-Create a subcategory and confirm its presence in the Categories list.

Project Structure:

.QUBIKA-PLAYWRIGHT
├── config/
│   ├── data.json    # contains user data to manipulate
├── interfaces/
│   └── UserData.ts    # interface to interact with the data
├── node_modules/    
├── page-objects/    # folder to align with POM process
│   │   └── apiService.ts    #class with locators and methods related to API
│   │   └── categoryPage.ts    #class with locators and methods related to CategoryPage
│   │   └── loginPage.ts    #class with locators and methods related to Login Page
│   │   └── navigationPage.ts    #class with locators and methods related to nav bar
├── playwright-report
├── test-results
├── tests
│   └── loginE2E.spec.ts    # E2E Test execution
├──.gitignore
├──package-lock.json
├──package.json
├──playwright.config.ts
├──README.md

Setup Instructions
Prerequisites
-Node.js: Version 16 or higher
-Playwright: Installed via npm
-Access to the Qubika Swagger API: Required for creating users and categories

Installation

Clone repo: https://github.com/nahuelvalles/Qubika-playwright.git

In terminal execute:
	npm install
	npx playwright install
	npm install --save-dev playwright
	npm install --save-dev selenium-webdriver
	npm install --save-dev @types/selenium-webdriver

Commands to run the TCs:

npx playwright test --ui
Opens an interactive UI to run and manage tests.

npx playwright show-report
Displays the test report from the last run.

npx playwright test --headed
Runs tests with a visible browser window.

npx playwright --debug
Starts Playwright in debug mode for troubleshooting.


Potential Improvements
* Test Parallelization: Further optimize test execution time by running more tests in parallel.
* API Mocking: Consider implementing mocks for APIs to handle edge cases in isolation.
  
Issues or Questions
If you encounter issues or have questions, don't hesitate on reach out to me

-Nahuel Valles

# Selenium JS Example Project

This is a base project using the [`selenium-webdriver`](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html) for JavaScript and Mocha to handle the tests and reporting.

## Run Locally

1. Install [Mocha](http://mochajs.org) globally

  ```
  $ npm install -g mocha
  ```

4. Install [cross-env](https://www.npmjs.com/package/cross-env) to make sure Environment Variables are set correctly in each OS:

  ```
  $ npm install -g cross-env
  ```

3. Run all project dependencies:

  ```
  $ npm install
  ```

4. Run the following command to run the test:

  ```
  $ npm run test
  ```

## Configuration Overrides

The available environment variables to override are:

- MOCHA_BROWSER: specifies the webdriver to use. Options are:
    - phantomjs
    - chrome
    - firefox
    - opera
    - safari
    - ie
    - edge

    There are npm commands predefined to overwrite this variable:
    ```
    "test-chrome": "cross-env MOCHA_BROWSER=chrome mocha tests",
    "test-phantomjs": "cross-env MOCHA_BROWSER=phantomjs mocha tests",
    "test-firefox": "cross-env MOCHA_BROWSER=firefox mocha tests",
    "test-opera": "cross-env MOCHA_BROWSER=opera mocha tests",
    "test-ie": "cross-env MOCHA_BROWSER=ie mocha tests",
    "test-edge": "cross-env MOCHA_BROWSER=edge mocha tests"
    ```

- TEST_BASE_URL: specifies which url the tests should run on. The best way to overwrite this variable is to create a new script on the `package.json`. For Example:

    ```
    "set-dev-baseURL": "env TEST_BASE_URL=https://dev-portal.azurewebsites.net",
    "set-qa-baseURL": "env TEST_BASE_URL=https://qa-portal.azurewebsites.net",
    "set-prod-baseURL": "env TEST_BASE_URL=https://prod-portal.azurewebsites.net"
    ```

    If a new script is create you can change the test command to be:
    ```
    $ npm run set-dev-baseURL && npm run test
    ```

To overide any of these parameter you need to send the following before running the tests `env <ENV_VARIABLE>=<value>`. For example:

```
$ env MOCHA_BROWSER=phantomjs
```

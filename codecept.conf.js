const webDriverConfig = require('./profiles/webdriver.conf'); // reading selenium config from separate file

webDriverConfig.host = process.env.SELENIUM_HOST || 'localhost'; // choosing local vs. docker selenium
webDriverConfig.port = process.env.SELENIUM_PORT || 4445; // running local and docker on different ports to avoid conflicts
console.log('Selenium config', 'Host:', webDriverConfig.host, 'Port:', webDriverConfig.port);

exports.config = {
    "tests": "./tests/**/*_test.js",
    "timeout": 10000,
    "output": "./output",
    helpers: {
        WebDriver: webDriverConfig.loadProfile()
    },
    multiple: {
        parallel: {
            chunks: 4,
            browsers: ["chrome"]
        }
    },
    include: {
        "I": "./steps_file.js"
    },
    "bootstrap": false,
    "mocha": {},
    "name": "codceptjs-docker-tutorial"
};
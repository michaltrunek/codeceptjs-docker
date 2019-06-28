Feature('Login 2');

Scenario('Login 1', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@security');

Scenario('Login 2', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@security');

Scenario('Login 3', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@security');

Scenario('Login 4', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@security');
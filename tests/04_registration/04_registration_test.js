Feature('Registration');

Scenario('Registration 1', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@navigation');

Scenario('Registration 2', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@navigation');

Scenario('Registration 3', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@navigation');

Scenario('Registration 4', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@navigation');
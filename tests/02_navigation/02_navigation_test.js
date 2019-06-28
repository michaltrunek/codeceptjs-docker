Feature('Navigation');

Scenario('Home page displayed', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@navigation');

Scenario('Home page displayed test 2', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
}).tag('@navigation');

Scenario('Home page displayed test 3', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
    I.click('[class*="login-button"]');
    I.fillField('[id="login"]', 'Login');
    I.fillField('[id="password"]', 'Password');
    I.seeInField('[id="login"]', 'Login');
}).tag('@navigation');

Scenario('Home page displayed test 4', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
    I.click('[class*="login-button"]');
    I.fillField('[id="login"]', 'Login');
    I.fillField('[id="password"]', 'Password');
    I.seeInField('[id="login"]', 'Login');
}).tag('@navigation');
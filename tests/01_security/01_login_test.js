Feature('Login');

Scenario('Login page has Username and Password labels', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
    I.click('[class*="login-button"]');
    I.fillField('[id="login"]', 'Login');
    I.fillField('[id="password"]', 'Password');
    I.seeInField('[id="login"]', 'Login');
});

Scenario('Password field is required', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
    I.click('[class*="login-button"]');
    I.fillField('[id="login"]', 'Login');
    I.fillField('[id="password"]', 'Password');
    I.seeInField('[id="login"]', 'Login');
});


Scenario('Invalid username or password', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
    I.click('[class*="login-button"]');
    I.fillField('[id="login"]', 'Login');
    I.fillField('[id="password"]', 'Password');
    I.seeInField('[id="login"]', 'Login');
});


Scenario('Login with correct credentials', (I) => {
    I.amOnPage('https://www.tipico.de');
    I.seeElement('[class*="login-button"]');
    I.click('[class*="login-button"]');
    I.fillField('[id="login"]', 'Login');
    I.fillField('[id="password"]', 'Password');
    I.seeInField('[id="login"]', 'Login');
});
////Lesson #1 Webdriver.io First automation script
////Initial
// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//     })
// })
/////////////////////////////////////////////////////////////////////////////
////Lesson #2 Webdriver.io Methods getTitle() and url() 
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {
//     it('should have correct title', async () => {
//         await browser.url('https://webdriver.io/')

//         const title = await browser.getTitle();
//         await browser.pause(2000)
//         console.log(title);

//         await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser'+
//             ' and mobile automation test framework for Node.js | WebdriverIO')
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #3 Webdriver.io Methods getValue() and addValue() 
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {
//     xit('should have correct title', async () => { // added 'x' to avoid execution
//         await browser.url('https://webdriver.io/')

//         const title = await browser.getTitle();
//         console.log(title);

//         await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser' +
//             ' and mobile automation test framework for Node.js | WebdriverIO')
//     });
//     // added new block 
//     it('should show addValue command', async () => {
//         await browser.url('https://the-internet.herokuapp.com/login');
//         let input = await $('#username')
//         await input.addValue('hello')
//         await browser.pause(2000)
//         await input.addValue(123)
//         await browser.pause(2000)
//         await expect(input).toHaveTitle('hello123')
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #4 Webdriver.io Methods setValue() and click() 
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {
//     xit('should show setValue command', async () => { // !!!
//         await browser.url('https://the-internet.herokuapp.com/login');

//         let input = await $('#username')
//         await input.setValue("world")
//         await browser.pause(2000)

//         console.log(await input.getValue());
//         await expect(input).toHaveValue("world")
//         await browser.pause(2000)
//     });
//     it('should show click command', async () => {
//         await browser.url('https://the-internet.herokuapp.com/login');

//         let loginButton = await $('.radius')
//         await browser.pause(2000)
//         await loginButton.click()
//         await browser.pause(4000)

//         let inputUserName = await $('#username')
//         await inputUserName.addValue('tomsmith')
//         await browser.pause(2000)

//         let inputPassword = await $('#password')
//         await inputPassword.addValue('SuperSecretPassword!')
//         await browser.pause(2000)

//         await loginButton.click()
//         await browser.pause(4000)

//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #5 Web page structure
/////////////////////////////////////////////////////////////////////////////
////Lesson #6 Webdriver.io Method getAttribute()
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {
//     it('should show getAttribute command', async () => {
//         await browser.url('https://dou.ua/search');

//         let inputSearch = await $('#gsc-i-id1')
//         let attr = await inputSearch.getAttribute('aria-label')
//         console.log('Placeholder attribute is: ' + attr) // outputs: шукати

//         await inputSearch.setValue('Cat')
//         attr = await inputSearch.getValue()
//         await browser.pause(10000)
//         console.log('Value attribute is: ' + attr) // outputs: Cat

//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #7 Webdriver.io Methods getText() and getLocation()
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {
//     xit('shoud show geolocation command', async () => {// added 'x' to avoid execution
//         await browser.url('https://dou.ua');

//         let inputSearch = await $('#txtGlobalSearch')
//         let location = await inputSearch.getLocation()
//         await browser.pause(5000)
//         console.log('location is: ' + location); //outputs: x, y

//         let xLocation = await inputSearch.getLocation('x')
//         await browser.pause(5000)
//         console.log('location by x is: ' + xLocation); //outputs: x
//     });

//     it('shoud show getText command', async () => {
//         await browser.url('https://webdriver.io');

//         let subtitle = await $('.hero__subtitle');
//         await browser.pause(5000);
//         console.log('Subtitle text is: ' + await subtitle.getText()); // outputs: Next-gen browser...       
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #8 Webdriver.io Home work
//v// зайти на Webdriver.io => API
//v// перевірити url Webdriver.io/docs/api
//v// перевірити заголовок <h1>Introduction
//v// перевірити breadcrumbs
//v// перевірити WebDriver на актуальність посилання
//v// =>Search
//v// input => 'all is done'
//v// видалення напису 'all is done'
// import { expect } from '@wdio/globals'

// describe('Webdriver.io HomeWork', () => {

//     xit('should have correct url', async () => {        // перевірити url Webdriver.io/docs/api
//         await browser.url('https://webdriver.io/docs/api')

//         // const _title = await browser.getTitle();
//         const _url = await browser.getUrl();
//         await browser.pause(1000);
//         // console.log(_title);
//         console.log(_url);
//         // await expect(browser).toHaveUrl('https://webdriver.io/docs/api/')
//         // await expect(browser).toHaveTitle('Introduction | WebdriverIO')
//     });

//     xit('shoud show Introduction', async () => {        // перевірити заголовок Introduction
//         await browser.url('https://webdriver.io/docs/api');

//         let _header = await $('h1');
//         await browser.pause(1000);
//         console.log('Header text is: ' + await _header.getText());
//     });

//     xit('shoud show breadcrumbs', async () =>  {         // перевірити breadcrumbs
//         await browser.url('https://webdriver.io/docs/api');

//         let _breadcrumb = await $('.breadcrumbs__link');
//         await browser.pause(1000);
//         console.log('Breadcrumb text is: ' + await _breadcrumb.getText());
//     });

//     xit('shoud show WebDriver_link', async () => {      // перевірити WebDriver на актуальність посилання
//         await browser.url('https://webdriver.io/docs/api');

//         let _element = await $('#__docusaurus_skipToContent_fallback > div > div > main > div > div > div > div > article > div.theme-doc-markdown.markdown > p:nth-child(2) > a:nth-child(1)');
//         console.log('Element text is: ' + await _element.getText());
//         await _element.click();

//         console.log('Element`s url is: ' + await browser.getUrl());
//         await expect(browser).toHaveUrl('https://webdriver.io/docs/api/webdriver');
//     });

//     it('shoud show search', async () => {               // input => 'all is done'
//         await browser.url('https://webdriver.io');

//         const searchButton = await browser.$('#__docusaurus > nav > div.navbar__inner > div.navbar__items.navbar__items--right > div.navbarSearchContainer_GLVs > button');
//         await searchButton.click();


//         const searchInput = await browser.$('input[type="search"]');
//         await searchInput.setValue('all is done');

//         let value = await searchInput.getValue();
//         console.log('TEST_1 Value attribute is: ', value);

//         await searchInput.addValue('!!!');

//         value = await searchInput.getValue();
//         console.log('TEST_2 Value attribute is: ', value);

//         // await searchInput.setValue('');
//         await searchInput.clearValue();

//         value = await searchInput.getValue();
//         console.log('TEST_3 Value attribute is: ', value);
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #9 Webdriver.io Methods isDisplayed() and isClickable()
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {

//     xit('should show if an element is clickable', async () => { 
//         await browser.url('https://webdriver.io');

//         const blogButton = await $('.button[href=\'/docs/gettingstarted\']');
//         let clickable = await blogButton.isClickable();
//         console.log('Is clickable: ' + clickable);          // outputs: true

//     });

//     xit('should show if an element is displayed', async () => { 
//         await browser.url('https://webdriver.io');

//         const blogButton = await $('.button[href=\'/docs/gettingstarted\']');
//         let displayed = await blogButton.isDisplayed();
//         console.log('Is displayed: ' + displayed);          // outputs: true   
//     });

//     it('should show if an element is visible', async () => { 
//         await browser.url('https://webdriver.io');

//         const blogButton = await $('.button[href="/docs/gettingstarted"]');
//         let displayedInViewPort = await blogButton.isDisplayed();//isDisplayedWithinViewport
//         console.log('Is blog button displayed in isDisplayed: ' + displayedInViewport);// outputs: true   
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #10 Webdriver.io Methods isEnabled(), isFocused() and scrolIntoView()
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {

//     xit('should show if an element is clickable', async () => { 
//         await browser.url('https://webdriver.io');

//         const getStartedButton = await $('.button[href=\'/docs/gettingstarted\']')
//         let isEnabled = await getStartedButton.isEnabled();
//         console.log('Is get started button enabled: ' + isEnabled);       // outputs: true 
//     });

//     xit('should show if an element is focused', async () => {
//         await browser.url('https://webdriver.io');

//         const getStartedButton = await $('.button[href=\'/docs/gettingstarted\']')
//         let isFocusedBeforeClick = await getStartedButton.isFocused();
//         console.log('Is get started button focused before click: ' + isFocusedBeforeClick);       // outputs: false 
//         await browser.pause(2000);
//         await getStartedButton.click();

//         let isFocusedAfterClick = await getStartedButton.isFocused();
//         console.log('Is get started button focused after click: ' + isFocusedAfterClick); // outputs: true 

//         await browser.pause(2000);
//     });

//     it('should show movement to element action', async () => { 
//         await browser.url('https://webdriver.io');

//         const getStartedLink = await $('.footer__link-item[href=\'/docs/gettingstarted\']')
//         await browser.pause(2000);
//         await getStartedLink.scrollIntoView();
//         await browser.pause(2000);    
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #11 Webdriver.io Methods saveScreenshot(), newWindow() and switchWindow()
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {

//     xit('should show save screenshot command', async () => { 
//         await browser.url('https://webdriver.io');

//         const getStartedLink = await $('.footer__link-item[href=\'/docs/gettingstarted\']');
//         await browser.pause(2000);
//         await getStartedLink.scrollIntoView();
//         await browser.pause(2000);  
//         await getStartedLink.saveScreenshot('linkScreenshot.png');
//     });

//     it('should switch to another window', async () => { 
//         await browser.url('https://webdriver.io');

//         await browser.newWindow('https://google.com');
//         await browser.pause(2000);

//         await browser.switchWindow('https://webdriver.io');
//         await browser.pause(2000);
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #12 Webdriver.io Methods getHtml() and waitUntil()
// import { expect } from '@wdio/globals'

// describe('Webdriver_IO_test main page', () => {

//     xit('should show wait untill command', async () => {
//         await browser.url('https://webdriver.io');

//         await browser.waitUntil(async () => {
//             return await $('.button[href=\'/docs/gettingstarted\']').isDisplayed();
//         }, 5000, 'Button is not displayed');
//     });

//     it('should get html for certain elements', async () => {
//         await browser.url('https://webdriver.io');

//         const outerHTML = await $('.dropdown__menu').getHTML();
//         console.log('outerHTML: ' + outerHTML);

//         const innerHTML = await $('.dropdown__menu').getHTML(false);
//         console.log('innerHTML: ' + innerHTML);
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #13 Webdriver.io Home work
//v// зайти на Webdriver.io => API
//v// тег nav a[href="/docs/api"]
//v// скрол до футера
//v// в футері перевірити чи відображається Blog (isDisplayed())
//v// перевірити чи відображається посилання Protocol Commands (isDisplayed())
//v// перевірити чи активне посилання Protocol Commands (isClickable())
//v// перейти (click) за посилання Protocol Commands
//v// дочекатись (waitUntil()) на заголовок WebDriver Protocol
//import { expect } from '@wdio/globals'

// describe('Webdriver.io HomeWork', () => {
//     it('should get html for certain elements', async () => {
//         await browser.url('https://webdriver.io');

//         const apiButton = await browser.$('nav a[href="/docs/api"]');   // зайти на Webdriver.io => API
//         await apiButton.click();
//         // await browser.pause(1000);

//         let currentUrl = await browser.getUrl();
//         // await browser.pause(1000);
//         console.log('currentUrl: ' + currentUrl);

//         const footer = await $('footer')                                // скрол до футера
//         // await browser.pause(1000);
//         await footer.scrollIntoView();
//         // await browser.pause(1000);

//         const blogButton = await $('a[href=\'/blog\']');
//         let displayed = await blogButton.isDisplayed();
//         await browser.pause(1000);
//         console.log('blogButton is displayed: ' + displayed);                      // outputs: true   

//         const paginationLink = await $('.pagination-nav__label');
//         displayed = await paginationLink.isDisplayed();
//         console.log('pagination-nav__label is displayed: ' + displayed);            // outputs: true   
//         await browser.pause(1000);

//         let clickable = await paginationLink.isClickable();
//         console.log('pagination-nav__label is clickable: ' + clickable);                                  // outputs: true
//         await paginationLink.click();                                               // перейти (click) за посилання Protocol Commands
//         await browser.pause(2000);

//         currentUrl = await browser.getUrl();
//         console.log('currentUrl: ' + currentUrl);

//         await browser.waitUntil(async () => {
//             return await $('h2:first-of-type').isDisplayed();                       // дочекатись (waitUntil()) на заголовок WebDriver Protocol
//         }, 5000, 'Element is not displayed');

//         const headerText = await $('h2:first-of-type').getText();
//         console.log('Header text is: ' + headerText);
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #14 Webdriver.io Locators part 1
// see selectors for web automation
/////////////////////////////////////////////////////////////////////////////
////Lesson #15 Webdriver.io Locators part 2
////  x-pass contains
////  //*[contains(text(),"x")]  пошук всіх текстових значень "x" що містяться у рядках, * - будь-який елемент
////    @
////    and
////    or
////  //*[contains(text(),"x") and @class='link ' and @href='https//:шосьтам']
////  //*[contains(text(),"x") or @class='link ' and @href]
/////////////////////////////////////////////////////////////////////////////
////Lesson #16 Webdriver.io Assert function

// // describe(... - виконати блок
// // x.describe(... - пропустити виконання блоку
// // x.describe(... - виконання лишу цього блоку

// // it(... - виконати блок
// // xit(... - пропустити виконання блоку
// // x.skip(... - пропустити виконання блоку
// // x.only(... - виконання лишу цього блоку
// import { expect } from '@wdio/globals'
// import { assert } from 'assert/strict'

// describe('Webdriver_IO_test main page', () => {
//     it('shot get element for certain elements', async () => {
//         await browser.url('https://webdriver.io');

//         assert(1 === 1, '1 is equal 1');
//         assert(1 === 'hello', '1 not equal hello');
//     });
// });

// // // правильне виконання

// describe('Webdriver_IO_test main page', () => {
//     it('should get element for certain elements', async () => {
//         await browser.url('https://webdriver.io');

//         expect(1).toBe(1); // 1 is equal to 1
//         expect(1).not.toBe('hello'); // 1 is not equal to 'hello'
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #17 Webdriver.io Project's structure
// // wdio.conf.js
/////////////////////////////////////////////////////////////////////////////
////Lesson #18 Webdriver.io Test suite and test case
// testcase.txt

// Test Case: Перевірка логін-форми та кнопки “Sign up”
// Test Case ID: TC001

// Title: Перевірка введення даних для логіну та відображення кнопки “Sign up”

// Preconditions:

// Користувач знаходиться на сторінці логіну (https://github.com/).

// Test Steps:

// 1    Перевірити, чи відображається поле для введення логіну.
// 2    Ввести валідний логін (наприклад, “testuser”).
// 3    Перевірити, чи відображається поле для введення паролю.
// 4    Ввести валідний пароль (наприклад, “password123”).
// 5    Перевірити, чи відображається кнопка “Sign up”.

// Expected Results:

// 1    Поле для введення логіну відображається.
// 2    Введений логін приймається системою.
// 3    Поле для введення паролю відображається.
// 4    Введений пароль приймається системою.
// 5    Кнопка “Sign up” відображається на сторінці.


// import { expect } from '@wdio/globals'
// describe('GitHub Login Page', () => {
//     it('should display login input and Sign up button', async () => {
//         await browser.url('https://github.com/login');

//         const loginInput = await browser.$('#login_field');
//         const isLoginInputDisplayed = await loginInput.isDisplayed();
//         await browser.pause(2000);
//         expect(isLoginInputDisplayed).toBe(true);

//         await loginInput.setValue('testuser');
//         await browser.pause(2000);

//         const passwordInput = await browser.$('#password');
//         const isPasswordInputDisplayed = await passwordInput.isDisplayed();
//         await browser.pause(2000);
//         expect(isPasswordInputDisplayed).toBe(true);

//         await passwordInput.setValue('password123');
//         await browser.pause(2000);

//         const signUpButton = await browser.$('a[href="/join?source=login"]');
//         const isSignUpButtonDisplayed = await signUpButton.isDisplayed();
//         await browser.pause(2000);
//         expect(isSignUpButtonDisplayed).toBe(true);
//     });
// });



// // testsuite.txt
// Test Suite:                 GitHub Login Page

// Test Suite ID:              TS001

// Title:                      GitHub Login Page Test Suite

// Description:                Цей тестовий набір призначений для перевірки функціональності сторінки логіну на GitHub.
//                             Він включає кілька тестових випадків для забезпечення коректного відображення та роботи полів введення логіну та кнопки “Sign up”.

// Preconditions:

// -   ористувач знаходиться на сторінці логіну (https://github.com/login).

// Test Cases:

// 1   Test Case ID:           TC001
//     -   Title:              Перевірка відображення поля введення логіну.
//     -   Description:        Перевірити, чи відображається поле введення логіну на сторінці логіну.
//     -   Expected Result:    Поле введення логіну відображається.
// 2   Test Case ID:           TC002
//     -   Title:              Перевірка відображення поля введення паролю.
//     -   Description:        Перевірити, чи відображається поле введення паролю на сторінці логіну.
//     -   Expected Result:    Поле введення паролю відображається.
// 3   Test Case ID:           TC003
//     -   Title:              Перевірка прийняття введення логіну.
//     -   Description:        Перевірити, чи приймається введення валідного логіну у поле введення логіну.
//     -   Expected Result:    Введений логін приймається системою.
// 4   Test Case ID:           TC004
//     -   Title:              Перевірка прийняття введення паролю
//     -   Description:        Перевірити, чи приймається введення валідного паролю у поле введення паролю.
//     -   Expected Result:    Введений пароль приймається системою.
// 5   Test Case ID:           TC005
//     -   Title:              Перевірка відображення кнопки “Sign up”.
//     -   Description:        Перевірити, чи відображається кнопка “Sign up” на сторінці логіну.
//     -   Expected Result:    нопка “Sign up” відображається.

/////////////////////////////////////////////////////////////////////////////
////Lesson #19 Webdriver.io Home work
// testcase.txt
// testіsuite.txt
/////////////////////////////////////////////////////////////////////////////
////Lesson #20 Webdriver.io TestRail
// screenshots/screenshot_lesson_20.png
/////////////////////////////////////////////////////////////////////////////
////Lesson #21 Webdriver.io Page Object part intro
/////////////////////////////////////////////////////////////////////////////
////Lesson #22 Webdriver.io Page Object part 1
// import { expect } from '@wdio/globals'
// import LoginPage from './main_page';
// describe('Webdriver_IO_test main page', () => {
//     it(' should show addValue command', async () => {
//         await browser.url('https://the-internet.herokuapp.com/login');
//         await browser.pause(2000);
//         await LoginPage.setUserNameInput(123);
//         await browser.pause(2000);
//         await LoginPage.username.addValue('hello');
//         await browser.pause(2000);
//         await LoginPage.setPasswordInput('superpass');
//         await browser.pause(2000);
//         await LoginPage.clickOnLoginButton();

//         await expect(LoginPage.username).toHaveValue('123hello');
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #23 Webdriver.io Page Object part 2
// import { expect } from '@wdio/globals'
// import MainPage from './main_page';
// import GameDevPage from './gamedev_page';
// import GameDeveTopRatesPage from './gamedev_page';

// describe('Webdriver_IO_test main page', () => {
//         it(' done', async () => {
//             await browser.url('https://dou.ua/');

//             await MainPage.clickOnBandBtn();
//             await browser.pause(1000);

//             await MainPage.clickOnForumBtn();
//             await browser.pause(1000);

//             await MainPage.clickOnGameDaveBtn();
//             await browser.pause(1000);

//             expect (GameDevPage.companyGameDevsRankLink).toBeClickable();

//             await GameDevPage.clickOnTopGamesRateLink();

//             expect (GameDeveTopRatesPage.title).toHaveValue("Матеріали на тему «топ ігор місяця»")

//     });
// });

//// Home work
//v// зайти на https://dou.ua/
//v// зайти у вкладку 'зарплати'
//v// перевірити наявність напису 'квартиль'
//v// зайти у вкладку 'робота'
//v// перевірити видимість кнопки 'знайти'
//v// натиснути кнопку 'знайти'
//v// перевірити наявність напису 'Швидкий перехід:'
//v// перейти на gameDev
//v// перевірити наявність напису 'Радимо почитати' 
// import { expect } from '@wdio/globals'
// import MainPage from './main_page';
// import SalariesPage from './salaries_page';
// import JobsPage from './jobs_page';
// import GameDevPage from './gamedev_page';

// describe('Webdriver_IO_test homepage', () => {
//     it(' salaries page', async () => {
//         await browser.url('https://dou.ua/');                       // зайти на https://dou.ua/
//         await browser.pause(500);

//         await MainPage.clickOnSalariesBtn();                        // зайти у вкладку 'зарплати'
//         await browser.pause(500);

//         const salariesText = await SalariesPage.searchedSalariesText;
//         expect(salariesText).toHaveValue("I Квартиль");                    // перевірити наявність напису 'квартиль'
//         console.log('salaries page / searched text is : ' + await salariesText.getText());
//     });

//     it(' jobs page', async () => {

//         await MainPage.clickOnJobsBtn();                            // зайти у вкладку 'робота'
//         await browser.pause(500);

//         const jobsButton = await JobsPage.isDisplayedSearchedButton();   // перевірити видимість кнопки 'знайти'
//         console.log('jobs page / searched button is : ' + jobsButton);
//         JobsPage.clickOnSearchedButton();                                   // натиснути кнопку 'знайти'
//         await browser.pause(500);

//         const jobsText = await JobsPage.getTexSearchedJobsText();
//         expect(jobsText).toHaveText("Швидкий перехід: ");                    // перевірити наявність напису 'Швидкий перехід: '
//         console.log('jobs page / searched text is : ' + jobsText);
//     });

//     it(' gamedev page', async () => {
//         await MainPage.clickOngameDevBtn();                            // перейти на gameDev
//         await browser.pause(500);

//         const gameDevText = await GameDevPage.getTexSearchedGameDevText();
//         expect(gameDevText).toHaveValue("Радимо почитати");                    // перевірити наявність напису 'Радимо почитати'
//         console.log('gamedev page / searched text is : ' + gameDevText);
//     });
// });
/////////////////////////////////////////////////////////////////////////////
////Lesson #24 Webdriver.io Page Object part 3
// переваги патрерна Page Object:
// - Розділення логіки роботи та представлення: 
// Page Object дозволяє відокремити логіку тестів від реалізації веб-сторінок. 
// Це робить код тестів більш чистим і зрозумілим.
// - Зменшення дублювання коду:
// Оскільки всі елементи та дії на сторінці описані в одному місці (класі Page Object),
// це зменшує дублювання коду і полегшує його підтримку.
// - Легкість у підтримці: При змінах у інтерфейсі веб-додатку, 
// які не зачіпають логіку, потрібно змінити лише відповідний Page Object, 
// а не всі тести, що використовують цю сторінку.
// - Покращення читабельності тестів: Тести стають більш читабельними, 
// оскільки вони містять лише бізнес-логіку, а не деталі реалізації взаємодії 
// з елементами сторінки.
// - Повторне використання коду: Page Object дозволяє повторно використовувати 
// код для різних тестів, що зменшує кількість помилок і спрощує процес написання
// нових тестів.
/////////////////////////////////////////////////////////////////////////////
////Lesson #24 Webdriver.io Final Home Project
// // testcase 1
// // зайти на https://github.com/
// // натиснути кнопку 'Sign up'
// // дочекатись перший 'Input'
// // перевірити чи існує заголовний текст на 'Input'
// // в 'Input' ввести email (example@mail.com)
// // натиснути кнопку 'Continue'
// // в наступний 'Input' ввести password (superpassword)
// // натиснути кнопку 'Continue'
// // в наступний 'Input' ввести username (superusername)
// // натиснути кнопку 'Continue'
// // в наступний 'Input' ввести підтвердження (y)
// // натиснути кнопку 'Continue'
// // finish 1
// // testcase 2
// // зайти на https://github.com/
// // scroll down to 'Over 100 million developers call GitHub home3'
// // перевірити 'Start a free enterprise trial' isVisible
// // перейти за посиланням
// // перевірити чи існує заголовний текст 'Pick your trial plan'
// // перейти за посиланням 'Enterprise Cloud'
// // finish 2
// // testcase 3
// // зайти на https://github.com/
// // scroll into view
// // перевірити 'Subscribe' isClickable
// // натиснути кнопку 'Subscribe'
// // перевірити свою присутність на іншому домені https://resources.github.com/newsletter/
// // перевірити чи існує заголовний текст 'Subscribe to our developer newsletter'
// // в 'Work Email *' ввести email (example@mail.com)
// // в 'Country *' select tag ввести country ( ) 
// // checkbox 
// // натиснути кнопку 'Subscribe'
// // перевірити чи існує заголовний текст 'Thanks for subscribing!'
// // finish 3
// // testcase 4
// // зайти на https://github.com/
// // обрати 'Search'
// // ввести 'act' (ввести з клавіатури див hot keys)
// // перевірити чи є 'act' в результатах пошуку
// // finish 4
// // testcase 5
// // зайти на https://github.com/
// // перейти за посиланням 'Pricing'
// // перевірити чи існує заголовний текст 'Get the complete developer platform.'
// // scroll to 'Compare all features'
// // перевірити чи існує заголовний текст 'Compare features'
// // finish 5

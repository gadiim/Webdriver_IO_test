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

//         await expect(input).toHaveTitle('hello123')
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

describe('Webdriver.io HomeWork', () => {
    it('should get html for certain elements', async () => {
        await browser.url('https://webdriver.io');

        const apiButton = await browser.$('nav a[href="/docs/api"]');   // зайти на Webdriver.io => API
        await apiButton.click();
        // await browser.pause(1000);

        let currentUrl = await browser.getUrl();
        // await browser.pause(1000);
        console.log('currentUrl: ' + currentUrl);

        const footer = await $('footer')                                // скрол до футера
        // await browser.pause(1000);
        await footer.scrollIntoView();
        // await browser.pause(1000);

        const blogButton = await $('a[href=\'/blog\']');
        let displayed = await blogButton.isDisplayed();
        await browser.pause(1000);
        console.log('blogButton is displayed: ' + displayed);                      // outputs: true   

        const paginationLink = await $('.pagination-nav__label');
        displayed = await paginationLink.isDisplayed();
        console.log('pagination-nav__label is displayed: ' + displayed);            // outputs: true   
        await browser.pause(1000);

        let clickable = await paginationLink.isClickable();
        console.log('pagination-nav__label is clickable: ' + clickable);                                  // outputs: true
        await paginationLink.click();                                               // перейти (click) за посилання Protocol Commands
        await browser.pause(2000);

        currentUrl = await browser.getUrl();
        console.log('currentUrl: ' + currentUrl);

        await browser.waitUntil(async () => {
            return await $('h2:first-of-type').isDisplayed();                       // дочекатись (waitUntil()) на заголовок WebDriver Protocol
        }, 5000, 'Element is not displayed');

        const headerText = await $('h2:first-of-type').getText();
        console.log('Header text is: ' + headerText);
    });
});
/////////////////////////////////////////////////////////////////////////////
////Lesson #14 Webdriver.io Locators part 1
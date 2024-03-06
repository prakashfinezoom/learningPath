import { test, expect} from '@playwright/test';
import loginPage from './POM/pageObjectModel';
import * as data from "./data.json";
 
test.describe('Our first script', async () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://practice.expandtesting.com/');
    });
    test('Login form', async ({page}) => {
        await page.locator(`//a[text()='Login Form']`).click()
        const Login = new loginPage(page)
        await Login.fillUsername(data.testData.username)
        await Login.fillPassword(data.testData.password)
        await Login.loginBtn()
    });
    test('Radio button', async ({page}) => 
    {
        await page.locator(`//a[text()='Radio Buttons']`).click();
    })
})





import { Page } from "@playwright/test";

export default class loginPage {

    constructor(public page: Page) { }

    async fillUsername(username : string) {
        await this.page.locator(`//input[@id='username']`).fill(username)
    }

    async fillPassword(password : string) {
        await this.page.locator(`//input[@id='password']`).fill(password)
    }

    async loginBtn() {
        await this.page.locator(`//button[text()='Login']`).click()
    }  

}
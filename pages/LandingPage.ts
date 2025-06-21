import { Page, Locator, expect } from "@playwright/test";

export default class LandingPage {

    // readonly means the element could only be readed

    readonly page: Page;
    readonly signUpLink: Locator;

    // The constructor will have everything neadded to find the page locators

    constructor(page: Page) {
        this.page = page;
        this.signUpLink = page.getByRole('link', { name: 'Sign up' })

    }

    // Function to go thought the main url to the sign up page

    async goToSignUpPage() {

        // 1) Go to the main URL
        await this.page.goto("https://sauce-demo.myshopify.com");

        // 2) Click the sign up link
        await this.signUpLink.click();

        // 3) The user should be redirected to the sign up page

        expect (this.page.url()).toBe("https://sauce-demo.myshopify.com/account/register");
    }

}
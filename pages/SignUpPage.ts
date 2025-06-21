import { Page, Locator, expect } from "@playwright/test";

export default class SignUp{

    // If page is not declared here, there will be an error in this.page (constructor)
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly createBtn: Locator;


    constructor(page: Page){
     
        this.page = page;
        this.firstName = page.locator('input[name="customer[first_name]"]');
        this.lastName = page.locator('input[name="customer[last_name]"]');
        this.email = page.locator('input[name="customer[email]"]');
        this.password = page.locator('input[name="customer[password]"]');
        this.createBtn = page.getByRole('button', { name: 'Create' });
    }

    async fillSignUpForm(){

        await this.firstName.fill("Anna");
        await this.lastName.fill("Prince");
        await this.email.fill("anna@fakemail.com");
        await this.password.fill("vonArendelle1");
        await this.createBtn.click();
    }
}
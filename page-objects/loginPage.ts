import { expect, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page

    
    constructor(page: Page) {
        this.page = page;
    }

    // Function to fill out and submit the login form
    async loginFormFill(email: string, password: string) {
        const emailField = this.page.locator('input[type="email"]')
        const pwdField = this.page.locator('input[type="password"]')
        const submitBtn = this.page.locator('button[type="submit"]')

        // Fill in the email and password fields, then click the submit button to log in
        await emailField.fill(email);
        await pwdField.fill(password);
        await submitBtn.click();
    }

    // Function to validate if the login page is displayed correctly
    async validateLoginDisplay() {
        const submitBtn = this.page.locator('button[type="submit"]')

        // Check if the URL matches the login page and ensure the submit button is visible
        await expect(this.page).toHaveURL(/login$/)
        await expect(submitBtn).toBeVisible();
    }

    // Function to validate the login by checking for the presence of a logo image
    async loginValidation() {
        const logoPic = this.page.locator('img[src*="qubika.png"]')

        // Ensure that the logo is visible after login, indicating successful authentication
        await expect(logoPic).toBeVisible(); 
    }

}

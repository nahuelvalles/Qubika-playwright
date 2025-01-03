import { expect, Page } from '@playwright/test'

export class CategoryPage {

    readonly page: Page // The page object representing the current browser page

    // Constructor that initializes the page object
    constructor(page: Page){
        this.page = page
    }

    // Function to add a new category (father category)
    async addNewCategory(fatherCategoryName: string) {
        const btnAdd = this.page.locator('button:has-text("Adicionar")')
        const categoryName = this.page.locator('[formcontrolname="name"]')
        const submitBtn = this.page.locator('button:has-text("Aceptar")')

        // Click the 'Add' button to start adding a new category
        await btnAdd.click()
        
        // Fill in the category name and submit the form
        await categoryName.fill(fatherCategoryName)
        await submitBtn.click()
    }

    // Function to add a new child category (subcategory)
    async addNewChildCategory(childCategoryName: string, fatherCategoryName: string) {
        const btnAdd = this.page.locator('button:has-text("Adicionar")')
        const categoryName = this.page.locator('[formcontrolname="name"]')
        const childCheckbox = this.page.locator('.text-muted:has-text("Es subcategoria?")'); // Checkbox for marking as a subcategory

        const submitBtn = this.page.locator('button:has-text("Aceptar")')
        const selectFatherCategory = this.page.locator('div[role="combobox"] >> input[type="text"]')
        const firstOption = this.page.locator(`.ng-dropdown-panel .ng-option:has-text("${fatherCategoryName}")`).first() // Select the first option for father category from the dropdown

        // Click the 'Add' button to start adding a new child category
        await btnAdd.click()
        
        // Fill in the child category name, check the subcategory checkbox, and select the father category
        await categoryName.fill(childCategoryName);
        await childCheckbox.check()
        await selectFatherCategory.fill(fatherCategoryName)
        await firstOption.click()
        
        // Submit the form to add the child category
        await submitBtn.click();
    }

    // Function to validate the display of the added category on the page 
    async validateCategoryDisplay(searchForCategory: string) {
        const lastPage = this.page.locator('ul > li').nth(-2);
        const categoryToValidate = this.page.locator(`text=${searchForCategory}`).nth(-1)

        // Navigate to the last page in the pagination
        await lastPage.click();

        // Check if the category is visible on the page

        await expect(categoryToValidate).toBeVisible()
    }

    // Function to validate if a success prompt is displayed after adding a category
    async validateSuccessPrompt() {
        const successPrompt = this.page.locator('#toast-container', { hasText: 'Tipo de categoría adicionada satisfactoriamente' })
    }
}

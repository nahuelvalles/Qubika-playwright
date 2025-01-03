import {Page} from '@playwright/test'

export class NavigationPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }
    async categoryPage(){
        const categoryLink = this.page.locator('a[href="#/category-type"]')
        await categoryLink.click();
    }
}
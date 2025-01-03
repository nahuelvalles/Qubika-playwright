import { test, request } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';
import { LoginPage } from '../page-objects/loginPage';
import { CategoryPage } from '../page-objects/categoryPage';
import { ApiService } from '../page-objects/apiService';
import * as fs from 'fs';
import { UserData } from '../interfaces/UserData';

// Test suite for login related tests
test.describe('Login related tests', () => {

    // Test case for the full E2E login process
    test('E2E login process', async ({ page, request }) => {

        // Instantiate page object classes for interaction with different pages
        const apiService = new ApiService(request); // Service to handle API requests, like user registration
        const navigateTo = new NavigationPage(page); // Navigation page for page transitions
        const loginPage = new LoginPage(page); // Login page for handling login actions
        const categoryPage = new CategoryPage(page); // Category page for operations related to categories
        
        // Load test data from JSON file
        const data: UserData = JSON.parse(fs.readFileSync('./config/data.json', 'utf8'));

        // Navigate to the login page
        await page.goto('https://club-administration.qa.qubika.com/#/auth/login');

        // Register a new user via the API
        const responseBody = await apiService.registerNewUser(
            data.email,
            data.password,
            data.roles
        );

        // Validate that the login form is displayed
        await loginPage.validateLoginDisplay();
        
        // Fill the login form with the test data
        await loginPage.loginFormFill(data.email, data.password);
        
        // Validate successful login
        await loginPage.loginValidation();
        
        // Navigate to the category page after successful login
        await navigateTo.categoryPage();
        
        // Add a new category (father category) and validate success prompt
        await categoryPage.addNewCategory(data.fatherCategory);
        await categoryPage.validateSuccessPrompt();
        
        // Add a new child category and validate its display on the page
        await categoryPage.addNewChildCategory(data.childCategory, data.fatherCategory);
        await categoryPage.validateCategoryDisplay(data.childCategory);
    });
});

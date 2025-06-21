import { test, expect } from '@playwright/test';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';

let landingPage: LandingPage;
let signUpPage: SignUpPage;

// Go to the Sign up page

test('Go to the sign up page and create a new user account', async ({ page }) => {

  landingPage = new LandingPage(page);
  signUpPage = new SignUpPage(page);

  // Click Sign up link in the landing page and go its URL
  await landingPage.goToSignUpPage();

  // Fill the form to create a new user account
  await signUpPage.fillSignUpForm();

  await page.waitForTimeout(5000);
});


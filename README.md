# 🛒 QA Engineer Practice - Login and Sign In Workflow with Playwright

---

## 📋 Project Overview
This repository contains:
- ✅ Automated end-to-end tests using Playwright.
- ✅ Automation test cases for core application workflows.
- ✅ Exploratory testing findings.
- ✅ Detailed bug reports with evidence.

The goal of this project is to demonstrate my QA skills in **automated testing**.

---

## Project Structure

```
qa-automation-practice/

├── data/                  # Types of users to positive and negative tests cases
│   ├── users.json
├── tests/                  # Automated tests (e.g. Playwright files)
│   ├── login.spec.js
│   ├── signin.spec.js
│   
├── pages/                      # Page Objetct Model classes
│   ├── LandingPage.ts          
│   ├── SignInPage.ts             
│ 
├── package-lock.json           # Project config
├── package.json                # Project config  
└── playwright.config.js        # Playwright settings
├── README.md                   # Main project overview


Suace is a demo e-commerce: https://sauce-demo.myshopify.com/

## This automation tests covers:

- Login

- Sign up

## Approach

### Exploratory testing: 

- First I started doing a 10 minutes exploratory testing session, testing the shopping cart because it is a main functionality.

- There is a workflow bug in the shopping cart: the cart page never finishes loading unless the user refreshes the page(Visual proof: https://www.loom.com/i/a428fa169da7488986cc96dbdeee2c3b)

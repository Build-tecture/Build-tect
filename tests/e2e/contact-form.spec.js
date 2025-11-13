import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display contact form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Request a Quote' })).toBeVisible()
    await expect(page.getByLabel('First Name *')).toBeVisible()
    await expect(page.getByLabel('Last Name *')).toBeVisible()
    await expect(page.getByLabel('Email *')).toBeVisible()
    await expect(page.getByLabel('Project Type *')).toBeVisible()
  })

  test('should show validation errors for required fields', async ({ page }) => {
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    await expect(page.getByText('First name is required')).toBeVisible()
    await expect(page.getByText('Last name is required')).toBeVisible()
    await expect(page.getByText('Email is required')).toBeVisible()
    await expect(page.getByText('Project type is required')).toBeVisible()
  })

  test('should submit form with valid data', async ({ page }) => {
    await page.getByLabel('First Name *').fill('John')
    await page.getByLabel('Last Name *').fill('Doe')
    await page.getByLabel('Email *').fill('john.doe@example.com')
    await page.getByLabel('Phone').fill('(555) 123-4567')
    await page.getByLabel('Project Type *').selectOption('Residential Design')
    await page.getByLabel('Budget Range').selectOption('$100,000 - $250,000')
    await page.getByLabel('Project Description *').fill('I need help designing a modern home.')
    
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Wait for success message
    await expect(page.getByText('Thank you! Your message has been sent successfully')).toBeVisible()
  })

  test('should navigate to contact page from header', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Get Quote' }).click()
    
    await expect(page).toHaveURL('/contact')
    await expect(page.getByRole('heading', { name: 'Let\'s Build Something Amazing Together' })).toBeVisible()
  })
})
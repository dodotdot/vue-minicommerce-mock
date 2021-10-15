describe('ProductList Pages', () => {
    beforeEach(async () => {
        await page.goto('http://localhost:8080/')
    })

    test('should load', async () => {
        await page.waitForSelector("#nav > .nav-home", "Home",  { timeout: 5_000 });
        await expect(page).toHaveText("#nav > .nav-home", "Home");

        // Take the screenshot of the page with playwright
        const image = await page.screenshot({ fullPage: true });

        // Compare the taken screenshot with the baseline screenshot (if exists), or create it (else)
        expect(image).toMatchImageSnapshot();
    });

    test('click product2 and snapshot', async () => {       
        await page.waitForSelector('.hello > .products-wrapper > .product-block:nth-child(2) > .product-image > img')
        await page.click('.hello > .products-wrapper > .product-block:nth-child(2) > .product-image > img')
        
        await page.waitForTimeout(500)
        // Take the screenshot of the page with playwright
        const image = await page.screenshot({ fullPage: true });

        // Compare the taken screenshot with the baseline screenshot (if exists), or create it (else)
        expect(image).toMatchImageSnapshot();
    });

})
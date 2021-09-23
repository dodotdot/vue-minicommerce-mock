describe('ProductList Pages', () => {
    beforeEach(async () => {
        await page.goto('http://localhost:8080/')
    })

    test('should load', async () => {
        await expect(page).toHaveText("#nav > .nav-home", "Home");
        await page.waitForSelector("#nav > .nav-home", "Home",  { timeout: 5_000 });

        // Take the screenshot of the page with puppeteer
        const image = await page.screenshot({ fullPage: true });

        // Compare the taken screenshot with the baseline screenshot (if exists), or create it (else)
        expect(image).toMatchImageSnapshot();
    });

})
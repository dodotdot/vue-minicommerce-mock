describe('ProductList Pages', () => {
    beforeEach(async () => {
        await page.goto('http://localhost:8080/')
    })

    test('should load', async () => {
        await expect(page).toHaveText("#nav > .nav-home", "Home");
    });

})
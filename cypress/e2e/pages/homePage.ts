class HomePage {
    get appLogo() { return cy.get('.app_logo')}
    get shoppingCartLink() { return cy.get('[data-test="shopping-cart-link"]')}
    get burgerMenu() { return cy.get('[data-test="open-menu"]')}
    get productsTitle() { return cy.get('[data-test="title"]')}
    get productSortOption() { return cy.get('[data-test="product-sort-container"]')}
    get inventoryList() { return cy.get('[data-test="inventory-list"]')}
    get footer() { return cy.get('[data-test="footer"]')}

    public checkHomePageBasicData() {
        cy.url().should('include', '/inventory.html')
        this.appLogo.should('be.visible')
        this.shoppingCartLink.should('be.visible')
        this.burgerMenu.should('be.visible')
        this.productsTitle.should('be.visible')
        this.productSortOption.should('be.visible')
        this.inventoryList.should('be.visible')
        this.footer.should('be.visible')
    }
}
export const homePage: HomePage = new HomePage()

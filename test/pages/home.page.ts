import Page from "./page";

declare var browser:any
class HomePage extends Page {

    // Change values to customize Test
    searchInputText = "Investments and Models"

    // Home Components 
    get homeSearchInputField() {return browser.$('#search-input')}
    get firstSearchResult() {return browser.$('//*[@data-testid ="components-homepad-list-item-title"][1]')}

    // Methods
    searchHomeAndLaunchFirstResult = async () => {
        await this.homeSearchInputField.click();
        await browser.keys("\uE007"); 
        await this.homeSearchInputField.setValue(this.searchInputText);
        await browser.pause(2000);
        await this.firstSearchResult.click();
        await browser.pause(3000);

    }


}

export default new HomePage();
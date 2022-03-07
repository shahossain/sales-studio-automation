import Page from "./page";

declare var browser:any
class BrowserPage extends Page {

    // Change values to customize Test
    savePageModalTitle = "Browser Save Page Popup"
    savePageName = "Regression Test Page"

    // Browser Components 
    get savePageModalButton() {return browser.$('//button[@title="Save Page"]')}
    get savePageNameInputField() {return browser.$('//input[@name="title"]')} 
    get savePageNameConfirm() {return browser.$('//button[@type="submit"]')} 


    // Methods
    savePage = async () => {
      await this.savePageModalButton.click();
      await this.savePageNameInputField.setValue(this.savePageName)
      await this.savePageNameConfirm.click();
    }


}

export default new BrowserPage();
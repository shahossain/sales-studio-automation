import Page from "./page";

declare var browser:any
class StudioPage extends Page {

    // Change values to customize test
    workspaceVersion = "Version 5.5";
    workspaceDOSVersion = "5.5.0";
    logo = "https://www.nba.com/favicon.ico";
    iconUrl = this.logo;
    platformName = 'My Custom Platform';
    homeName = 'My Custom Home';
    storeName = 'My Custom Store';

    // Logo Page
    get logoTabBtn() {return browser.$('//a[@href="logos"]') }
    
    get searchLogoUrl () {return browser.$('//b[contains(text(),"Logo Url")]/../following-sibling::p/input') }
    get addLogoUrlBtn () {return browser.$('//button[contains(text(),"Add Logo Url")]') }
    
    // DOS Page
    get dosTabBtn () {return browser.$('//a[@href="dos"]') }
    
    get selectWSVersion () {return browser.$('//select[contains(@class, "selectpicker")]') }
    get applyLogo () {return browser.$('//img[@src="'+ this.logo +'"]') }
    get applyChangesBtn () {return browser.$('//button[contains(text(), "Apply Changes")]') }
    get dosJSON () {return browser.$('//pre') }

    //  Platforms Page
    get platformsTabBtn () {return browser.$('//a[@href="platforms"]') }
    
    get newPlatformBtn () {return browser.$('//button[contains(text(), "New Platform")]') }
    get newPlatformName () {return browser.$('//p[contains(text(), "Platform Name")]/following-sibling::p[1]/input') }
    get newHomeName () {return browser.$('//p[contains(text(), "Home Name")]/following-sibling::p[1]/input') }
    get newStoreName () {return browser.$('//p[contains(text(), "Store Name")]/following-sibling::p[1]/input') }

    get savePlatformBtn () {return browser.$('//button[contains(text(), "Save Platform")]') }
    get applyPlatformLogo () {return browser.$('//img[@src="'+ this.logo +'"]') }
    get customThemeFlag () {return browser.$('//p[contains(text(), "Custom Theme")]/following-sibling::p[1]/select') }


    // Launch Page
    get launchTabBtn () {return browser.$('//a[@href="launch"]') }
    get launchPlatform () {return browser.$('//img[contains(@src, "'+ this.logo +'")]/preceding-sibling::button[contains(text(), "Launch")]') }

}

export default new StudioPage();
import Page from "./page";
declare class BrowserPage extends Page {
    savePageModalTitle: string;
    savePageName: string;
    get savePageModalButton(): any;
    get savePageNameInputField(): any;
    get savePageNameConfirm(): any;
    savePage: () => Promise<void>;
}
declare const _default: BrowserPage;
export default _default;

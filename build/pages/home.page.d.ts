import Page from "./page";
declare class HomePage extends Page {
    searchInputText: string;
    get homeSearchInputField(): any;
    get firstSearchResult(): any;
    searchHomeAndLaunchFirstResult: () => Promise<void>;
}
declare const _default: HomePage;
export default _default;

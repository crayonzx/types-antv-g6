/**
 * @fileOverview text display
 * @author shiwu.wyy@antfin.com
 */
declare class Plugin {
    constructor(options: any);
    init(): void;
    _textDisplay(text: any, nodeBox: any): void;
    textDisplay(): void;
}
export = Plugin;

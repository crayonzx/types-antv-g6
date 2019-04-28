/**
 * @fileOverview fisheye zoom
 * @author shiwu.wyy@antfin.com
 */
declare class Plugin {
    constructor(options: any);
    init(): void;
    highlightSubgraph(items: any): void;
    unhighlightGraph(): void;
}
export = Plugin;

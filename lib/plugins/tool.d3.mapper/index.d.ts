declare class Plugin {
    constructor(itemType: any, dim: any, channel: any, range: any, otherCfg: any);
    init(): void;
    _trainCategoryScale(itemType: string, data: any): any[];
    _trainNumberScale(itemType: string, data: any): number[];
    _getScaleType(data: any): string;
    _createScale(sourceData: any): void;
    _getLegend(): any;
    _getLegendContainer(): any;
    _createLegend(): void;
    _mapping(): void;
    destroy(): void;
}
export = Plugin;

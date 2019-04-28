declare class Plugin {
    constructor(itemType: any, dim: any, channel: any, range: any, otherCfg: any);
    init(): void;
    _trainCategoryScale(itemType: string, data: any): any[];
    _trainNumberScale(itemType: string, data: any): number[];
    _getScaleType(data: any): string;
    _scaleConsSelector(scaleType: any, scaleCfg: any): any;
    _createScale(sourceData: any): void;
    _createLegend(sourceData: any): void;
    _createCatLegend(canvas: any): any;
    _getLegendCfg(defaultCfg: any): {
        [x: string]: any;
        [x: number]: any;
    };
    _createContinuousColorLegend(canvas: any): any;
    _createContinuousSizeLegend(canvas: any): any;
    _mapping(): void;
    _scaleSelector(type: string, domain: any): any;
    destroy(): void;
}
export = Plugin;

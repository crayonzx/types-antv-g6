/**
 * @fileOverview grid
 * @author huangtonger@aliyun.com
 */
declare class Plugin {
    constructor(options: any);
    /**
     * init plugin
     */
    init(): void;
    _draw(): void;
    _getLinePath(): any[];
    _getPath(): any;
    _getDotPath(): any[];
    show(): void;
    hide(): void;
    getCell(): any;
    update(cfg: any): void;
    destroy(): void;
}
export = Plugin;

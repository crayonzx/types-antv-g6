/**
 * @fileOverview freeze size zoom
 * @author huangtonger@aliyun.com
 */
declare class Plugin {
    constructor(options: any);
    init(): void;
    _stashFreezeElement(): void;
    freezeSize(): void;
}
export = Plugin;

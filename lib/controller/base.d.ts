/**
 * @fileOverview controller base
 * @author huangtonger@aliyun.com
 */
declare class Base {
    getDefaultCfg(): {};
    constructor(cfg: any);
    _init(): void;
    destroy(): void;
}
export = Base;

/**
 * @fileOverview force fit mixin
 * @author huangtonger@aliyun.com
 */
declare const Mixin: {
    INIT: string;
    AUGMENT: {
        _initForceFit(): void;
        _bindForceEvent(type: any): void;
        /**
         * force fit canvas size to container
         * @param  {string|undefined} type string could be 'width', 'height'
         * @return {Graph} this
         */
        forceFit(type: any): any;
    };
};
export = Mixin;
declare type Mixin = typeof Mixin;

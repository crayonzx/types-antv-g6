/**
 * @fileOverview dom event handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */
declare const Mixin: {
    INIT: string;
    CFG: {
        /**
         * keyboard Enable
         * @type {boolean|function}
         */
        keyboardEnable: boolean;
    };
    AUGMENT: {
        _initEvents(): void;
    };
};
export = Mixin;
declare type Mixin = typeof Mixin;

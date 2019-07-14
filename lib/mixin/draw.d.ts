/**
 * @fileOverview draw
 * @author huangtonger@aliyun.com
 */
declare const Mixin: {
    INIT: string;
    AUGMENT: {
        _initDraw(): void;
        draw(): void;
        animateDraw(): void;
    };
};
export = Mixin;
declare type Mixin = typeof Mixin;

/**
 * @fileOverview animate mixin
 * @author huangtonger@aliyun.com
 */
import Animate = require('../controller/animate');
declare const Mixin: {
    INIT: string;
    CFG: {
        /**
         * animate switch
         * @type {boolean}
         */
        animate: boolean | Partial<{
            show: string | Animate.ConfigCallback;
            hide: string | Animate.ConfigCallback;
            enter: string | Animate.ConfigCallback;
            leave: string | Animate.ConfigCallback;
            update: string | Animate.ConfigCallback;
            graph: any;
            startCache: {};
            endCache: {};
            keykeyCache: {};
        }>;
    };
    AUGMENT: {
        _initAnimate(): void;
    };
};
export = Mixin;
declare type Mixin = typeof Mixin;

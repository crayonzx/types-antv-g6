/**
 * @fileOverview animate mixin
 * @author huangtonger@aliyun.com
 */
import Animate = require('../controller/animate');
declare const _default: {
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
    INIT: string;
    AUGMENT: {
        _initAnimate(): void;
    };
};
export = _default;

/**
 * @fileOverview layout mixin
 * @author huangtonger@aliyun.com
 */
declare const _default: {
    CFG: {
        /**
         * Layout cfg
         * @type {object|function|undefined}
         */
        layout: object | Function;
    };
    INIT: string;
    AUGMENT: {
        _initLayout(): void;
        _getLayoutCfg(): any;
        /**
         * @return {Graph} this
         */
        layout(): any;
        /**
         * @param  {array} nodes - nodes need update position
         * @return {Graph} this
         */
        updateNodePosition(nodes: any): any;
        /**
         * @param  {object} processor - layout processer
         * @return {Graph} this
         */
        changeLayout(processor: any): any;
        getLayout(): any;
    };
};
export = _default;

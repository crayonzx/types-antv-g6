/**
 * @fileOverview mapping mixin
 * @author huangtonger@aliyun.com
 */
declare const _default: {
    INIT: string;
    AUGMENT: {
        _initMapper(): void;
        /**
         * node mapping
         * @param  {array} channels mapping channel
         * @return {object} nodeMapper
         */
        node(channels: any): any;
        /**
         * edge mapping
         * @param  {array} channels mapping channel
         * @return {object} edgeMapper
         */
        edge(channels: any): any;
        /**
         * group mapping
         * @param  {array} channels mapping channel
         * @return {object} groupMapper
         */
        group(channels: any): any;
        /**
         * guide mapping
         * @param  {array} channels mapping channel
         * @return {object} guideMapper
         */
        guide(channels: any): any;
    };
};
export = _default;

/**
 * @fileOverview mapping mixin
 * @author huangtonger@aliyun.com
 */
import Mapper = require('../controller/mapper');
declare const Mixin: {
    INIT: string;
    AUGMENT: {
        _initMapper(): void;
        /**
         * node mapping
         * @param  {array} channels mapping channel
         * @return {object} nodeMapper
         */
        node(channels: Mapper.Channels): any;
        /**
         * edge mapping
         * @param  {array} channels mapping channel
         * @return {object} edgeMapper
         */
        edge(channels: Mapper.Channels): any;
        /**
         * group mapping
         * @param  {array} channels mapping channel
         * @return {object} groupMapper
         */
        group(channels: Mapper.Channels): any;
        /**
         * guide mapping
         * @param  {array} channels mapping channel
         * @return {object} guideMapper
         */
        guide(channels: Mapper.Channels): any;
    };
};
export = Mixin;
declare type Mixin = typeof Mixin;

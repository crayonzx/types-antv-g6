/**
 * @fileOverview layout controller
 * @author huangtonger@aliyun.com
 */
import Base = require('./base');
declare class Controller extends Base {
    getDefaultCfg(): {
        /**
         * graph object
         * @type {object}
         */
        graph: Graph;
        /**
         * if auto layout afterchange
         * @type {boolean|string}
         * could be true false 'once'
         */
        auto: string | boolean;
        /**
         * layout processor
         * @type {object}
         */
        processor: any;
    };
    _init(): void;
    /**
     * @param  {object} processor - layout processer
     */
    changeLayout(processor: any): void;
    /**
     */
    layout(): void;
    getLayoutProcessor(): any;
}
export = Controller;
import Graph from '../graph';
interface Controller extends ReturnType<Controller['getDefaultCfg']> {
}

/**
 * @fileOverview animate controller
 * @author huangtonger@aliyun.com
 */
import Base = require('./base');
declare class Controller extends Base {
    getDefaultCfg(): {
        /**
         * show animate
         * @type {function|string}
         */
        show: string | Controller.ConfigCallback;
        /**
         * hide animate
         * @type {function|string}
         */
        hide: string | Controller.ConfigCallback;
        /**
         * enter animate
         * @type {function|string}
         */
        enter: string | Controller.ConfigCallback;
        /**
         * leave animate
         * @type {function|string}
         */
        leave: string | Controller.ConfigCallback;
        /**
         * update animate
         * @type {function}
         */
        update: string | Controller.ConfigCallback;
        graph: any;
        startCache: {};
        endCache: {};
        keykeyCache: {};
    };
    _init(): void;
    cacheGraph(cacheType: string, affectedItemIds: string[]): void;
    _getCache(element: any): any;
    /**
     * get animate
     * @param  {object} item - item
     * @param  {string} type - animate type could be `show`, `hide`, `enter`, `leave`, 'update'
     * @return {function} animate function
     */
    _getAnimation(item: any, type: string): any;
    cache(item: any, cache: any, type: string): void;
    _compare(): void;
    _addTween(): void;
    run(): void;
}
export = Controller;
import G from '@antv/g/lib';
import Item from '../item/item';
declare namespace Controller {
    interface KeyFrame {
        props: {
            matrix: {};
            attrs: {};
        };
        element: G.Shape | G.Group;
    }
    interface Config {
        /** G.Shape || G.Group */
        element: G.Shape | G.Group;
        /** G6 图项 */
        item: Item;
        /** 该图元的起始关键帧 */
        startKeyFrame: KeyFrame;
        /** 该图元的结束关键帧 */
        endKeyFrame: KeyFrame;
        /** 起始关键帧的缓存集（有时候某个图元的动画会跟其它图元有关） */
        startStashes: any;
        /** 结束关键帧的缓存集（有时候某个图元的动画会跟其它图元有关） */
        endStashes: any;
        /** 动画结束后执行（由于动画是异步执行的，所以需要有个方法告诉 G6 这个补间是否已经结束） */
        done: () => void;
    }
    type ConfigCallback = (cfg: Config) => void;
}

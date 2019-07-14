/**
 * @fileOverview
 * The base class for complex class
 * @author huangtonger@aliyun.com
 */
/// <reference types="antv__g" />
declare const EE: new () => Event;
declare class Base extends EE {
    _cfg: {};
    _events: {};
    destroyed: boolean;
    getDefaultCfg(): {};
    constructor(cfg: any);
    get: import("@antv/g/lib/core/element").IGet;
    set: import("@antv/g/lib/core/element").ISet;
    destroy(): void;
}
export = Base;
import Event from './event';
import G from '@antv/g';
declare namespace Base {
    type IGet = G.Group['get'];
    type ISet = G.Group['set'];
    type Events<E extends string, T extends any[]> = Event.Events<E, T>;
    type EventHandler<T extends any[]> = Event.EventHandler<T>;
}

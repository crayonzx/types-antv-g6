/**
 * @fileOverview
 * The base class for complex class
 * @author huangtonger@aliyun.com
 */
declare const EE: typeof Event;
declare class Base extends EE {
    _cfg: {};
    _events: {};
    destroyed: boolean;
    getDefaultCfg(): {};
    constructor(cfg: any);
    get<T extends {
        _cfg: any;
    }, K extends keyof T['_cfg']>(this: T, name: K): T['_cfg'][K];
    set<T extends {
        _cfg: any;
    }, K extends keyof T['_cfg']>(this: T, name: K, value: T['_cfg'][K]): void;
    destroy(): void;
}
export = Base;
import Event from './event';
declare namespace Base {
    type Events<E extends string, T extends any[]> = Event.Events<E, T>;
    type EventHandler<T extends any[]> = Event.EventHandler<T>;
}

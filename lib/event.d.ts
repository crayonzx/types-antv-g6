import EventEmitter from 'wolfy87-eventemitter';
import G from '@antv/g/lib';
import Item from './items';
declare type Event_ = Pick<EventEmitter, Exclude<keyof EventEmitter, keyof Event0>> & Event0;
interface Event extends Event_ {
}
interface Event0 {
    addListener: <T extends Event.Eventor<string, any[]>, K extends Event.EventKeys<T>>(this: T, event: K, listener: Event.EventHandler<Event.EventArgs<T, K>>) => T;
    addOnceListener: Event['addListener'];
    removeListener: Event['addListener'];
    emit: <T extends Event.Eventor<string, any[]>, K extends Event.EventKeys<T>>(this: T, event: K, ...arg: Event.EventArgs<T, K>) => T;
    on: Event['addListener'];
    once: Event['addListener'];
    off: Event['addListener'];
    getListeners: <T extends Event.Eventor<string, any[]>, K extends Event.EventKeys<T>>(this: T, event?: K) => Array<Event.EventHandler<Event.EventArgs<T, K>>>;
    addListeners: <T extends Event.Eventor<string, any[]>, K extends Event.EventKeys<T>>(this: T, event: K, listeners: Array<Event.EventHandler<Event.EventArgs<T, K>>>) => T;
    removeListeners: Event['addListeners'];
    trigger: <T extends Event.Eventor<string, any[]>, K extends Event.EventKeys<T>>(this: T, event: K, args: Event.EventArgs<T, K>) => T;
    emitEvent: Event['trigger'];
    removeEvent: <T extends Event.Eventor<string, any[]>, K extends Event.EventKeys<T>>(this: T, event?: K) => T;
    removeAllListeners: Event['removeEvent'];
}
declare namespace Event {
    /** HACK: '__eventArgsType' is only to help to get type of event args. */
    type EventValue<T extends any[]> = Array<EventHandler<T>> & {
        __eventArgsType: T;
    };
    type Events<E extends string, T extends any[]> = {
        [event in E]: EventValue<T>;
    };
    type EventHandler<T extends any[]> = (...args: T) => any;
    interface Eventor<E extends string, T extends any[]> {
        _events: Event.Events<E, T>;
    }
    type EventKeys<T extends Eventor<string, any[]>> = keyof T['_events'];
    type EventArgs<T extends Eventor<string, any[]>, K extends EventKeys<T>> = T['_events'][K]['__eventArgsType'];
    type MouseEvent = 'click' | 'dblclick' | 'mouseenter' | 'mouseleave' | 'mousedown' | 'mouseup' | 'mousemove' | 'dragstart' | 'drag' | 'dragend' | 'dragenter' | 'dragleave' | 'drop' | 'contextmenu' | 'wheel' | 'mousewheel';
    type KeyboardEvent = 'keydown' | 'keyup' | 'keypress';
    type DomEventMap = HTMLElementEventMap;
    type BaseEvent = DomEventMap['close'];
    interface EventObject<E extends BaseEvent = BaseEvent> {
        /** drag 拖动子项 */
        currentItem: Item;
        /** drag 拖动图形 */
        currentShape: G.Shape;
        /** 图形对象 */
        shape: G.Shape;
        /** 子项 */
        item: Item;
        /** 原生的 dom 事件 */
        domEvent: E;
        /** 图横坐标 */
        x: number;
        /** 图纵坐标 */
        y: number;
        /** dom横坐标 */
        domX: number;
        /** dom纵坐标 */
        domY: number;
        /** 数据变更动作 add、update、remove、changeData */
        action?: 'add' | 'update' | 'remove' | 'changeData';
        /** mouseleave、dragleave 到达的图形 */
        toShape?: G.Shape;
        /** mouseleave、dragleave 到达的子项 */
        toItem?: Item;
        /** mouseleave、dragleave 来自的图形 */
        fromShape?: G.Shape;
        /** 鼠标左中右键 */
        button: 0 | 1 | 2;
    }
    type MouseEventObject = EventObject<DomEventMap['click']>;
    type KeyboardEventObject = EventObject<DomEventMap['keypress']>;
}
export default Event;

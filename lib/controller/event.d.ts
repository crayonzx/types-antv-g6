/**
 * @fileOverview dom event handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */
import Base = require('./base');
declare class Controller extends Base {
    constructor(cfg: any);
    _initEventStates(): void;
    _registerEvents(): void;
    _registerKeyboardEvents(): void;
    _registerMouseEvents(): void;
    destroy(): void;
    /**
      * trigger event
      * @param {string} type  - event type
      * @param {object} eventObj - event object
      */
    _triggerEvent(type: string, eventObj: any): void;
    /**
      * emit graph event
      * @param {object} type - event type
      * @param {object} eventObj - event object
      */
    emitGraphEvent(type: string, eventObj: any): void;
    _getDistanceToPress(ev: any): number;
    /**
      * check whether or not  click  and drag
      * @param {object} ev - native dom event
      * @param {object} oldEventObj - old event object
      * @param {object} currentEventObj - current event object
      */
    _simulateEvents(ev: any, oldEventObj?: {}, currentEventObj?: {}): void;
    /**
     * checkout item is change
     * @param {object} oldEventObj - old event obj
     * @param {object} currentEventObj - current event obj
     * @return {boolean} rst
     */
    _isItemChange(oldEventObj: any, currentEventObj: any): boolean;
    /**
     * handle the native event by browser
     * @param {object} ev - native event by browser
     */
    _processEventObj(ev: any): void;
    _parsePoint(x: number, y: number): any;
    /**
      * get the source object which emitted event
      * @param {object} ev  -native event by browser
      * @param {object} canvas -the scene that event occurred
      * @return {object} - event object
      */
    _getEventObj(ev: any, canvas: any): {
        item: any;
        shape: any;
        x: any;
        y: any;
        domX: number;
        domY: number;
        domEvent: any;
    };
}
export = Controller;

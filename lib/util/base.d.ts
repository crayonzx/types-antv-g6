/// <reference types="@antv/util" />
/// <reference types="lodash" />
import Util = require('@antv/util/lib');
declare const BaseUtil0: {
    throttle: <T extends (...args: any) => any>(func: T, wait?: number, options?: import("lodash").ThrottleSettings) => T & import("lodash").Cancelable;
    debounce: <T extends (...args: any) => any>(func: T, wait?: number, options?: import("lodash").DebounceSettings) => T & import("lodash").Cancelable;
    /**
     * The opposite of pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     * omit(object, ['a', 'c']); // => { 'b': '2' }
     * @param  {object}      object - input object
     * @param  {function}    array - condition array
     * @return  {object}     result object
     */
    omit<T extends object, K extends keyof T>(object: T, array: K[]): Pick<T, Exclude<keyof T, K>>;
    /**
     * traverse tree
     * @param  {object}      parent      parent
     * @param  {function}    callback    callback
     * @param  {function}    getChild    get child function
     * @param  {boolean}     runSelf     callback run self or not
     */
    traverseTree: <T>(parent: T, callback: (child: T, parent?: T, index?: number) => void, getChild: (p: T) => T[], runSelf?: boolean) => void;
    /**
     * turn padding into [top, right, bottom, right]
     * @param  {Number|Array} padding input padding
     * @return {array} output
     */
    toAllPadding(padding: number | number[]): number[];
    /**
     * create random id
     * @return {string} random id
     */
    guid(): string;
    /**
     * merge data
     * @return {object} merged data
     */
    mix(): any;
    /**
     * mix in
     * @param {function} c Function
     * @param {array} mixins mixin array
     */
    mixin(c: any, mixins: any): void;
    Array: {
        remove<T>(arr: T[], obj: T): void;
    };
};
declare const BaseUtil: BaseUtil;
export = BaseUtil;
declare type BaseUtil = GUtil.Overwrite<typeof Util, typeof BaseUtil0, {
    mix: BaseUtil.Mix;
}>;
declare namespace BaseUtil {
    interface Mix {
        <T, U1, U2, U3, U4, U5, U6>(deep: boolean, dst: T, src1: U1, src2?: U2, src3?: U3, src4?: U4, src5?: U5, src6?: U6): GUtil.Overwrite<T, U1, U2, U3, U4, U5, U6>;
        <T, U1, U2, U3, U4, U5, U6>(dst: T, src1: U1, src2?: U2, src3?: U3, src4?: U4, src5?: U5, src6?: U6): GUtil.Overwrite<T, U1, U2, U3, U4, U5, U6>;
    }
    type Omit<T, K extends any> = Pick<T, Exclude<keyof T, K>>;
    type Overwrite<T, U> = Omit<T, keyof U> & U;
}

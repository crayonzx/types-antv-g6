/**
 * @fileOverview extend G.Group
 * @author huangtonger@aliyun.com
 * @ignore
 */
declare const Mixin1: (new () => {} & {
    /**
     * find element by className
     * @param   {string}      className class name
     * @return  {Array}       rst
     */
    findByClass(className: string): any[];
    /**
     * Check contains the specified class
     * @param   {string}      className class name
     * @return  {Boolean}     boolean
     */
    hasClass(className: string): boolean;
    /**
     * traverse child node
     * @param  {function} callback callback
     * @param  {boolean} runSelf excute self or not
     */
    deepEach(callback: () => void, runSelf: boolean): void;
    /**
     * radix sort (a stable sort)
     */
    sort(): void;
    /**
     * sort by callback
     * @param  {function} callback callback
     */
    sortBy(callback: () => void): void;
    /**
     * clear inner elements
     * @param  {boolean} bool if destroy child
     * @return {object}  this
     */
    clear(bool: boolean): any;
}) & {};
export = Mixin1;

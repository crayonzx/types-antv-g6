/**
 * @fileOverview extend G.Shape
 * @author huangtonger@aliyun.com
 * @ignore
 */
declare const Mixin1: (new () => {} & {
    /**
     * Check contains the specified class
     * @param   {string}      className class name
     * @return  {Boolean}     boolean
     */
    hasClass(className: string): boolean;
}) & {};
export = Mixin1;

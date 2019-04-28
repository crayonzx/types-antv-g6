/**
 * @fileOverview dom to canvas
 * @author huangtonger@aliyun.com
 */
declare class Graph2Canvas {
    constructor(options: any);
    getCanvas(): any;
    /**
     * draw canvas
     * @param  {object}  canvas item
     * @param  {function}  callback item
     */
    drawInner(canvas: any, callback: () => void): void;
    toCanvas(): any;
}
export = Graph2Canvas;

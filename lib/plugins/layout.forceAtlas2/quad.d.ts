/**
 * @fileOverview quad
 * @author shiwu.wyy@antfin.com
 */
declare class Quad {
    constructor(params: any);
    getLength(): any;
    contains(x: any, y: any): boolean;
    NW(): Quad;
    NE(): Quad;
    SW(): Quad;
    SE(): Quad;
}
export = Quad;

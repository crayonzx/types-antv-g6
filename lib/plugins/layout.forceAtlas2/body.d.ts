/**
 * @fileOverview body
 * @author shiwu.wyy@antfin.com
 */
declare class Body {
    constructor(params: any);
    distanceTo(bo: any): number;
    setPos(x: number, y: number): void;
    resetForce(): void;
    addForce(b: any): void;
    in(quad: any): any;
    add(bo: any): Body;
}
export = Body;

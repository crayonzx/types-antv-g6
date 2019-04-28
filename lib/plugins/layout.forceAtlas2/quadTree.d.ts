/**
 * @fileOverview quadTree
 * @author shiwu.wyy@antfin.com
 */
declare class QuadTree {
    constructor(param: any);
    insert(bo: any): void;
    _putBody(bo: any): void;
    _isExternal(): boolean;
    updateForce(bo: any): void;
}
export = QuadTree;

/**
 * @fileOverview tree
 * @author huangtonger@aliyun.com
 */
import Graph = require('./graph');
declare class Tree extends Graph {
    constructor(inputCfg: any);
    initEvent(): void;
    _executeLayout(processor: any): void;
    getHierarchy(item: any): number;
    parseSource(data: any): {
        nodes: any[];
        edges: any[];
    };
    _setVisibleByCollapsed(item: any): void;
    /**
     * @param {object} data tree data
     */
    source(data: Model.Data): void;
    /**
     * @param {object} node item node
     * @param {object} nth nth
     */
    _setNodeNth(node: any, nth: any): void;
    /**
     * @param {object} node item node
     * @return {number} nth
     */
    getNth(node: any): any;
    /**
     * @param {string} type item type
     * @param {object} model data model
     * @return {Graph} this
     */
    add(type: any, model: any): any;
    /**
     * @param {string|Item} item target item
     * @param {object} model data model
     * @return {Graph} this
     */
    update(item: any, model: any): this;
    /**
     * @param {string|Item} item target item
     * @return {Graph} this
     */
    remove(item: any): this;
    getRoots(): any;
    save(): {
        roots: any;
        guides: Model.Guide[];
    };
}
export = Tree;
import Model from './model';

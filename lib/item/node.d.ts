/// <reference types="@antv/util" />
/**
 * @fileOverview node item
 * @author huangtonger@aliyun.com
 */
import G from '@antv/g/lib';
import G6 from '..';
import Edge from './edge';
import Item = require('./item');
declare class Node<T extends Item.Type = 'node'> extends Item<T> {
    model: G6.Model.Node;
    isNode: true;
    constructor(cfg: any);
    updatePosition(): void;
    _shouldDraw(): boolean;
    _afterDraw(): void;
    layoutUpdate(): void;
    getEdges(): Edge[];
    getInEdges(): Edge[];
    getOutEdges(): Edge[];
    /**
      * get anchor points, if there is anchors return the points sorted by arc , others return the link point
      * @param {Object | Number} point - start point
      * @return {array} - all anchor points sorted by angle, ASC
      */
    getLinkPoints(point: G.Common.Point | number): G.Common.Point[];
    /**
     * get position of anchor points
     * @param {number} index the index of points
     * @return {array} anchorPoints
     */
    getAnchorPoints(index?: number): Array<G.Common.Point & {
        index: number;
        [x: string]: any;
    }>;
}
export = Node;

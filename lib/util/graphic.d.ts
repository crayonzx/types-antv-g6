/**
 * @fileOverview graphic util
 * @author huangtonger@aliyun.com
 */
/// <reference types="@antv/util" />
declare const GraphicUtil: {
    /**
     * set box1 into box2
     * @param  {object} box1 - box1
     * @param  {object} box2 - box2
     * @param  {array} padding - autozoom padding
     * @param  {function} limitRatio - limit ratio callback
     * @return {object} matrix
     */
    getAutoZoomMatrix(box1: any, box2: any, padding: any, limitRatio: any): number[];
    /**
     * get nine block box location
     * @param  {string} position could be 'tl' 'lc' 'bl' 'cc' 'tc' 'tr' 'rc' 'br' 'bc' default to be 'tl'
     * @param  {object} containerBox container box
     * @param  {number} width graph width
     * @param  {number} height graph height
     * @param  {array} padding padding
     * @return {object} left top point
     */
    getNineBoxPosition(position: any, containerBox: any, width: any, height: any, padding: any): G.Common.Point;
    /**
     * get total bbox
     * @param  {array} boxes boxes
     * @return {object} box
     */
    getTotalBBox(boxes: G.Common.BBox[]): G.Common.BBox;
    /**
     * get children bbox
     * @param  {array} children g children
     * @return {object} box
     */
    getChildrenBBox(children: import("@antv/g/lib/core/group").Child[]): G.Common.BBox;
    /**
     * get bbox apply root matrix
     * @param  {number} element g element
     * @param  {number} root    g group (should be element parent) or matix
     * @return {object} applied point
     */
    getBBox(element: import("@antv/g/lib/core/group").Child, root: any): G.Common.BBox;
    /**
     * element to back
     * @param  {object} element g shape or group
     */
    toBack(element: import("@antv/g/lib/core/group").Child): void;
    /**
     * element to front
     * @param  {object} element g shape or group
     */
    toFront(element: import("@antv/g/lib/core/group").Child): void;
};
export = GraphicUtil;
import G from '@antv/g/lib';
declare type GraphicUtil = typeof GraphicUtil;

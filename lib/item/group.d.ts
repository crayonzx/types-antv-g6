/**
 * @fileOverview group item
 * @author huangtonger@aliyun.com
 */
/// <reference types="@antv/util" />
import Model from '../model';
import Node = require('./node');
declare class Group extends Node<'group'> {
    model: Model.Group;
    isGroup: true;
    constructor(cfg: any);
    _beforeDraw(): void;
    updatePosition(): void;
    _shouldDraw(): boolean;
    /**
     * get cross group edge
     * @return {array} edges
     */
    getCrossEdges(): any[];
    /**
     * get all inner edges
     * @return {array} edges
     */
    getInnerEdges(): any[];
    /**
     * get children BBox
     * @return {object} box
     */
    getChildrenBBox(): GCommon.BBox;
}
export = Group;

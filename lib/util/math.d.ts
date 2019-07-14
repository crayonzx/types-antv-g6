/**
 * @fileOverview math util
 * @author huangtonger@aliyun.com
 */
/// <reference types="@antv/util" />
import BaseUtil = require('./base');
declare const MathUtil0: {
    /**
     * 是否在区间内
     * @param   {number}       value  值
     * @param   {number}       min    最小值
     * @param   {number}       max    最大值
     * @return  {boolean}      bool   布尔
     */
    isBetween(value: any, min: any, max: any): boolean;
    /**
     * 两线段交点
     * @param  {object}  p0 第一条线段起点
     * @param  {object}  p1 第一条线段终点
     * @param  {object}  p2 第二条线段起点
     * @param  {object}  p3 第二条线段终点
     * @return {object}  交点
     */
    getLineIntersect(p0: any, p1: any, p2: any, p3: any): any;
    /**
     * point and rectangular intersection point
     * @param  {object} rect  rect
     * @param  {object} point point
     * @return {object} rst;
     */
    getIntersectPointRect(rect: any, point: any): any;
    /**
     * get point and circle inIntersect
     * @param  {number} x   point x
     * @param  {number} y   point y
     * @param  {number} cx  circle center x
     * @param  {number} cy  circle center y
     * @param  {number} cr  circle radius
     * @return {object} applied point
     */
    getIntersectPointCircle(x: any, y: any, cx: any, cy: any, cr: any): {
        x: any;
        y: any;
    };
    /**
     * coordinate matrix transformation
     * @param  {number} point   coordinate
     * @param  {number} matrix  matrix
     * @param  {number} tag     could be 0 or 1
     * @return {object} transformed point
     */
    applyMatrix(point: G.Common.Point, matrix: any, tag?: number): {
        x: number;
        y: number;
    };
    /**
     * coordinate matrix invert transformation
     * @param  {number} point   coordinate
     * @param  {number} matrix  matrix
     * @param  {number} tag     could be 0 or 1
     * @return {object} transformed point
     */
    invertMatrix(point: any, matrix: any, tag?: number): {
        x: any;
        y: any;
    };
    /**
     * radix sort
     * @param  {array} arr unsorted child node set
     * @param  {function} callback callback
     * @return {array} after sorting child node set
     */
    radixSort(arr: any, callback: any): any;
    /**
      * get arc of two vertors
      * @param {object} vector1 - vector1
      * @param {object} vector2 - vector2
      * @return {number} - arc
      */
    getArcOfVectors(vector1: any, vector2: any): number;
};
declare const MathUtil: MathUtil;
export = MathUtil;
import G from '@antv/g/lib';
declare type MathUtil = typeof BaseUtil & typeof MathUtil0;

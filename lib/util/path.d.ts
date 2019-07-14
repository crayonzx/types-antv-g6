/**
 * @fileOverview path util
 * @author huangtonger@aliyun.com
 */
/// <reference types="@antv/util" />
import G = require('@antv/g/lib');
import BaseUtil = require('./base');
declare const PathUtil: PathUtil;
declare const PathUtil0: {
    getRectPath: typeof G.PathUtil.rectPath;
    /**
     * points to polygon
     * TODO improve performance
     * @param {array}  points input points
     * @param {Boolen} z if close path
     * @return {string} Path
     */
    pointsToPolygon(points: G.Common.Point[]): G.Common.SVGPath;
    /**
     * get ellipse path
     * @param {number} x  horizontal coordinates
     * @param {number} y  vertical coordinates
     * @param {number} rx horizontal radius
     * @param {number} ry vertical radius
     * @return {array} path
     */
    getEllipsePath(x: number, y: number, rx: number, ry: number): G.Common.SVGPath;
};
export = PathUtil;
declare type PathUtil = BaseUtil.Overwrite<typeof G.PathUtil, typeof PathUtil0>;

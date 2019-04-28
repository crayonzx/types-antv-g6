/// <reference types="@antv/util" />
/**
 * @fileOverview graph fit canvas
 * @author huangtonger@aliyun.com
 */
import Common from '@antv/g/lib/common';
import Item from '../items';
import Graph from '../graph';
declare const _default: {
    CFG: {
        /**
         * Adaptive viewport
         * @type {string|undefined}
         * could be 'tl', 'lc', 'bl', 'cc', 'tc', 'tr', 'rc', 'br', 'bc', 'autoZoom'
         */
        fitView: "br" | "tr" | "lc" | "tl" | "bl" | "cc" | "tc" | "rc" | "bc" | "autoZoom";
        /**
         * Fit view padding (client scale)
         * @type {number|array}
         */
        fitViewPadding: number | number[];
        /**
         * Minimum scale size
         * @type {number}
         */
        minZoom: number;
        /**
         * Maxmum scale size
         * @type {number}
         */
        maxZoom: number;
    };
    AUGMENT: {
        getBBox(this: Graph): Common.BBox;
        getFitViewPadding(): number[];
        setFitView(type: string): any;
        _getZoomRatio(ratio: any): any;
        /**
         * @param {number|array} padding padding
         */
        autoZoom(padding: any): void;
        /**
         * @return {number} zoom
         */
        getZoom(): number;
        /**
         * @param {object} matrix update matrix
         * @return {Graph} this
         */
        updateMatrix(matrix: any): any;
        /**
         * @param {Object|Number} point scale center point
         * @param {Number|undefined} ratio scale ratio
         * @return {Graph} this
         */
        zoom(point: number | Common.Point, ratio?: number): any;
        /**
         * @param {object} domPoint scale center dom point
         * @param {number} ratio scale ratio
         * @return {Graph} this
         */
        zoomByDom(domPoint: any, ratio: any): any;
        /**
         * @param {number} dx x offset
         * @param {number} dy y offset
         * @return {Graph} this
         */
        translate(dx: number, dy: number): any;
        /**
         * @param {number} dx dom x offset
         * @param {number} dy dom y offset
         * @return {Graph} this
         */
        translateByDom(dx: any, dy: any): any;
        /**
         * @return {Graph} this
         */
        getMatrix(): any;
        /**
         * @param {object} matrix - matrix
         */
        setMatrix(matrix: any): void;
        /**
         * @param {object} domPoint domPoint
         * @return {object} graph point
         */
        getPoint(domPoint: Common.Point): Common.Point;
        /**
         * @param {object} domPoint domPoint
         * @return {object} graph point
         */
        getPointByDom(domPoint: any): {
            x: any;
            y: any;
        };
        /**
         * @param {object} canvasPoint - canvas point
         * @return {object} graph point
         */
        getPointByCanvas(canvasPoint: any): any;
        /**
         * @param {object} clientPoint - client point
         * @return {object} graph point
         */
        getPointByClient(clientPoint: any): any;
        /**
         * @param {object} point graph point
         * @return {object} dom point
         */
        getDomPoint(point: Common.Point): Common.Point;
        /**
         * @param {object} point graph point
         * @return {object} canvas point
         */
        getCanvasPoint(point: any): {
            x: number;
            y: number;
        };
        /**
         * @param {object} point graph point
         * @return {object} client point
         */
        getClientPoint(point: any): {
            x: any;
            y: any;
        };
        /**
         * @param {object} item item or itemId
         * @return {Graph} this
         */
        focus(item: string | Item.Base): any;
        /**
         * @param {object} point graph point
         * @return {Graph} this
         */
        focusPoint(point: Common.Point): any;
        /**
         * @param {object} domPoint dom point
         * @return {Graph} this
         */
        focusPointByDom(domPoint: any): any;
    };
};
export = _default;

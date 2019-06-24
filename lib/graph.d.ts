/// <reference types="@antv/util" />
import Base = require('./base');
import Util = require('./util/');
import G = require('@antv/g/lib');
declare const Mixins: ({
    INIT: string;
    CFG: {
        filters: any[];
    };
    AUGMENT: {
        _initFilter(): void;
        addFilter(filter: any): any;
        removeFilter(filter: any): void;
        filter(): void;
        _getFilterItems(): any;
    };
} | {
    INIT: string;
    AUGMENT: {
        _initMapper(): void;
        node(channels: import("./controller/mapper").Channels): any;
        edge(channels: import("./controller/mapper").Channels): any;
        group(channels: import("./controller/mapper").Channels): any;
        guide(channels: import("./controller/mapper").Channels): any; /**
         * FontFamily
         * @type {string}
         */
    };
} | {
    AUGMENT: {
        find(id: string): Item_.Base;
        getNodes(): Item_.Node[];
        getEdges(): Item_.Edge[];
        getGroups(): Item_.Group[];
        getGuides(): Item_.Guide[];
        getItems(): Item_.Base[];
        getItemByShape(shape: any): Item_.Base;
        getItem(item: string | Item_.Base): Item_.Base;
    };
} | {
    INIT: string;
    CFG: {
        layout: object | Function;
    };
    AUGMENT: {
        _initLayout(): void;
        _getLayoutCfg(): any;
        layout(): any;
        updateNodePosition(nodes: any): any;
        changeLayout(processor: any): any;
        getLayout(): any;
    };
} | {
    INIT: string;
    CFG: {
        animate: boolean | Partial<{
            show: string | import("./controller/animate").ConfigCallback;
            hide: string | import("./controller/animate").ConfigCallback;
            enter: string | import("./controller/animate").ConfigCallback;
            leave: string | import("./controller/animate").ConfigCallback;
            update: string | import("./controller/animate").ConfigCallback;
            graph: any;
            /**
             * Canvas width
             * @type {number|undefined}
             * unit pixel if undefined force fit width
             */
            startCache: {};
            endCache: {};
            keykeyCache: {};
        }>;
    };
    AUGMENT: {
        _initAnimate(): void;
    };
} | {
    INIT: string;
    AUGMENT: {
        _initDraw(): void;
        draw(): void;
        animateDraw(): void;
    };
} | {
    INIT: string;
    AUGMENT: {
        _initForceFit(): void;
        _bindForceEvent(type: any): void;
        forceFit(type: any): any;
    };
} | {
    CFG: {
        fitView: "br" | "tr" | "lc" | "tl" | "bl" | "cc" | "tc" | "rc" | "bc" | "autoZoom";
        fitViewPadding: number | number[];
        minZoom: number;
        maxZoom: number;
    };
    AUGMENT: {
        getBBox(this: Graph): G.Common.BBox;
        getFitViewPadding(): number[];
        setFitView(type: string): any;
        _getZoomRatio(ratio: any): any;
        autoZoom(padding: any): void;
        getZoom(): number;
        updateMatrix(matrix: any): any;
        zoom(point: number | G.Common.Point, ratio?: number): any;
        zoomByDom(domPoint: any, ratio: any): any;
        translate(dx: number, dy: number): any;
        translateByDom(dx: any, dy: any): any;
        getMatrix(): any;
        setMatrix(matrix: any): void;
        getPoint(domPoint: G.Common.Point): G.Common.Point;
        getPointByDom(domPoint: any): {
            x: any;
            y: any;
        };
        getPointByCanvas(canvasPoint: any): any;
        getPointByClient(clientPoint: any): any;
        getDomPoint(point: G.Common.Point): G.Common.Point;
        getCanvasPoint(point: any): {
            x: number;
            y: number;
        };
        getClientPoint(point: any): {
            x: any;
            y: any;
        };
        focus(item: string | Item_.Base): any;
        focusPoint(point: G.Common.Point): any;
        focusPointByDom(domPoint: any): any;
    };
} | {
    INIT: string;
    CFG: {
        keyboardEnable: boolean;
    };
    AUGMENT: {
        _initEvents(): void;
    };
} | {
    INIT: string;
    CFG: {
        modes: {
            [mode: string]: string[];
        };
        mode: string;
        _eventCache: {};
    };
    AUGMENT: {
        _initModes(): void;
        changeMode(modeName: string): void;
        addBehaviour(behaviour: string | any[], mode: string): any;
        removeBehaviour(behaviour: string | any[]): any;
        behaviourOn(type: string, fn: (...args: any[]) => any): void;
        _off(): void;
    };
})[];
declare class Graph extends Base {
    /**
     * Access to the default configuration properties
     * @return {object} default configuration
     */
    getDefaultCfg(): {
        /**
         * Container could be dom object or dom id
         * @type {object|string|undefined}
         */
        container: string | HTMLElement;
        /**
         * Canvas width
         * @type {number|undefined}
         * unit pixel if undefined force fit width
         */
        width: number;
        /**
         * Canvas height
         * @type {number|undefined}
         * unit pixel if undefined force fit height
         */
        height: number;
        /**
         * Plugins
         * @type {array}
         */
        plugins: object[];
        /**
         * FontFamily
         * @type {string}
         */
        fontFamily: string;
        /**
         * default node shape
         * @type {string|undefined}
         */
        nodeDefaultShape: string;
        /**
         * default edge shape
         * @type {string|undefined}
         */
        edgeDefaultShape: string;
        /**
         * default group shape
         * @type {string|undefined}
         */
        groupDefaultShape: string;
        /**
         * default edge node intersect box
         * @type {string}
         */
        defaultIntersectBox: string;
        /**
         * renderer canvas or svg
         * @type {string}
         */
        renderer: "canvas" | "svg";
        _type: string;
        _controllers: {};
        _timers: {};
        _dataMap: {};
        _itemMap: Graph.ItemMap;
        _freezMap: {};
        _data: Model.Data;
        _delayRunObj: {};
    };
    constructor(inputCfg: Graph.Config);
    _init(): void;
    initEvent(): void;
    _executeLayout(processor: any, nodes: any, edges: any, groups: any): void;
    _pluginInit(): void;
    _initPlugin(plugin: any): void;
    _getTimer(name: any): any;
    _setTimer(name: any, value: any): void;
    _getController(name: any): any;
    _initContainer(): void;
    _initCanvas(): void;
    _initData(): void;
    _refresh(): void;
    getKeyboardEventWrapper(): any;
    getMouseEventWrapper(): this["_cfg"]["_canvas"]["_cfg"]["el"];
    /**
     * @param  {object} plugin - plugin instance
     */
    addPlugin(plugin: any): void;
    /**
     * @return  {domobject} graphcontainer
     */
    getGraphContainer(): this["_cfg"]["_graphContainer"];
    _sortGroup(models: any): void;
    /**
     * @param  {string} type item type
     * @param  {array} models models
     */
    _addItems(type: Item_.Type, models: Model.Base[]): void;
    /**
     * @param  {array} items remove items
     */
    _removeItems(items: any): void;
    /**
     * @param  {array} items - items
     * @param  {array} models - update models
     */
    _updateItems(items: any, models: any): void;
    _getShowEdge(edge: any): any;
    _addDatas(type: any, models: any): void;
    _drawInner(): void;
    _clearInner(): void;
    /**
     * @param  {function} callback - callback
     * @return {Graph} this
     */
    preventAnimate(callback: any): this;
    /**
     * @param  {string} type item type
     * @param  {object} model data model
     * @return {object} shapeObj
     */
    getShapeObj(type: string, model: Model.Base): any;
    /**
     * @return {object} source data
     */
    getSource(): this["_cfg"]["_sourceData"];
    /**
     * @param  {object} data source data
     * @return {object} plain data
     */
    parseSource(data: any): any;
    /**
     * @return {G.Canvas} canvas
     */
    getCanvas(): this["_cfg"]["_canvas"];
    /**
     * @return {G.Group} rootGroup
     */
    getRootGroup(): this["_cfg"]["_rootGroup"];
    /**
     * @return {G.Group} itemGroup
     */
    getItemGroup(): this["_cfg"]["_itemGroup"];
    /**
     * @param  {object} data source data
     * @return {Graph} this
     */
    source(data: Model.Data): void;
    /**
     * @return {Graph} this
     */
    render(): this;
    /**
     * @return {Graph} - this
     */
    reRender(): this;
    /**
     * set canvas captrue
     * @param  {boolean} bool boolean
     */
    setCapture(bool: boolean): void;
    /**
     * @return {Graph} - this
     */
    destroy(): this;
    /**
     * @return {object} data
     */
    save(): Model.Data;
    /**
     * @param {string} type item type
     * @param {object} model data model
     * @return {Item} target item
     */
    add(type: Item_.Type, model: Model.Base): Item_.Base;
    /**
     * @param {string|Item} item - target item
     * @return {Graph} this
     */
    remove(item: G.Common.ID | Item_.Base): this;
    /**
     * @param {Item} item target item
     * @param {object} model data model
     * @return {Graph} this
     */
    simpleUpdate(item: Item_.Base, model: Partial<Model.Base>): this;
    /**
     * @param {string|Item|undefined} item target item
     * @param {object} model data model
     * @return {Graph} this
     */
    update(item: G.Common.ID | Item_.Base, model: Partial<Model.Base>): this;
    /**
     * change data
     * @param {object} data - source data
     * @return {Graph} this
     */
    read(data: Model.Data): this;
    /**
     * @return {Graph} this
     */
    clear(): this;
    /**
     * hide item
     * @param  {number} item  input item
     * @return {object} this
     */
    hide(item: Item_.Base): this;
    /**
     * show item
     * @param  {number} item  input item
     * @return {object} this
     */
    show(item: Item_.Base): this;
    /**
     * @return {Graph} this
     */
    getWidth(): number;
    /**
     * @return {Graph} this
     */
    getHeight(): number;
    /**
     * change canvas size
     * @param  {number} width  input width
     * @param  {number} height input height
     * @return {object} this
     */
    changeSize(width: number, height: number): this;
    /**
     * item to front
     * @param  {object} item  item
     */
    toFront(item: Item_.Base): void;
    /**
     * item to back
     * @param  {object} item  item
     */
    toBack(item: Item_.Base): void;
    /**
     * set cantainer css
     * @param  {object} style container dom css
     */
    css(style: CSS.Properties<string | number>): void;
    /**
     * save graph image
     * @param {object} options - save options
     * @return  {object} canvas dom
     */
    saveImage(options: any): any;
}
export = Graph;
import Model from './model';
import Item_ from './items';
import Event from './event';
import { GraphEx, EventsEx } from './augments';
import * as CSS from 'csstype';
interface Graph extends Graph.MixedAugmentType, GraphEx {
    _cfg: Required<Graph.Config> & {
        id: string;
        _canvas: G.Canvas;
        _rootGroup: G.Group;
        _itemGroup: G.Group;
        _sourceData: Model.Data;
        _containerDOM: HTMLElement;
        _graphContainer: ReturnType<typeof Util['createDOM']>;
    };
    _events: Event.Events<'beforeinit' | 'afterinit' | 'beforesource' | 'aftersource' | 'beforerender' | 'afterrender' | 'beforedrawinner' | 'afterdrawinner' | 'beforedestroy' | 'afterdestroy' | 'beforeclear' | 'afterclear' | 'beforechangesize' | 'afterchangesize' | 'beforelayout' | 'afterlayout' | 'beforefilter' | 'afterfilter' | 'beforeupdatenodeposition' | 'afterupdatenodeposition', []> & Event.Events<'beforehide' | 'afterhide' | 'beforeshow' | 'aftershow', [{
        item: Item_.Base;
        affectedItemIds: G.Common.ID[];
    }]> & Event.Events<'beforechange' | 'afterchange', [Graph.ChangeEventObject]> & Event.Events<'beforeitemdraw' | 'afteritemdraw' | 'beforeitemhide' | 'afteritemhide' | 'beforeitemshow' | 'afteritemshow' | 'beforeitemdestroy' | 'afteritemdestroy', [{
        item: Item_.Base;
    }]> & Event.Events<'beforeviewportchange' | 'afterviewportchange' | 'beforezoom' | 'afterzoom', [{
        updateMatrix: G.Common.Matrix;
        originMatrix: G.Common.Matrix;
    }]> & Event.Events<Event.MouseEvent, [Event.MouseEventObject]> & Event.Events<Event.KeyboardEvent, [Event.KeyboardEventObject]> & EventsEx;
    behaviourOn: Event['on'];
}
declare namespace Graph {
    type MixedAugmentType = GUtil.MixArray<typeof Mixins, 'AUGMENT'>;
    type MixedCfgType = GUtil.MixArray<typeof Mixins, 'CFG'>;
    type DefaultCfgType = ReturnType<Graph['getDefaultCfg']>;
    type Config = Partial<MixedCfgType & DefaultCfgType>;
    type ChangeEventObject = {
        action: 'add';
        item?: Item_.Base;
        model: Model.Base;
        affectedItemIds: G.Common.ID[];
    } | {
        action: 'remove';
        item: Item_.Base;
        affectedItemIds: G.Common.ID[];
    } | {
        action: 'update';
        item: Item_.Base;
        originModel: Model.Base;
        updateModel: Model.Base;
        affectedItemIds: G.Common.ID[];
    } | {
        action: 'changeData';
        data: Model.Data;
    } | {
        action: string;
    };
    type ItemMap = {
        _nodes: Item_.Node[];
        _edges: Item_.Edge[];
        _groups: Item_.Group[];
        _guides: Item_.Guide[];
    } & {
        [id: string]: Item_.Base;
        [id: number]: Item_.Base;
    };
}

/// <reference types="@antv/util" />
/**
 * @fileOverview item
 * @author huangtonger@aliyun.com
 */
import G from '@antv/g/lib';
import G6 from '..';
import Graph from '../graph';
declare class Item {
    constructor(cfg: any);
    _init(): void;
    _mapping(): void;
    _initGroup(): void;
    _calculateBBox(): G.Common.BBox;
    getLabel(): any;
    getGraph(): Graph;
    _setShapeObj(): void;
    _afterDraw(): void;
    _cacheModel(): void;
    _setGId(): void;
    _beforeDraw(): void;
    _shouldDraw(): boolean;
    _getDiff(): false | any[];
    _drawInner(): void;
    deepEach(this: Item, callback: Function, getParent?: (parent: Item) => Item[]): void;
    getShapeObj(): any;
    updateCollapsedParent(): void;
    isVisible(): boolean;
    hide(): void;
    show(): void;
    draw(): void;
    forceUpdate(): void;
    getCenter(): {
        x: number;
        y: number;
    };
    getBBox(): G.Common.BBox;
    layoutUpdate(): void;
    update(): void;
    getModel<T extends {
        model: {};
    }>(this: T): T['model'];
    getKeyShape(): G.Shape;
    getGraphicGroup(): Item.GraphicGroup;
    getHierarchy(): any;
    getParent(): G6.Item.Base;
    getAllParents(): any[];
    getAllChildren(): Item[];
    getChildren(): G6.Item.Base[];
    toFront(): void;
    toBack(): void;
    destroy(): void;
}
export = Item;
import { ItemEx } from '../augments';
interface Item<T extends Item.Type = Item.Type> extends ItemEx {
    type: T;
    id: G.Common.ID;
    model: G6.Model.Base;
    group: Item.GraphicGroup;
    graph: G6.Graph;
    destroyed: boolean;
    keyShape: G.Shape;
    isItem: true;
    isNode?: boolean;
    isEdge?: boolean;
    isGroup?: boolean;
    isGuide?: boolean;
    visible: boolean;
    zIndex: number;
    bbox?: G.Common.BBox;
    /** The followings are from 'Graph._addItems' */
    mapper: any;
    itemMap: Graph.ItemMap;
}
declare namespace Item {
    type Type = 'node' | 'edge' | 'group' | 'guide';
    interface GraphicGroup extends G.Group {
        item: Item;
        isItemContainer: boolean;
        id: G.Common.ID;
        itemType: string;
        model: G6.Model.Base;
    }
}

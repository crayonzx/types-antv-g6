/// <reference types="@antv/util" />
/**
 * @fileOverview edge item
 * @author huangtonger@aliyun.com
 */
import G from '@antv/g/lib';
import Model from '../model';
import Node from './node';
import Item = require('./item');
declare class Edge extends Item<'edge'> {
    model: Model.Edge;
    isEdge: true;
    target: Node | G.Common.Point;
    source: Node | G.Common.Point;
    constructor(cfg: any);
    _init(): void;
    _beforeDraw(): void;
    _afterDraw(): void;
    _addArrow(): void;
    _drawArrow({ path, shorten, tangent, ratio, style }: {
        path: any;
        shorten: any;
        tangent: any;
        ratio: any;
        style: any;
    }, type: any): void;
    _getControlPoints(): G.Common.Point[];
    _shouldDraw(): any;
    _getPoint(point: any): {
        x: any;
        y: any;
    };
    linkedItemVisible(): any;
    getSource(): Node | G.Common.Point;
    getTarget(): Node | G.Common.Point;
    getPoints(): G.Common.Point[];
    destroy(): void;
}
export = Edge;

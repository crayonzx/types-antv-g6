/// <reference types="@antv/util" />
/**
 * @fileOverview group shapes
 * @author huangtonger@aliyun.com
 */
import G from '@antv/g/lib';
import GShape from '@antv/g/lib/core/shape';
import Group from '../../item/group';
declare const _default: {
    draw(item: Group): GShape;
    defaultWidth: number;
    defaultHeight: number;
    getLabel(item: Group): string;
    drawLabel(item: Group, x: number, y: number): void;
    drawKeyShape(item: Group, box: G.Common.BBox): GShape;
    getChildrenBBox(item: Group): G.Common.BBox;
    drawExpanded(item: Group): GShape;
    drawCollapsed(item: Group): GShape;
    anchor: {
        intersectBox: string;
    };
} & Pick<import("../interfaces").Group, never>;
export = _default;

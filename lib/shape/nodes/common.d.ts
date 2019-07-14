/// <reference types="@antv/util" />
/**
 * @fileOverview common node shape
 * @author huangtonger@aliyun.com
 */
import GShape from '@antv/g/lib/core/shape';
import Node from '../../item/node';
declare const _default: {
    draw(item: Node<"node">): GShape;
    getSize(item: Node<"node">): number[];
    getStyle(item: Node<"node">): {
        lineWidth: number;
    } & GCommon.Style;
    getLabel(item: Node<"node">): string;
    drawKeyShape(item: Node<"node">): GShape;
    drawLabel(item: Node<"node">): GShape;
    getPath(item: Node<"node">): GCommon.SVGPath.Cmd[];
} & Pick<import("../interfaces").Node, "anchor" | "getSelectedStyle">;
export = _default;

/**
 * @fileOverview html node shape
 * @author huangtonger@aliyun.com
 */
import Node from '../../item/node';
import Rect from '@antv/g/lib/shapes/rect';
declare const _default: {
    getHtml(item: Node<"node">): any;
    cssSize: boolean;
    draw(item: Node<"node">): Rect;
} & Pick<import("../interfaces").Node, "anchor" | "getStyle" | "getSelectedStyle">;
export = _default;

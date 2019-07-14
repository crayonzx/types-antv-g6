/// <reference types="@antv/util" />
/**
 * @fileOverview edge shapes
 * @author huangtonger@aliyun.com
 */
import G from '@antv/g/lib';
import Path from '@antv/g/lib/shapes/path';
import Edge from '../../item/edge';
declare const _default: {
    draw(item: Edge): Path;
    drawKeyShape(item: Edge): Path;
    getStyle(item: Edge): G.Common.Style;
    getPath(item: Edge): G.Common.SVGPath.Cmd[];
    getLabel(item: Edge): string;
    getDefaultLabelRectStyle(): G.Common.Style;
    getDefaultLabelRectPadding(): number[];
    drawLabel(item: Edge, keyShape: Path): void;
    startArrow: {
        tangent(item: Edge): any;
        ratio(): 0;
        path(item: Edge): G.Common.SVGPath.Cmd[];
        shorten(item: Edge): number;
        style(item: Edge): G.Common.Style;
    };
    endArrow: {
        tangent(item: Edge): any;
        ratio(): 1;
        path(item: Edge): G.Common.SVGPath.Cmd[];
        shorten(item: Edge): number;
        style(item: Edge): G.Common.Style;
    };
} & Pick<import("../interfaces").Edge, "getSelectedStyle" | "afterDraw" | "getPathByPoints">;
export = _default;

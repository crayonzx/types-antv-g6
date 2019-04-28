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
    getPath(item: Edge): (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    getLabel(item: Edge): string;
    getDefaultLabelRectStyle(): G.Common.Style;
    getDefaultLabelRectPadding(): number[];
    drawLabel(item: Edge, keyShape: Path): void;
    startArrow: {
        tangent(item: Edge): any;
        ratio(): 0;
        path(item: Edge): (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        shorten(item: Edge): number;
        style(item: Edge): G.Common.Style;
    };
    endArrow: {
        tangent(item: Edge): any;
        ratio(): 1;
        path(item: Edge): (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        shorten(item: Edge): number;
        style(item: Edge): G.Common.Style;
    };
} & Pick<import("../interfaces").Edge, "getSelectedStyle" | "afterDraw">;
export = _default;

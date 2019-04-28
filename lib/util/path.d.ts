/**
 * @fileOverview path util
 * @author huangtonger@aliyun.com
 */
/// <reference types="@antv/util" />
import G = require('@antv/g/lib');
declare const PathUtil1: {
    catmullRomToBezier: (crp: number[], z: boolean) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    fillPath: (source: any, target: any) => any;
    fillPathByDiff: (source: any, target: any) => any;
    formatPath: (fromPath: any, toPath: any) => any;
    intersection: (path1: G.Common.SVGPathOrStr, path2: G.Common.SVGPathOrStr) => G.Common.Point[];
    parsePathArray: (path: []) => string;
    parsePathString: (pathString: G.Common.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    pathToAbsolute: (pathArray: G.Common.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    pathTocurve: (path: G.Common.SVGPathOrStr, path2?: G.Common.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    rectPath: (x: number, y: number, w: number, h: number, r?: number) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    getRectPath: (x: number, y: number, w: number, h: number, r?: number) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    pointsToPolygon: (points: any) => any[][];
    getEllipsePath: (x: any, y: any, rx: any, ry: any) => any[][];
};
export = PathUtil1;

/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */
/// <reference types="@antv/util" />
/// <reference types="lodash" />
declare const Util1: {
    toFront: (element: any) => void;
    toBack: (element: any) => void;
    getBBox: (element: any, root: any) => GCommon.BBox;
    createDOM: (str: string | HTMLElement, css?: Partial<CSSStyleDeclaration>) => HTMLElement & {
        bbox: DOMRect | ClientRect;
        hide: () => HTMLElement & any;
        show: () => HTMLElement & any;
        css: (modifyCSS: Partial<CSSStyleDeclaration>) => HTMLElement & any;
        width: () => number;
        height: () => number;
        destroy: () => void;
        on: {
            <K extends "waiting" | "error" | "abort" | "cancel" | "progress" | "ended" | "change" | "input" | "select" | "fullscreenchange" | "fullscreenerror" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | "blur" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "gotpointercapture" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "lostpointercapture" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "selectionchange" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "transitioncancel" | "transitionend" | "transitionrun" | "transitionstart" | "volumechange" | "wheel" | "copy" | "cut" | "paste">(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
            (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        };
        off: {
            <K extends "waiting" | "error" | "abort" | "cancel" | "progress" | "ended" | "change" | "input" | "select" | "fullscreenchange" | "fullscreenerror" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | "blur" | "canplay" | "canplaythrough" | "click" | "close" | "contextmenu" | "cuechange" | "dblclick" | "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "gotpointercapture" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadend" | "loadstart" | "lostpointercapture" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "pause" | "play" | "playing" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "ratechange" | "reset" | "resize" | "scroll" | "securitypolicyviolation" | "seeked" | "seeking" | "selectionchange" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "toggle" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "transitioncancel" | "transitionend" | "transitionrun" | "transitionstart" | "volumechange" | "wheel" | "copy" | "cut" | "paste">(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
            (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        };
    };
    initDOMContainer: (container: string | HTMLElement, className: string) => HTMLElement;
    getRectPath: (x: number, y: number, w: number, h: number, r?: number) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    pointsToPolygon: (points: any) => any[][];
    getEllipsePath: (x: any, y: any, rx: any, ry: any) => any[][];
    isNode: (item: any) => boolean;
    isEdge: (item: any) => boolean;
    isGroup: (item: any) => boolean;
    getAutoZoomMatrix: (box1: any, box2: any, padding: any, limitRatio: any) => number[];
    getNineBoxPosition: (position: any, containerBox: any, width: any, height: any, padding: any) => GCommon.Point;
    getTotalBBox: (boxes: any) => {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        width: number;
        height: number;
    };
    getChildrenBBox: (children: any) => GCommon.BBox;
} & {
    toString: (() => string) & ((value: any) => string);
    indexOf: (arr: any, obj: any) => any;
    omit: <T extends object, K extends keyof T>(object: T, array: K[]) => Pick<T, Exclude<keyof T, K>>;
    map: (arr: any, func: (...agrs: any[]) => any) => any;
    filter: (arr: any, func: (...args: any[]) => any) => any[];
    group: (data: any, condition: any) => any[];
    clone: <T>(obj: T) => T;
    remove: (arr: any, predicate: any) => any[];
    transform: (m: any, ts: any) => any;
    throttle: <T extends (...args: any[]) => any>(func: T, wait?: number, options?: import("lodash").ThrottleSettings) => T & import("lodash").Cancelable;
    debounce: <T extends (...args: any[]) => any>(func: T, wait?: number, options?: import("lodash").DebounceSettings) => T & import("lodash").Cancelable;
    traverseTree: <T>(parent: T, callback: (child: T, parent?: T, index?: number) => void, getChild: (p: T) => T[], runSelf?: boolean) => void;
    toAllPadding: (padding: number | number[]) => number[];
    guid: () => string;
    mix: import("./interfaces").default.Mix;
    mixin: (c: any, mixins: any) => void;
    DOMUtil: {
        addEventListener: (target: object, eventType: string, callback: object) => object;
        createDom: <K extends "" | "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" = "", T extends string = string>(domStr: HTMLElement | T) => K extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[K] : T extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[T] : HTMLElement;
        getBoundingClientRect: (node: any, defaultValue?: any) => any;
        getHeight: (el: HTMLElement, defaultValue?: number) => number;
        getOuterHeight: (el: HTMLElement, defaultValue?: number) => number;
        getOuterWidth: (el: HTMLElement, defaultValue?: number) => number;
        getRatio: () => number;
        getStyle: (dom: any, name: string, defaultValue?: any) => string;
        getWidth: (el: HTMLElement, defaultValue?: number) => number;
        modifyCSS: (dom: any, css: any) => any;
        requestAnimationFrame: (fn: any) => any;
    };
    DomUtil: {
        addEventListener: (target: object, eventType: string, callback: object) => object;
        createDom: <K extends "" | "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" = "", T extends string = string>(domStr: HTMLElement | T) => K extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[K] : T extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[T] : HTMLElement;
        getBoundingClientRect: (node: any, defaultValue?: any) => any;
        getHeight: (el: HTMLElement, defaultValue?: number) => number;
        getOuterHeight: (el: HTMLElement, defaultValue?: number) => number;
        getOuterWidth: (el: HTMLElement, defaultValue?: number) => number;
        getRatio: () => number;
        getStyle: (dom: any, name: string, defaultValue?: any) => string;
        getWidth: (el: HTMLElement, defaultValue?: number) => number;
        modifyCSS: (dom: any, css: any) => any;
        requestAnimationFrame: (fn: any) => any;
    };
    domUtil: {
        addEventListener: (target: object, eventType: string, callback: object) => object;
        createDom: <K extends "" | "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" = "", T extends string = string>(domStr: HTMLElement | T) => K extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[K] : T extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[T] : HTMLElement;
        getBoundingClientRect: (node: any, defaultValue?: any) => any;
        getHeight: (el: HTMLElement, defaultValue?: number) => number;
        getOuterHeight: (el: HTMLElement, defaultValue?: number) => number;
        getOuterWidth: (el: HTMLElement, defaultValue?: number) => number;
        getRatio: () => number;
        getStyle: (dom: any, name: string, defaultValue?: any) => string;
        getWidth: (el: HTMLElement, defaultValue?: number) => number;
        modifyCSS: (dom: any, css: any) => any;
        requestAnimationFrame: (fn: any) => any;
    };
    MatrixUtil: {
        mat3: any;
        vec2: any;
        vec3: any;
        transform: (m: any, ts: any) => any;
    };
    matrixUtil: {
        mat3: any;
        vec2: any;
        vec3: any;
        transform: (m: any, ts: any) => any;
    };
    PathUtil: {
        catmullRom2Bezier: (crp: number[], z: boolean) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        catmullRomToBezier: (crp: number[], z: boolean) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        fillPath: (source: any, target: any) => any;
        fillPathByDiff: (source: any, target: any) => any;
        formatPath: (fromPath: any, toPath: any) => any;
        intersection: {
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr): GCommon.Point[];
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr, justCount: true): number;
        };
        pathIntersection: {
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr): GCommon.Point[];
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr, justCount: true): number;
        };
        parsePathArray: (path: (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[]) => string;
        parsePathString: (pathString: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        pathToAbsolute: (pathArray: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        path2absolute: (pathArray: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        pathTocurve: (path: GCommon.SVGPathOrStr, path2?: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        path2curve: (path: GCommon.SVGPathOrStr, path2?: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        rectPath: (x: number, y: number, w: number, h: number, r?: number) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    };
    pathUtil: {
        catmullRom2Bezier: (crp: number[], z: boolean) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        catmullRomToBezier: (crp: number[], z: boolean) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        fillPath: (source: any, target: any) => any;
        fillPathByDiff: (source: any, target: any) => any;
        formatPath: (fromPath: any, toPath: any) => any;
        intersection: {
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr): GCommon.Point[];
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr, justCount: true): number;
        };
        pathIntersection: {
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr): GCommon.Point[];
            (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr, justCount: true): number;
        };
        parsePathArray: (path: (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[]) => string;
        parsePathString: (pathString: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        pathToAbsolute: (pathArray: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        path2absolute: (pathArray: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        pathTocurve: (path: GCommon.SVGPathOrStr, path2?: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        path2curve: (path: GCommon.SVGPathOrStr, path2?: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
        rectPath: (x: number, y: number, w: number, h: number, r?: number) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    };
    arrayUtil: {
        contains: (arr: any, value: any) => boolean;
        difference: (arr: any[], ...args: any[]) => any[];
        find: (arr: any, predicate: any) => any;
        firstValue: (data: any, name: any) => any;
        flatten: (arr: any[]) => any[];
        flattenDeep: (arr: any[], ...args: any[]) => any[];
        getRange: (values: any) => {
            min: any;
            max: any;
        };
        merge: (dataArray: any) => any[];
        pull: (arr: any, ...args: any[]) => any;
        pullAt: (arr: any, indexes: any) => any;
        reduce: (arr: any, fn: any, init: any) => any;
        remove: (arr: any, predicate: any) => any[];
        sortBy: (arr: any, key: any) => any;
        union: (...args: any[]) => any[];
        uniq: (arr: any) => any[];
        valuesOfKey: (data: any, name: any) => any[];
    };
    eventUtil: {
        getWrapBehavior: (obj: any, action: string) => Function;
        wrapBehavior: (obj: any, action: string) => Function;
    };
    formatUtil: {
        number2color: (num: any) => any;
        numberToColor: (num: any) => any;
        parsePath: (path: any) => any;
        parseRadius: (radius: any) => {
            r1: number;
            r2: number;
            r3: number;
            r4: number;
        };
    };
    mathUtil: {
        clamp: (a: number, min: number, max: number) => number;
        fixedBase: (v: any, base: any) => number;
        isDecimal: (num: any) => boolean;
        isEven: (num: any) => boolean;
        isInteger: (number: number) => boolean;
        isNegative: (num: any) => boolean;
        isNumberEqual: (a: number, b: number) => boolean;
        isOdd: (num: any) => boolean;
        isPositive: (num: any) => boolean;
        maxBy: (arr: any[], fn?: string | number | Function) => any;
        minBy: (arr: any[], fn?: string | number | Function) => any;
        mod: (n: number, m: number) => number;
        snapEqual: (a: number, b: number) => boolean;
        toDegree: (radian: number) => number;
        toInt: typeof parseInt;
        toInteger: typeof parseInt;
        toRadian: (degree: number) => number;
    };
    objectUtil: {
        forIn: {
            <T>(elements: T[], func: (value: T, index: number) => boolean | void): void;
            <T extends object>(elements: T, func: <K extends keyof T>(value: T[K], key: K) => boolean | void): void;
        };
        has: (obj: any, key: any) => any;
        hasKey: (obj: any, key: any) => any;
        hasValue: (obj: any, value: any) => boolean;
        keys: (obj: any) => any[];
        isMatch: (obj: any, attrs: any) => boolean;
        values: (obj: any) => any;
    };
    stringUtil: {
        lc: (str: any) => string;
        lowerCase: (str: any) => string;
        lowerFirst: (value: any) => string;
        substitute: (str: any, o: any) => string;
        uc: (str: any) => string;
        upperCase: (str: any) => string;
        upperFirst: (value: string) => string;
    };
    typeUtil: {
        getType: (value: any) => any;
        isArray: <T = any>(value: any) => value is T[];
        isArrayLike: (value: any) => value is {
            length: number;
        };
        isBoolean: (value: any) => value is boolean;
        isFunction: (value: any) => value is (...args: any[]) => any;
        isNil: (value: any) => value is null;
        isNull: (value: any) => value is null;
        isNumber: (value: any) => value is number;
        isObject: <T extends object = {
            [x: string]: any;
        }>(value: any) => value is T;
        isObjectLike: (value: any) => boolean;
        isPlainObject: (value: any) => boolean;
        isPrototype: (value: any) => boolean;
        isType: (value: any, type: any) => boolean;
        isUndefined: (value: any) => value is undefined;
        isString: (value: any) => value is string;
        isRegExp: (str: any) => str is RegExp;
        isDate: (value: any) => value is Date;
        isArguments: (value: any) => boolean;
        isError: (value: any) => value is Error;
    };
    augment: <T extends GUtil.TwoFunctionTypes, U extends any[]>(dist: T, ...src: U) => (new (...args: GUtil.ArgsType<GUtil.ToClassType<T>>) => GUtil._Overwrite<GUtil.ProtoType<GUtil.ToClassType<T>>, GUtil.UnionToIntersection<GUtil.ProtoType<U extends (infer V)[] ? V : never>>>) & { [P in keyof GUtil.ToClassType<T>]: GUtil.ToClassType<T>[P]; };
    deepMix: <T, U extends any[]>(dist: T, ...src: U) => T & GUtil.MixArray<U, undefined>;
    each: {
        <T>(elements: T[], func: (value: T, index: number) => boolean | void): void;
        <T extends object>(elements: T, func: <K extends keyof T>(value: T[K], key: K) => boolean | void): void;
    };
    extend: <T extends GUtil.TwoFunctionTypes, U extends GUtil.NewFunctionType, V, W>(subclass: T, superclass: U, overrides?: V, staticOverrides?: W) => { [P in keyof GUtil.ToClassType<T>]: GUtil.ToClassType<T>[P]; } & {
        new (...args: GUtil.ArgsType<GUtil.ToClassType<T>>): GUtil._Overwrite<GUtil._Overwrite<GUtil.NewReturnType<U>, GUtil.NewReturnType<GUtil.ToClassType<T>>>, V>;
        superclass: U;
    } & { [P in keyof (W extends null ? {} : W)]: (W extends null ? {} : W)[P]; };
    groupBy: (data: any, condition: any) => any;
    groupToMap: (data: any, condition: any) => any;
    isEmpty: (value: any) => boolean;
    isEqual: (value: any, other: any) => boolean;
    isEqualWith: (value: any, other: any, fn?: (...args: any[]) => any) => boolean;
    pick: <T extends object, K extends keyof T>(object: T, keys: K[]) => Pick<T, K>;
    toArray: (value: any) => any[];
    uniqueId: (prefix?: string) => string;
    addEventListener: (target: object, eventType: string, callback: object) => object;
    createDom: <K extends "" | "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" = "", T extends string = string>(domStr: HTMLElement | T) => K extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[K] : T extends "object" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" ? HTMLElementTagNameMap[T] : HTMLElement;
    getBoundingClientRect: (node: any, defaultValue?: any) => any;
    getHeight: (el: HTMLElement, defaultValue?: number) => number;
    getOuterHeight: (el: HTMLElement, defaultValue?: number) => number;
    getOuterWidth: (el: HTMLElement, defaultValue?: number) => number;
    getRatio: () => number;
    getStyle: (dom: any, name: string, defaultValue?: any) => string;
    getWidth: (el: HTMLElement, defaultValue?: number) => number;
    modifyCSS: (dom: any, css: any) => any;
    requestAnimationFrame: (fn: any) => any;
    contains: (arr: any, value: any) => boolean;
    difference: (arr: any[], ...args: any[]) => any[];
    find: (arr: any, predicate: any) => any;
    firstValue: (data: any, name: any) => any;
    flatten: (arr: any[]) => any[];
    flattenDeep: (arr: any[], ...args: any[]) => any[];
    getRange: (values: any) => {
        min: any;
        max: any;
    };
    merge: (dataArray: any) => any[];
    pull: (arr: any, ...args: any[]) => any;
    pullAt: (arr: any, indexes: any) => any;
    reduce: (arr: any, fn: any, init: any) => any;
    sortBy: (arr: any, key: any) => any;
    union: (...args: any[]) => any[];
    uniq: (arr: any) => any[];
    valuesOfKey: (data: any, name: any) => any[];
    getWrapBehavior: (obj: any, action: string) => Function;
    wrapBehavior: (obj: any, action: string) => Function;
    number2color: (num: any) => any;
    numberToColor: (num: any) => any;
    parsePath: (path: any) => any;
    parseRadius: (radius: any) => {
        r1: number;
        r2: number;
        r3: number;
        r4: number;
    };
    clamp: (a: number, min: number, max: number) => number;
    fixedBase: (v: any, base: any) => number;
    isDecimal: (num: any) => boolean;
    isEven: (num: any) => boolean;
    isInteger: (number: number) => boolean;
    isNegative: (num: any) => boolean;
    isNumberEqual: (a: number, b: number) => boolean;
    isOdd: (num: any) => boolean;
    isPositive: (num: any) => boolean;
    maxBy: (arr: any[], fn?: string | number | Function) => any;
    minBy: (arr: any[], fn?: string | number | Function) => any;
    mod: (n: number, m: number) => number;
    snapEqual: (a: number, b: number) => boolean;
    toDegree: (radian: number) => number;
    toInt: typeof parseInt;
    toInteger: typeof parseInt;
    toRadian: (degree: number) => number;
    mat3: any;
    vec2: any;
    vec3: any;
    forIn: {
        <T>(elements: T[], func: (value: T, index: number) => boolean | void): void;
        <T extends object>(elements: T, func: <K extends keyof T>(value: T[K], key: K) => boolean | void): void;
    };
    has: (obj: any, key: any) => any;
    hasKey: (obj: any, key: any) => any;
    hasValue: (obj: any, value: any) => boolean;
    keys: (obj: any) => any[];
    isMatch: (obj: any, attrs: any) => boolean;
    values: (obj: any) => any;
    catmullRom2Bezier: (crp: number[], z: boolean) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    catmullRomToBezier: (crp: number[], z: boolean) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    fillPath: (source: any, target: any) => any;
    fillPathByDiff: (source: any, target: any) => any;
    formatPath: (fromPath: any, toPath: any) => any;
    intersection: {
        (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr): GCommon.Point[];
        (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr, justCount: true): number;
    };
    pathIntersection: {
        (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr): GCommon.Point[];
        (path1: GCommon.SVGPathOrStr, path2: GCommon.SVGPathOrStr, justCount: true): number;
    };
    parsePathArray: (path: (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[]) => string;
    parsePathString: (pathString: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    pathToAbsolute: (pathArray: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    path2absolute: (pathArray: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    pathTocurve: (path: GCommon.SVGPathOrStr, path2?: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    path2curve: (path: GCommon.SVGPathOrStr, path2?: GCommon.SVGPathOrStr) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    rectPath: (x: number, y: number, w: number, h: number, r?: number) => (["M" | "m", number, number] | ["L" | "l", number, number] | ["H" | "h", number] | ["V" | "v", number] | ["C" | "c", number, number, number, number, number, number] | ["s" | "S", number, number, number, number] | ["q" | "Q", number, number, number, number] | ["T" | "t", number, number] | ["a" | "A", number, number, number, number, number, number, number] | ["Z" | "z"])[];
    lc: (str: any) => string;
    lowerCase: (str: any) => string;
    lowerFirst: (value: any) => string;
    substitute: (str: any, o: any) => string;
    uc: (str: any) => string;
    upperCase: (str: any) => string;
    upperFirst: (value: string) => string;
    getType: (value: any) => any;
    isArray: <T = any>(value: any) => value is T[];
    isArrayLike: (value: any) => value is {
        length: number;
    };
    isBoolean: (value: any) => value is boolean;
    isFunction: (value: any) => value is (...args: any[]) => any;
    isNil: (value: any) => value is null;
    isNull: (value: any) => value is null;
    isNumber: (value: any) => value is number;
    isObject: <T extends object = {
        [x: string]: any;
    }>(value: any) => value is T;
    isObjectLike: (value: any) => boolean;
    isPlainObject: (value: any) => boolean;
    isPrototype: (value: any) => boolean;
    isType: (value: any, type: any) => boolean;
    isUndefined: (value: any) => value is undefined;
    isString: (value: any) => value is string;
    isRegExp: (str: any) => str is RegExp;
    isDate: (value: any) => value is Date;
    isArguments: (value: any) => boolean;
    isError: (value: any) => value is Error;
    Array: {
        remove<T>(arr: T[], obj: T): void;
    };
    isBetween: (value: any, min: any, max: any) => boolean;
    getLineIntersect: (p0: any, p1: any, p2: any, p3: any) => any;
    getIntersectPointRect: (rect: any, point: any) => any;
    getIntersectPointCircle: (x: any, y: any, cx: any, cy: any, cr: any) => {
        x: any;
        y: any;
    };
    applyMatrix: (point: GCommon.Point, matrix: any, tag?: number) => {
        x: number;
        y: number;
    };
    invertMatrix: (point: any, matrix: any, tag?: number) => {
        x: any;
        y: any;
    };
    radixSort: (arr: any, callback: any) => any;
    getArcOfVectors: (vector1: any, vector2: any) => number;
};
export = Util1;

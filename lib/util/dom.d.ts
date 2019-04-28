/**
 * @fileOverview dom util
 * @author huangtonger@aliyun.com
 */
declare const DomUtil1: {
    addEventListener: (target: any, eventType: any, callback: any) => {
        remove(): void;
    };
    createDOM: (str: string | HTMLElement, css?: Partial<CSSStyleDeclaration>) => DomObject;
    initDOMContainer: (container: string | HTMLElement, className: string) => HTMLElement;
};
export = DomUtil1;
declare type DomObject = HTMLElement & {
    bbox: ReturnType<HTMLElement['getBoundingClientRect']>;
    hide: () => DomObject;
    show: () => DomObject;
    css: (modifyCSS: Partial<CSSStyleDeclaration>) => DomObject;
    width: () => number;
    height: () => number;
    destroy: () => void;
    on: HTMLElement['addEventListener'];
    off: HTMLElement['removeEventListener'];
};

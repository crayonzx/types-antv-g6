declare class Plugin {
    constructor(options: any);
    init(): void;
    onMouseEnter(ev: any): void;
    onMouseMove({ domX, domY }: {
        domX: any;
        domY: any;
    }): void;
    onMouseLeave(): void;
    _getTop(h0: number, h1: number, domY: number): string;
    _getLeft(w0: number, w1: number, domX: number): string;
    destroy(): void;
}
export = Plugin;

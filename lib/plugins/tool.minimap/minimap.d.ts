declare class Minimap {
    constructor(options: any);
    _assignDebounceRender(): void;
    bindGraph(graph: any): void;
    renderBackground(graph: any): void;
    _bindEvent(): void;
    _initMiniMap(): void;
    _initContainer(): void;
    renderViewPort(graph: any): void;
    destroy(): void;
}
export = Minimap;

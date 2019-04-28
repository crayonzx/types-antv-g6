declare class Menu {
    constructor(options: any);
    show(node: any, x: number, y: number): void;
    hide(): void;
    createMenu(): void;
    getNode(): any;
    showSource(node: any): void;
    showTargets(node: any): void;
    showAll(node: any): void;
    _showEdge(type: any, step: any, focusNodes: any): void;
    destroy(): void;
}
export = Menu;

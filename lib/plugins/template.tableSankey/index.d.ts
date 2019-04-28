declare class Plugin {
    constructor(options: any);
    _getFields(): any;
    _object2values(obj: any): any[];
    _getNodes(table: any, fields: any): any[];
    _getEdges(table: any, fields: any): any[];
    init(): void;
    _graphMapping(): void;
    _getGuides(): any[];
    _getData(): {
        nodes: any[];
        edges: any[];
        guides: any[];
    };
    _initSankeyProcessor(): void;
    change(cfg: any): void;
}
export = Plugin;

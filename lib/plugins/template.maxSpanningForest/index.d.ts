declare class Plugin {
    constructor(options: any);
    init(): void;
    setStyle(): void;
    activeItem(item: any): void;
    unActiveItem(item: any): void;
    setListener(): void;
}
export = Plugin;

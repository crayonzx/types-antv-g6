declare class Plugin {
    constructor(options: Plugin.Options);
    init(): void;
    destroy(): void;
}
export = Plugin;
declare namespace Plugin {
    interface Options {
        container: string;
        width?: number;
        height?: number;
    }
}

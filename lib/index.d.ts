/// <reference types="antv__g" />
/// <reference types="@antv/util" />
import Handler = require('./handler');
import G_ = require('@antv/g/lib');
declare namespace G6 {
    const Graph: typeof import('./graph');
    const Tree: typeof import('./tree');
    const Util: typeof import('./util/');
    const Layouts: typeof import('./layouts/');
    export import G = G_;
    const Plugins: typeof import('./plugins');
    const Components: {};
    const Global: typeof import('./global');
    const Shape: typeof import('./shape/');
    const registerNode: typeof Shape.registerNode;
    const registerEdge: typeof Shape.registerEdge;
    const registerGroup: typeof Shape.registerGroup;
    const registerGuide: typeof Shape.registerGuide;
    const registerBehaviour: typeof Handler.registerBehaviour;
    const version = "2.2.6";
    function track(track: any): void;
}
export = G6;
import Model_ from './model';
import Item_ from './items';
import Event_ from './event';
declare namespace G6 {
    type Graph = import('./graph');
    export import Item = Item_;
    export import Model = Model_;
    export import Event = Event_;
    export import GShape = G.Shapes;
    type GGroup = G.Group;
    export import Common = G.Common;
    namespace Graph {
        type Config = import('./graph').Config;
    }
    type PluginsMap = typeof G6.Plugins;
    type PluginNames = keyof PluginsMap;
    type Instance<T> = T extends new (...args: any[]) => any ? InstanceType<T> : T;
    type Plugins = {
        [x in PluginNames]: Instance<PluginsMap[x]>;
    };
}
declare module '@antv/g/lib/core/shape-ex' {
    interface ShapeEx {
        eventPreFix?: string;
        id?: G_.Common.ID;
        index?: number;
    }
}

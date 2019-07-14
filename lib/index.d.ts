/// <reference types="antv__g" />
/// <reference types="@antv/util" />
/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
import Shape_ = require('./shape/');
import Handler = require('./handler');
import Global_ = require('./global');
import version_ = require('./version');
import G_ = require('@antv/g/lib');
declare namespace G6 {
    export import Graph = Graph_;
    const Tree: typeof import('./tree');
    const Util: typeof import('./util/');
    const Layouts: typeof import('./layouts/');
    export import G = G_;
    const Plugins: typeof import('./plugins');
    const Components: {};
    const Global: typeof Global_;
    export import Shape = Shape_;
    const registerNode: Shape.registerNode;
    const registerEdge: Shape.registerEdge;
    const registerGroup: Shape.registerGroup;
    const registerGuide: Shape.registerGuide;
    const registerBehaviour: typeof Handler.registerBehaviour;
    const version: typeof version_;
    function track(track: any): void;
}
export = G6;
import Model_ from './model';
import Item_ from './items';
import Event_ from './event';
import Graph_ from './graph';
declare namespace G6 {
    export import Item = Item_;
    export import Model = Model_;
    export import Event = Event_;
    export import GShape = G_.Shape;
    export import Common = G_.Common;
    type GGroup = G_.Group;
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

/**
 * @fileOverview Handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */
import Graph from '../graph';
declare const Handler: {
    registerBehaviour(name: string, fun: (graph: Graph) => void, dependences?: string[]): void;
    resetMode(arr: any, graph: any): void;
};
export = Handler;

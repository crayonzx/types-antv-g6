/**
 * @fileOverview graph
 * @author huangtonger@aliyun.com
 */
declare const Layouts: {
    CompactBoxTree: typeof import('./tree/compact-box');
    Dendrogram: typeof import('./tree/dendrogram');
    IndentedTree: typeof import('./tree/indented');
    Mindmap: typeof import('./tree/mindmap');
    Base: typeof import('./base');
};
export = Layouts;

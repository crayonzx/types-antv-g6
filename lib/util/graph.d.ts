/**
 * @fileOverview graph util
 * @author huangtonger@aliyun.com
 */
declare const GraphUtil: {
    /**
     * determine whether a node
     * @param  {object}  item item
     * @return {boolean} bool
     */
    isNode(item: object): item is Item.Node;
    /**
     * determine whether a edge
     * @param  {object}  item item
     * @return {boolean} bool
     */
    isEdge(item: object): item is Item.Edge;
    /**
     * determine whether a group
     * @param  {object}  item item
     * @return {boolean} bool
     */
    isGroup(item: object): item is Item.Group;
};
export = GraphUtil;
declare type GraphUtil = typeof GraphUtil;
import Item from '../items';

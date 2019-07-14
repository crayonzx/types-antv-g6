/**
 * @fileOverview graph query
 * @author huangtonger@aliyun.com
 */
declare const Mixin: {
    AUGMENT: {
        find<T extends "base" | "group" | "node" | "edge" | "guide" = "base">(id: string): Item.Map<T>;
        /**
         * get nodes
         * @return {array} rst
         */
        getNodes(): Item.Node[];
        /**
         * get edges
         * @return {array} rst
         */
        getEdges(): Item.Edge[];
        /**
         * get groups
         * @return {array} rst
         */
        getGroups(): Item.Group[];
        /**
         * get guides
         * @return {array} rst
         */
        getGuides(): Item.Guide[];
        /**
         * get items
         * @return {array} rst
         */
        getItems(): Item.Base[];
        /**
         * get item by shape
         * @param  {G.Shape} shape - the shape from g
         * @return {string}  item.id - id of the item
         */
        getItemByShape(shape: {
            id: string;
        }): Item.Base;
        /**
         * get item item || itemId
         * @param  {object|string} item - the shape from g
         * @return {object}  item
         */
        getItem<T extends "base" | "group" | "node" | "edge" | "guide" = "base">(item: string | Item.Map<T>): Item.Map<T>;
    };
};
export = Mixin;
declare type Mixin = typeof Mixin;
import Item from '../items';

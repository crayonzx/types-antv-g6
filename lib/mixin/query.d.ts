import Item from '../items';
declare const _default: {
    AUGMENT: {
        find(id: string): Item.Base;
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
        getItemByShape(shape: any): Item.Base;
        /**
         * get item item || itemId
         * @param  {object|string} item - the shape from g
         * @return {object}  item
         */
        getItem(item: string | Item.Base): Item.Base;
    };
};
export = _default;

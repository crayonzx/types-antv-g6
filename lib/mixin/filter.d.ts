declare const _default: {
    INIT: string;
    CFG: {
        /**
         * filter or filters
         * @type {array|function|undefined}
         */
        filters: any[];
    };
    AUGMENT: {
        _initFilter(): void;
        /**
         * add an filter
         * @param {object} filter filter
         * @return {object} filter
         */
        addFilter(filter: any): any;
        /**
         * remove filter
         * @param {object} filter item filter
         */
        removeFilter(filter: any): void;
        /**
         * do filter
         */
        filter(): void;
        /**
         * get filter items
         * @return {array} filterItems
         */
        _getFilterItems(): any;
    };
};
export = _default;

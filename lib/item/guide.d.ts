/**
 * @fileOverview guide item
 * @author huangtonger@aliyun.com
 */
import Model from '../model';
import Item = require('./item');
declare class Guide extends Item<'guide'> {
    model: Model.Guide;
    isGuide: true;
    constructor(cfg: any);
}
export = Guide;

/**
 * @fileOverview mapper controller
 * @author huangtonger@aliyun.com
 */
import Base = require('./base');
declare class Controller extends Base {
    _init(): void;
    addChannels(inputChannels: any): void;
    /**
     * @param  {object} model origin model
     */
    mapping(model: any): void;
}
export = Controller;
import Model from '../model';
declare namespace Controller {
    type ChannalType = string | number | object | boolean | null | undefined | ((model: Model.Base) => any);
    interface Channels {
        color?: ChannalType;
        shape?: ChannalType;
        size?: ChannalType;
        label?: ChannalType;
        style?: ChannalType;
        [x: string]: ChannalType;
    }
}

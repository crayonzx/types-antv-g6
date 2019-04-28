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

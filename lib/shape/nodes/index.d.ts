/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
declare const nodes: {
    common: typeof import('./common');
    html: typeof import('./html');
};
export = nodes;

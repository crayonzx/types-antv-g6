/**
 * @fileOverview entry file
 * the animation cfg description
 * @param {object} cfg - animate config
 * @property  {object} cfg.element - G.Element
 * @property  {object} cfg.item - G6.Item
 * @property  {object} cfg.startKeyFrame - start key frame
 * @property  {object} cfg.endKeyFrame - end key frame
 * @property  {object} cfg.startCache - start key frames cache
 * @property  {object} cfg.endCache - end key frames cache
 * @property  {function} cfg.done - should be executed when animate finished
 * @author huangtonger@aliyun.com
 */
declare const _default: {
    enterScaleIn({ item, element }: {
        item: any;
        element: any;
    }): void;
    showScaleIn({ item, element }: {
        item: any;
        element: any;
    }): void;
    leaveScaleOut({ item, element, done }: {
        item: any;
        element: any;
        done: any;
    }): void;
    hideScaleOut({ item, element, done }: {
        item: any;
        element: any;
        done: any;
    }): void;
    enterFadeIn({ element, item }: {
        element: any;
        item: any;
    }): void;
    showFadeIn({ element, item }: {
        element: any;
        item: any;
    }): void;
    leaveFadeOut({ element, item, done }: {
        element: any;
        item: any;
        done: any;
    }): void;
    hideFadeOut({ element, item, done }: {
        element: any;
        item: any;
        done: any;
    }): void;
};
export = _default;

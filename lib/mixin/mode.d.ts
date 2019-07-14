declare const Mixin: {
    CFG: {
        /**
          * mode list  key - value, key - mode name, value - behaviors
          * @type {object}
          */
        modes: {
            [mode: string]: string[];
        };
        /**
          * current mode name
          * @type {string}
          */
        mode: string;
        _eventCache: {};
    };
    INIT: string;
    AUGMENT: {
        _initModes(): void;
        /**
          * change mode
          * @param {string} modeName - name of mode
          */
        changeMode(modeName: string): void;
        /**
          * add behavior to the current mode
          * @param {Array | String} behaviour - add a behaviour or a list behaviours to the mode
          * @param {String} mode - if not set use current mode
          * @return {object} - graph object
          */
        addBehaviour(behaviour: string | any[], mode: string): any;
        /**
          * remove behavior from the current mode
          * @param {Array | String} behaviour - a behaviour or a list behaviours
          * @return {object} this
          */
        removeBehaviour(behaviour: string | any[]): any;
        /**
          * add a behaviour
          * @param {string} type - behaviour type
          * @param {function} fn - behaivour body
          */
        behaviourOn(type: string, fn: (...args: any[]) => any): void;
        /**
          * remove all behaviours added by user
          */
        _off(): void;
    };
};
export = Mixin;
declare type Mixin = typeof Mixin;

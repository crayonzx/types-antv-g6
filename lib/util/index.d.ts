/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */
/// <reference types="@antv/util" />
declare const Util: Util;
import MathUtil = require('./math');
import PathUtil = require('./path');
import BaseUtil = require('./base');
import DomUtil = require('./dom');
import GraphUtil = require('./graph');
import GraphicUtil = require('./graphic');
export = Util;
declare type Util = GUtil.Overwrite<BaseUtil, GraphUtil, GraphicUtil, DomUtil, PathUtil, MathUtil>;

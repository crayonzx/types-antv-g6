/// <reference types="@antv/util" />
import G from '@antv/g/lib';
import Item from './items';
export declare namespace Model {
    interface Data {
        nodes?: Node[];
        edges?: Edge[];
        groups?: Group[];
        guides?: Guide[];
    }
    interface Base {
        /** id 必须唯一 */
        id: G.Common.ID;
        /** 所属组 */
        parent?: G.Common.ID;
        /** 颜色 */
        color?: G.Common.Color;
        /** 尺寸 || [宽, 高] */
        size?: [number, number];
        /** 所用图形 */
        shape: string;
        /** 文本标签 || 文本图形配置 */
        label?: string;
        /** 描述信息 */
        description?: string;
        [x: string]: any;
        [x: number]: any;
    }
    interface Node extends Base {
        x: number;
        y: number;
        /** 尺寸 || [宽, 高] */
        size: [number, number];
        /** 关键形样式（优先级高于color） */
        style?: G.Common.Style;
        /** 渲染层级 */
        index?: number;
    }
    interface Edge extends Base {
        /** 源节点 id */
        source: G.Common.ID | G.Common.Point;
        /** 目标节点 id */
        target: G.Common.ID | G.Common.Point;
        /** 控制点 */
        controlPoints?: G.Common.Point[];
        /** 源节点锚点 */
        sourceAnchor?: number;
        /** 目标节点锚点 */
        targetAnchor?: number;
        /** 尺寸(对线来说没啥用) */
        /** 关键形样式（优先级高于color） */
        style?: G.Common.Style;
        /** 渲染层级 */
        index?: number;
        /** 开始箭头 */
        startArrow?: boolean;
        /** 结束箭头 */
        endArrow?: boolean;
    }
    /** Group 继承于 Node ，享有 Node 的所有接口 */
    interface Group extends Node {
    }
    interface Guide extends Base {
    }
    type Map<T extends Item.Type | 'base'> = T extends 'node' ? Node : T extends 'edge' ? Edge : T extends 'group' ? Group : T extends 'guide' ? Guide : Base;
}
export default Model;

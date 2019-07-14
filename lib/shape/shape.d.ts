/**
 * @fileOverview shape base class
 * @author huangtonger@aliyun.com
 */
import * as Interfaces from './interfaces';
declare const Shape: Interfaces.Shape;
export = Shape;
declare type Shape = typeof Shape;
declare namespace Shape {
    type Anchors = Interfaces.Anchors;
    type Node = Interfaces.Node;
    type Edge = Interfaces.Edge;
    type Group = Interfaces.Group;
    type Guide = Interfaces.Guide;
    type registerNode = typeof Shape.registerNode;
    type registerEdge = typeof Shape.registerEdge;
    type registerGroup = typeof Shape.registerGroup;
    type registerGuide = typeof Shape.registerGuide;
    type NodeShapeManager = typeof Shape.Node;
    type EdgeShapeManager = typeof Shape.Edge;
    type GroupShapeManager = typeof Shape.Group;
    type GuideShapeManager = typeof Shape.Guide;
}

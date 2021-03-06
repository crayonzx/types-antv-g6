import Base_ from './item/item';
import Node_ from './item/node';
import Edge_ from './item/edge';
import Group_ from './item/group';
import Guide_ from './item/guide';
declare namespace Item {
    type Type = Base_.Type;
    namespace Type {
        type Node = Item.Node['type'];
        type Edge = Item.Edge['type'];
        type Group = Item.Group['type'];
        type Guide = Item.Guide['type'];
    }
    interface Base extends Base_ {
    }
    interface Node extends Node_ {
    }
    interface Edge extends Edge_ {
    }
    interface Group extends Group_ {
    }
    interface Guide extends Guide_ {
    }
    type Map<T extends Type | 'base' = 'base'> = T extends 'node' ? Node : T extends 'edge' ? Edge : T extends 'group' ? Group : T extends 'guide' ? Guide : Base;
}
declare type Item = Item.Base;
export default Item;

import Base_ from './item/item';
import Node_ from './item/node';
import Edge_ from './item/edge';
import Group_ from './item/group';
import Guide_ from './item/guide';
declare namespace Item {
    type Type = Base_.Type;
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
}
declare type Item = Item.Base;
export default Item;

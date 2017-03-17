import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

export default class GoodsItem extends React.Component{
    constructor() {
        super();
    }
    showGoodsList() {
        let showGoodsList = '1';
        let activeGoods = this.props.activeGoods;
        this.props.handleshowGoodsList(showGoodsList,activeGoods);
    }
    render() {
        let activeGoods = this.props.activeGoods;
        return (<div className="goods_item" onClick={this.showGoodsList.bind(this)}>
            <img src={activeGoods.imgurl[0]} alt="" />
            <div className="goods_item_infor">
                <p className="item_name">{activeGoods.name}</p>
                <p className="item_price">&#165;{activeGoods.spectList[0].price}</p>
            </div>
            </div>)
    }
}

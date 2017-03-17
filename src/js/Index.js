import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import GoodsItem from './components/GoodsItem';
import GoodsInfor from './components/GoodsInfor';

export default class Index extends React.Component{
    constructor() {
        super();
        this.state = {
            loadInfor:'',//登陆信息
            goodsList:'',//商品列表
            showGoodsInfor:'0',//是否显示商品详情1：显示；其他不显示
            activeGoods: '',
        }
    }
   // componentWillMount render渲染之前执行的
    componentDidMount() {//render渲染完成后执行的
        this.getLoadInfor();
        this.getGoodsList();
    }

    getLoadInfor() {
        let _url = 'https://github.com/guanya/api/loadInfor.json';
        $.ajax({
            type:'GET',
            dataType:'json',
            asyc:true,
            url:_url,
            timeout:8000,
            success: ((data) => {
                this.setState({
                    loadInfor: data.load,
                })
            }),
            error: (() => {
                console.log('ajax-getLoadInfor 失败')
            })
        })
    }
    getGoodsList() {
        let _url = 'https://github.com/guanya/api/goodsList.json';
        $.ajax({
            type: 'GET',
            url: _url,
            dataType: 'json',
            asyc: true,
            timeout: 8000,
            success: ((data) => {
                this.setState({
                    goodsList: data.list
                })
            }),
            error:(() => {
                console.log('ajax-getGoodsList失败');
            })
        })
    }
    showGoodsList(val,val2) {
        this.setState({
            showGoodsInfor: val,
            activeGoods: val2,
   })
    }
    toIndex() {
        let url = 'https://github.com/guanya/order.html?name=' + encodeURIComponent(this.state.loadInfor.name);
        location.href = url;
    }

    render() {
        const goodsList = this.state.goodsList;
        console.log(goodsList)
        const goodsListArr = [];
        if(goodsList != '') {
            goodsList.forEach((item, index) => {
                goodsListArr.push(<GoodsItem key={index} activeGoods={item} handleshowGoodsList={this.showGoodsList.bind(this)}/>)
            });
        }
        
        return (<div className="wrap">
            <div className="tab_header">
                <div className="header_loader">解忧美妆店</div>
                <div className="header_btn" onClick={this.toIndex.bind(this)}>我的订单</div>
            </div>
            <div className="tab_content">
               {goodsListArr}
            </div>
            {
                this.state.showGoodsInfor == '1' ? <GoodsInfor activeGoods={this.state.activeGoods}/> : null
            }
            </div>)
    }

}

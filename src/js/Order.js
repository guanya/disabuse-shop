import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import OrderInfor from './components/OrderInfor'

export default class Order extends React.Component{
    constructor() {
        super(); 
        this.state = {
            orderList: '',
            showOrderInfor: '0',
            activeOrder: '',
        }   
    }
    componentDidMount() {
        this.getOrder();
    }
    getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        }
        return null;
    }

    getOrder() {
        let _url = 'https://github.com/guanya/disabuse-shop/tree/gh-pages/api/order.json';
        $.ajax({
            type: 'GET',
            url: _url,
            dataType: 'json',
            asyc: true,
            timeout: 8000,
            success: ((data) => {
                this.setState({
                    orderList: data.datalist,
                })
            }),
            error:(() => {
                console.log('ajax-getOrder失败');
            })
        })
    }
    toOrderInfor(item) {
        this.setState({
            showOrderInfor: '1',
            activeOrder: item
        })
    }
    toIndex() {
        let url = '/index.html';
        location.href = url;
    }




    render() {
        let name = decodeURIComponent(this.getQueryString("name"));
        let activeOrder = this.state.activeOrder;
        const orderArr = [];
        console.log(this.state.orderList)
        if(this.state.orderList != '') {
            this.state.orderList.forEach((item, index) => {
                orderArr.push(<div className="order_item" key={index}>
                    <div className="order_id">
                        <p >
                            <span className="order_id_left">订单号</span>
                            <span className="order_id_right">{item.ordernum}</span>
                        </p>
                    </div>
                    <div className="order_item_one" onClick={this.toOrderInfor.bind(this, item)}>
                        <img src={item.imgurl} alt=""/>
                        <div className="content_th_infor">
                            <p className="th_one">
                                <span className="th_one_name">{item.name}</span>
                                <span className="th_one_price">&#165;{item.price}</span>
                            </p>
                            <p className="th_two">
                                <span className="th_two_spect">{item.spect}</span>
                                <span className="th_two_number">x{item.number}</span>
                            </p>
                        </div>
                    </div>
                    <div className="order_item_two">
                        <p className="order_item_p">
                            <span className="item_two_left">总价</span>
                            <span className="item_two_right">&#165;{item.amount}</span>
                        </p>
                    </div>
                </div>)
            })
        }
        return (<div className="order_wrap">
            <div className="tab_header">
                <div className="header_loader">解忧美妆店</div>
                <div className="header_btn" onClick={this.toIndex.bind(this)}>商品列表</div>
            </div>
            <div className="order_box">
                {orderArr}
            </div>
           {
               this.state.showOrderInfor == '1' ? <OrderInfor activeOrder={activeOrder}/> : null
           }
            </div>)
        }


}
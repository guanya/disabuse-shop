import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class Adderss extends React.Component{
    constructor() {
        super();
    }

    render() {
        let activeOrder = this.props.activeOrder;
        console.log(activeOrder)
        return (<div className="order_infor">
            <div className="order_infor_content">
                <div className="content_two">
                    <p className="name_phone">
                        <span className="name">{activeOrder.adderss.name}</span>
                        <span className="phone">{activeOrder.adderss.mobile}</span>
                    </p>
                    <p className="address">{activeOrder.adderss.orderAdderss}</p>
                </div>
                <div className="content_th">
                    <img src={activeOrder.imgurl} alt=""/>
                    <div className="content_th_infor">
                        <p className="th_one">
                            <span className="th_one_name">{activeOrder.name}</span>
                            <span className="th_one_price">&#165;{activeOrder.price}</span>
                        </p>
                        <p className="th_two">
                            <span className="th_two_spect">{activeOrder.spect}</span>
                            <span className="th_two_number">x{activeOrder.number}</span>
                        </p>
                    </div>
                </div>
                <div className="order_id">
                    <p>
                        <span className="order_id_left">订单号</span>
                        <span className="order_id_right">{activeOrder.ordernum}</span>
                    </p>
                </div>
            </div>
            <div className="order_infor_footer">
                <div className="total_price">总价</div>
                <div className="submit_btn">{activeOrder.amount}</div>
            </div>
            </div>);
        }
}

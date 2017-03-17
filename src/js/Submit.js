import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Adderss from './components/Adderss'


export default class Submit extends React.Component{
    constructor() {
        super();
        this.state = {
            userInfor: '',
            activeName: '',
            activePhone: '',
            activeAdderss: '',
            showAdderss: '0',
        }
    }

    componentDidMount() {
       this.getUserInfor();
    }


    getUserInfor() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'https://github.com/guanya/disabuse-shop/tree/gh-pages/api/userInfor.json',
            success: ((data) => {
                this.setState({
                    userInfor: data.adderss,
                    activeName: data.adderss[0].name,
                    activePhone: data.adderss[0].mobile,
                    activeAdderss: data.adderss[0].orderAdderss,
                })
            }),
            error: (() => {
                console.log('ajax getUserInfor 失败')
            })
        })
    }


    getQueryString(name) {

        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        console.log(window.location.search);
        console.log(window.location.search.substr(1));
        console.log(window.location.search.substr(1).match(reg)[2]);
        // encodeURIComponent

        var r = window.location.search.substr(1).match(reg);

        if (r != null) {
            return r[2];
        }
        return null;
    }
    showAdd() {
        this.setState({
            showAdderss: '1',
        })
    }
    closeAdderss(val) {
        this.setState({
            showAdderss: val,
        })
    }
    choiceAdd(closeAdderss, item) {
        console.log(item)
        this.setState({
            activeName: item.name,
            activePhone: item.mobile,
            activeAdderss: item.orderAdderss,
            showAdderss: closeAdderss,
        })
    }
    toindex() {
        let _url = '/index.html';
        location.href = _url;
    }
    render() {
        let name = decodeURIComponent(this.getQueryString("name"));
        let spect = decodeURIComponent(this.getQueryString("spect"));
        let number = this.getQueryString("number");
        let img = this.getQueryString('img');
        let price = this.getQueryString('price');
        let allPrice = number * price;
        console.log(name+spect+number+img+price);
        return (<div className="submit_wrap">
            <div className="content">
                <div className="content_one">
                    <p>配送信息</p>
                </div>
                <div className="content_two" onClick={this.showAdd.bind(this)}>
                    <p className="name_phone">
                        <span className="name">{this.state.activeName}</span>
                        <span className="phone">{this.state.activePhone}</span>
                    </p>
                    <p className="address">{this.state.activeAdderss}</p>
                    <span className="icon">></span>
                </div>
                <div className="content_th">
                    <img src={img} alt=""/>
                    <div className="content_th_infor">
                        <p className="th_one">
                            <span className="th_one_name">{name}</span>
                            <span className="th_one_price">&#165;{price}</span>
                        </p>
                        <p className="th_two">
                            <span className="th_two_spect">{spect}</span>
                            <span className="th_two_number">x{number}</span>
                        </p>
                    </div>
                </div>
                <div className="content_fo">
                    <p>
                        <span className="pay_title">支付方式</span>
                        <span className="pay_money">现金支付</span>
                    </p>
                </div>
            </div>
            <div className="footer">
                <div className="total_price">
                    <span className="total_title">总价</span>
                    <span className="total_value">&#165;{allPrice}</span>
                
                </div>
                <div className="submit_btn" onClick={this.toindex.bind(this)}>提交订单</div>
            </div>
            {
                this.state.showAdderss == '1' ? <Adderss userInfor={this.state.userInfor} handlecloseAdderss={this.closeAdderss.bind(this)} handlechoiceAdd={this.choiceAdd.bind(this)}/> : null 
            }

            
            </div>)
    }
}
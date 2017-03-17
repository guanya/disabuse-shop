import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


export default class Adderss extends React.Component{
    constructor() {
        super();
    }
    closeAdderss() {
        let showAdderss = '0';
        this.props.handlecloseAdderss(showAdderss)
    }
    choiceAdd(item, e) {

        $(".adderss_radius").removeClass('active_radius');
        $(e.target).addClass('active_radius');
        let closeAdderss = '0';
        this.props.handlechoiceAdd(closeAdderss, item);
    }

    render() {
        let userInfor = this.props.userInfor;
        console.log(userInfor);
        const adderssArr = [];
        userInfor.forEach((item, index) => {
            adderssArr.push(<div className="adderss_item" key={index}>
                <div className="adderss_radius" onClick={this.choiceAdd.bind(this, item)}></div>
                <div className="adderss_right">
                    <p className="adderss_n_p">
                        <span className="adderss_name">{item.name}</span>
                        <span className="adderss_phone">{item.mobile}</span>
                    </p>
                    <p className="adderss_more">{item.orderAdderss}</p>
                </div>
            </div>)
        
        })
        
        return(<div className="adderss_wrap">
                <div className="adderss_header">
                    <div className="back" onClick={this.closeAdderss.bind(this)}>back</div>
                    <p className="adderss_title">收货地址</p>
                </div>
                <div className="adderss_content">
                    {adderssArr}

                </div>
            </div>)
        }

}
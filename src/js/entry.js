import React from 'react';
import ReactDom from 'react-dom';
import '../css/home.less'
import Index from './Index';
import Submit from './Submit'
import Order from './Order';



window.index = () => {
    ReactDom.render(<Index />,document.getElementById("box"))
}
window.submit = () => {
    ReactDom.render(<Submit />,document.getElementById("box"))
}
window.order = () => {
    ReactDom.render(<Order />,document.getElementById("box"))
}



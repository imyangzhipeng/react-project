import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {
    constructor(){
        super();
        this.state={

        }
    }

    componentDidMount(){
        console.log(this.props);
       
    }

    render() {
        return (
            <div>
                内容页接收到的值是：{this.props.match.params.res}
            </div>
        );
    }
}

export default Item;
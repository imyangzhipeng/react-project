import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';


import '../CSS/slideBox.scss';

class Slide_Box extends Component {
    constructor(){
        super();
        this.state={
            slideBoxData:[],
        }
    }

    componentDidMount(){
        axios.get('item/ws/group_list?current_page=1&page_size=12&group_id=29933&device_id=969577d0-8466-11ea-9fbb-41a83dbb5cdc').then(res=>{
            console.log(res);
            this.setState({
                slideBoxData:res.data.data.item_list,
            })
        })
    }

    render() {
        return (
            <div className="slidebox-main">
                {
                    this.state.slideBoxData.map((item,index)=>{
                        return(
                            <Link to={"/item/"+item.item_id} key={index}>
                                <div className="eachItem">
                                    <img className="itemPic" src={item.over_image_url} alt={item.item_short_name} />
                                    <p className="itemName">{item.item_name}</p>
                                    <p className="price">￥{item.min_app_price/100}
                                    {item.min_market_price.toString()===item.min_app_price || item.min_market_price===0 ?'':<span className="s-price">￥{item.min_market_price/100}</span>}
                                    </p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default Slide_Box;
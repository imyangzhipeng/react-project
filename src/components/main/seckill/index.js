import React, { Component } from 'react';
import axios from 'axios';


class Seckill extends Component {
    constructor(){
        super();
        this.state={
            seckillList:[],
            countdownTimer:['00','00','00'],
        }
    }

    componentDidMount(){
        axios.get('activity/specials/info?count=8&code=Home_flashSale__Top_Img&stock_code=&device_id=72abab00-838a-11ea-9a04-31019c27c112').then(res=>{
            // console.log(res);
            let currentTime = res.data.data.now;  //保存页面打开时的当前时间戳
            let endTime = res.data.data.specials_time_ranges[0].end;  //保存秒杀活动结束时间戳
            let timeRemain = endTime - currentTime;  //计算出活动剩余时间

            setInterval(()=>{  //由于页面不刷新不会一直从后台请求数据，使用定时器每秒改变剩余时间
                timeRemain-=1000;
                let s = Math.floor(timeRemain/1000%60);       //将活动剩余时间转换成时分秒
                let m = Math.floor(timeRemain/1000/60%60);
                let h = Math.floor(timeRemain/1000/60/60%24);
                this.setState({
                    countdownTimer:[h,m,s].map(item=>this.addZero(item)),  //设置状态值并将值小于10的数字调用加0函数再前面加0
                })

                // console.log(this.state.countdownTimer);
            },1000);

            this.setState({
                seckillList:res.data.data.specials_item_v_o_s,
            });
            // console.log(this.state.seckillList);
        });

    }

    addZero=(arg)=>{
        if (arg>9) {
            return arg;
        } else {
            return '0'+arg;
        }
    }



    render() {
        const {seckillList,countdownTimer} = this.state;
        return (
            <div className="seckill-main-con">
                <div className="countdown">
                    <p className="showRemain">今日秒杀 &nbsp;&nbsp;
                    <span className="timeNum">{countdownTimer[0]}</span>:
                    <span className="timeNum">{countdownTimer[1]}</span>:
                    <span className="timeNum">{countdownTimer[2]}</span>
                    </p>
                    <p className="more">更多好货 {'>'}</p>
                </div>
                <div className="show-goods">
                    {
                        seckillList.map((item,index)=>{
                            return(
                                <div className="each-good" key={index}>
                                    <img src={item.image_url} alt={item.sku_name}/>
                                    <p className="title">{item.item_short_name}</p>
                                    <p className="price">￥{item.promotion_price/100} <span className="s-price">￥{item.market_price/100}</span> </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Seckill;
import React,{Component} from 'react';
import axios from 'axios';


// 引入子页面
import MainBanner from './banner/index';
import HotSale from './hotsale/index';
import Seckill from './seckill/index';
import Slide_Box from "./slideBox/index";


//引入子页面css样式
import './CSS/banner.scss';
import './CSS/hotSale.scss';
import './CSS/seckill.scss';


class Main extends Component{
    constructor(){
        super();
        this.state={
            bannerPic:[],
        }
    }

    componentDidMount(){
        axios.get('aladdin/get_batch_data?codes=[%22sylunbo%22,%22pingou_B%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&province_code=&city_code=&version=&app_channel=wap&plat=wap&access_token=&device_id=a83353a0-82bc-11ea-bbfb-dfcf5cf0e5c2').then(res=>{
            // console.log(res);
            this.setState({
                bannerPic : res.data.data.sylunbo.datas,
            })
        })

    }

    render(){
        return(
            <div className="main-base">
                <MainBanner data={this.state.bannerPic} />
                <Seckill/>
                <HotSale/>
                <img className="necessary" src="https://image.watsons.com.cn//upload/50997948.jpg" alt="防疫必备"/>
                <Slide_Box />
            </div>
        )
    }
}

export default Main;
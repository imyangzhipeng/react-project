import React,{Component} from 'react';
import axios from 'axios';


class HotSale extends Component{
    constructor(){
        super();
        this.state={
            hotSaleTitle:[
                {h_saleId:1,title:'爆款让利',group_id:29610,isActive:true},
                {h_saleId:2,title:'口碑热荐',group_id:29612,isActive:false},
                {h_saleId:3,title:'限时特惠',group_id:29613,isActive:false},
                {h_saleId:4,title:'底价清仓',group_id:29614,isActive:false},
            ],
            hotSaleList:[],
        }
    }

    componentDidMount(){
        this.useAxios(29610);
    }

    getData=(arg)=>{
        // console.log(arg);
        let provisional = this.state.hotSaleTitle;
        for(var i=0; i<provisional.length; i++){
            provisional[i].isActive = false;
            if(provisional[i].group_id === arg){
                provisional[i].isActive = true;
            }
        };

        this.setState({
            hotSaleTitle:provisional,
        });

        this.useAxios(arg);
        
    }

    useAxios=(group_id)=>{
        axios.get('item/ws/group_list?current_page=1&page_size=9&group_id='+ group_id +'&device_id=3df71b10-82fe-11ea-87a0-0dc7a75baed2').then(res=>{
            this.setState({
                hotSaleList:res.data.data.item_list,
            })
            // console.log(this.state.hotSaleList);
        })
    }

    render(){
        return(
            <div className="Hot-Sale">
                    <img src="https://image.watsons.com.cn//upload/0fbcbb8b.jpg" alt="人气热卖" className="hsale"/>
                    <ul className="hst-con">
                        {
                            this.state.hotSaleTitle.map(item=>{
                                // console.log(item);
                                return (
                                    <li key={item.h_saleId} className={item.isActive?"active":""}
                                    onClick={this.getData.bind(this,item.group_id)}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="hs-scope">
                        {
                            this.state.hotSaleList.map(data=>{
                                return (
                                    <React.Fragment key={data.item_id}>
                                        <div className="hs-window">
                                            <img src={data.over_image_url} alt={data.item_name}/>
                                            <p className="test-ellipsis">{data.item_name}</p>
                                            <p className="hs-price">￥{data.min_app_price/100} <span className="s-price">￥{data.min_market_price/100}</span> </p>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
        )
    }
}

export default HotSale;
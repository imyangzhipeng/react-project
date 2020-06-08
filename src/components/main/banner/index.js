import React,{Component} from 'react';
import { Carousel } from 'antd';

class MainBanner extends Component{

    render(){
        // console.log(this.props.data);
        let bannerPic = this.props.data;
        return(
            <div>
                <Carousel autoplay>
                    {bannerPic.map(item=>{
                        // console.log(item);
                        return (
                            <div key="item.id"><img src={item.image_url} alt="item.gmt_modified"/></div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}

export default MainBanner;
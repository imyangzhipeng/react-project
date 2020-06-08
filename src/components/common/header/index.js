import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import { Row, Col } from 'antd';
import { UserOutlined,ShoppingCartOutlined,SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import './header.scss';

class Header extends Component{
    render(){
        return(
            <div className="head-main-contain">
                <div className="head-search">
                    <Row>
                        <Col span={4}><UserOutlined /></Col>
                        <Col span={16} className="search-input"><Input className="box" placeholder="保湿面膜0.1元" prefix={<SearchOutlined />} /></Col>
                        <Col span={4}><ShoppingCartOutlined /></Col>
                    </Row>
                </div>
                <div className="head-link">
                    <NavLink exact={true} to='/'>今日推荐</NavLink>
                    <NavLink to='/mask'>面膜中心</NavLink>
                    <NavLink to='/good'>潮流好物</NavLink>
                    <NavLink to='/global'>全球购</NavLink>
                </div>
            </div>
        )
    }
}

export default Header;
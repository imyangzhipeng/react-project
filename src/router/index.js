import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from '../components/main';
import Mask from '../components/mask';
import Good from '../components/good';
import Global from '../components/global';
import Item from '../components/item/index';

import Header from '../components/common/header/index';

const App=()=>(
    <Router>
        <Header />
        <div className="view-main">
            <Route path='/' exact={true} component={Main} />
            <Route path='/mask' component={Mask} />
            <Route path='/good' component={Good} />
            <Route path='/global' component={Global} />
            <Route path='/item/:res' component={Item} />
        </div>
    </Router>
)

export default App;
import React, { Component } from 'react'

import SHOP_DATA from './shop.data.js'

 class ShopPage  extends Component {
     constructor(){
         super();
         this.state={
             collections:SHOP_DATA
         }
     }
    render() {
        return (
            <div>
                <h1>Shop page</h1>
            </div>
        )
    }
}

export default ShopPage;

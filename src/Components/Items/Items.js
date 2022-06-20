import React from 'react'
import item_package from './item_package.json';
import Card from '../Card';
function Items() {
  return (
      <div className="row">
      <div className="col_md x_center y_center">
        <div className="itemholder">
          <div className="item">
            <img src="./items/big-mac.jpg" alt="" srcSet />
            <span className="name">Big Mac</span>
            <span className="money">$2</span>
            <div className="manager_holder">
              <button className="btn bg-red">Sell</button>
              <input type="text" placeholder={0} />
              <button className="btn bg-gradient">Buy</button>
            </div>
          </div>
          { item_package.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Items
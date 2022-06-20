import React from 'react'
import item_package from './item_package.json';
import Card from '../Card';
function Items() {
  return (
      <div className="row">
      <div className="col_md x_center y_center">
        <div className="itemholder">
          { item_package.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Items
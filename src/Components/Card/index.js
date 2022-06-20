import React from 'react'

function Card({item}) {
  return (
      <div  className="item">
      <img src={item.item_img.toString()}  alt={item.item_name}  />
      <span className="name">{item.item_name}</span>
      <span className="money">${item.price}</span>
      <div className="manager_holder">
        <button className="btn bg-gray">Sell</button>
        <input type="text" placeholder={0} />
        <button className="btn bg-gradient">Buy</button>
      </div>
    </div>
  )
}

export default Card
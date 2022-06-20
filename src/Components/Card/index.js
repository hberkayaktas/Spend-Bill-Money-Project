import {useState} from 'react'

function Card({item}) {
  const [quantity,SetQuantity] = useState(0);
  const growQuantity = () =>{
    const newQ = quantity+1;
    SetQuantity(newQ); 
  }
  const decraseQuantity = () =>{
    const newQ = quantity-1;
    if(quantity>0){
      SetQuantity(newQ); 
    }
    
  }
  return (
      <div  className="item">
      <img src={item.item_img.toString()}  alt={item.item_name}  />
      <span className="name">{item.item_name}</span>
      <span className="money">${item.price}</span>
      <div className="manager_holder">
        <button className={`btn ${ quantity >0 ? "bg-red": "bg-gray"}`} onClick={decraseQuantity}>Sell</button>
        <input type="text" placeholder={0} value={quantity} onChange={(e) => SetQuantity(e.target.value)} />
        <button className="btn bg-gradient" onClick={growQuantity}>Buy</button>
      </div>
    </div>
  )
}

export default Card
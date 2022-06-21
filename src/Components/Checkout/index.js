import {useEffect} from 'react'
import {useSelector} from 'react-redux';
function Checkout() {
  
  

  const basket = useSelector((state)=> state.cuzdan.basket);
  const total = useSelector((state) => state.cuzdan.total);
  
  
  return (
      <div className="row mt_5">
      <div className="col_md x_center y_center">
        <div className="hesapHolder">
          <h1>Hesap</h1>
          <ul>
            {basket <=0 && "sepette ürün yook"}
            {basket.map((item) => (
              <li key={item.id}>
              {item.item_name}
              <div className="quantittyHolder">
                <span>x{item.quantity} </span><span className="money fw-bold">${item.price}</span>
              </div>
            </li>
            ) )}
           
          </ul>
          <div className="quantittyHolder w_100">
            <span className="fw-bold">Total</span>
            <span className="money fw-bold">${total}</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Checkout
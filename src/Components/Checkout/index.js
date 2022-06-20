import React from 'react'

function Checkout() {
  return (
      <div className="row mt_5">
      <div className="col_md x_center y_center">
        <div className="hesapHolder">
          <h1>Hesap</h1>
          <ul>
            <li>
              Big Mac
              <div className="quantittyHolder">
                <span>x2 </span><span className="money fw-bold">$4</span>
              </div>
            </li>
            <li>
              Big Mac
              <div className="quantittyHolder">
                <span>x2 </span><span className="money fw-bold">$4</span>
              </div>
            </li>
            <li>
              Big Mac
              <div className="quantittyHolder">
                <span>x2 </span><span className="money fw-bold">$4</span>
              </div>
            </li>
            <li>
              Big Mac
              <div className="quantittyHolder">
                <span>x2 </span><span className="money fw-bold">$4</span>
              </div>
            </li>
          </ul>
          <div className="quantittyHolder w_100">
            <span className="fw-bold">Total</span>
            <span className="money fw-bold">$4654648946</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Checkout
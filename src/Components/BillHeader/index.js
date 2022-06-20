import React from "react";
import {useSelector } from "react-redux";

function BillHeader() {
  const money = useSelector((state)=> state.cuzdan.money);
  //console.log(money.toString().length);
  const sMoney = money.toString();
  const money_managed =  sMoney.substr(0, 3) +","+ sMoney.substr(3, 3)+","+ sMoney.substr(6, 3)+","+ sMoney.substr(9, 3)  ;
  return (
    <div>
      <div className="row">
        <div className="col_md billBanner">
          <img alt="Bill Gates" src="./system/billgates.jpg" />
          <p className="fw-bold">Spend Bill Gates' Money</p>
        </div>
      </div>
      <div className="row moneyBannerHolder">
        <div className="col_md x_center moneyBanner bg-gradient">
          <span>${money_managed}</span>
        </div>
      </div>
    </div>
  );
}

export default BillHeader;

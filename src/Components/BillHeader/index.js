import React from "react";
import {useSelector } from "react-redux";

function BillHeader() {
  const money = useSelector((state)=> state.cuzdan.money);
  //console.log(money.toString().length);
  const sMoney = money.toString();
  function moneyparted (taken){
    //console.log(taken.length);
   // console.log(taken);

    let tekrar = Math.ceil(taken.length/3);
   // console.log(tekrar);
    let part_sondan_1 = taken.slice(-3,);
    let part_sondan_2 = taken.slice(-6,-3);
    let part_sondan_3 = taken.slice(-9,-6);
    let part_sondan_4 = taken.slice(-12,-9);
    //console.log(part_sondan_4+","+part_sondan_3+","+part_sondan_2+","+part_sondan_1)

    return part_sondan_4+ (part_sondan_4 ? ",":"") +part_sondan_3+ (part_sondan_3 ? ",":"")+part_sondan_2+(part_sondan_2 ? ",":"")+part_sondan_1;
  }
  const money_managed = moneyparted(sMoney) ;
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, dropToBasket } from "../../redux/cuzdan/cuzdanSlice";

function Card({ item }) {
  const [quantity, SetQuantity] = useState(0);
  const money = useSelector((state) => state.cuzdan.money);
  const dispacth = useDispatch();

  const growQuantity = () => {
    const newQ = quantity + 1;
    if (money > item.price) {
      SetQuantity(newQ);
      dispacth(
        addToBasket({
          id: item.id,
          item_name: item.item_name,
          price: item.price,
          quantity: newQ,
        })
      );
    }
  };

  const decraseQuantity = () => {
    const newQ = quantity - 1;
    if (quantity > 0) {
      SetQuantity(newQ);
      dispacth(
        dropToBasket({
          id: item.id,
          item_name: item.item_name,
          price: item.price,
          quantity: newQ,
        })
      );
    }
  };
  return (
    <div className="item">
      <img src={item.item_img.toString()} alt={item.item_name} />
      <span className="name">{item.item_name}</span>
      <span className="money">${item.price}</span>
      <div className="manager_holder">
        <button
          className={`btn ${quantity > 0 ? "bg-red" : "bg-gray"}`}
          onClick={decraseQuantity}
        >
          Sell
        </button>
        <input
          type="text"
          placeholder={0}
          value={quantity}
          onChange={(e) => SetQuantity(Number(e.target.value))}
        />
        <button
          className={`btn ${money > item.price ? "bg-gradient" : "bg-gray"}`}
          onClick={growQuantity}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;

import { useState } from "react";
import Basket from "../component/basket";
import EventManager from "../utils/eventEmitters";

const detailDatas = {
  id: 1,
  unitPrice: 46,
  stock: 24,
  name: "Sticker",
};

const Detail = () => {
  const [basketCount, setBasketCount] = useState(0);

  const handleClick = (datas) => {
    EventManager.emit("detailButtonClicked", {
      ...datas,
      quantity: basketCount + 1,
    });
  };

  return (
    <div>
      Detail Page
      <br />
      <br />
      <button
        onClick={() => {
          setBasketCount(basketCount + 1);
          handleClick(detailDatas);
        }}
      >
        Add Basket!
      </button>
      <Basket />
    </div>
  );
};

export default Detail;

import React, { useEffect, useState } from "react";
import EventManager from "../utils/eventEmitters";

const basketStyles = {
  position: "absolute",
  top: "30px",
  right: "30px",
  cursor: "pointer",
};

const Basket = () => {
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    EventManager.on("detailButtonClicked", (datas) => {
      setDetailData(datas);
    });
  }, []);

  return (
    <div
      style={{ ...basketStyles }}
      onMouseOver={() => {
        alert(
          detailData?.quantity > 0
            ? `Total Price $${detailData?.quantity * detailData?.unitPrice}`
            : "Empty"
        );
      }}
    >
      Basket ({detailData?.quantity || 0})
    </div>
  );
};

export default Basket;

import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Youtuber from "../Youtuber/Youtuber";

const Developers = () => {
  const [youtubers, setYoutubers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./youtubers.JSON")
      .then((res) => res.json())
      .then((data) => setYoutubers(data));
  }, []);

  const handleAddToCart = (youtuber) => {
    const newCart = [...cart, youtuber];
    setCart(newCart);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="row g-5">
            {youtubers.map((youtuber) => (
              <Youtuber
                key={youtuber.key}
                youtuber={youtuber}
                handleAddToCart={handleAddToCart}
              ></Youtuber>
            ))}
            </div>
            
          </div>
          <div className="col-sm-3">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;

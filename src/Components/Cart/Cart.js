import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandshake} from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    for (const youtuber of cart) {
        if (!youtuber.quantity) {
            youtuber.quantity = 1;
        }
        total = total + youtuber.Salary * youtuber.quantity;
        totalQuantity = totalQuantity + youtuber.quantity;
    }
    return (
        <div>
            <h3>Member Added: {totalQuantity}</h3>
            <p className="fw-bold">Total Cost: ${total.toFixed(2)}</p>
            {
                cart.map(c => <p className="text-danger fw-bold">{c.name}</p>)
            }
            <div className="d-grid">
          <button
            className="btn btn-danger text-white"
            onClick={() => props.handleAddToCart(props.youtuber)}
          ><FontAwesomeIcon icon={faHandshake} /> <span className="mx-1">Hire</span> 
          </button>
          </div>
        </div>
    );
};

export default Cart;
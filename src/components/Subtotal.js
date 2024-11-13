import React from 'react'
import { useAuth } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import '../assets/style/subtotal.css'
import { getBasketTotal } from '../context/AppReducer';

export default function Subtotal() {
    const { basket } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

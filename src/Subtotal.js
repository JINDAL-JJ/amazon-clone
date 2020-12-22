import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue} from "./StateProvider"

function Subtotal() {
    const [ {basket} ] = useStateValue()

    const subtotalValue = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0)
    }

    return (
        <div className="subtotal">
            <p>
                Total ({basket?.length} items)  
            </p>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    </>
                )}
                decimalScale={2}
                value={subtotalValue(basket)}
                displaytype={"text"} 
                thousandSeparator={true}
                prefix={"$"}
            />
            <div className="subtotal__gift"> 
                <input type="checkbox" className="gift__checkbox" />
                This order contains a gift
            </div>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal

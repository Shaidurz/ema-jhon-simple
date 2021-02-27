import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = total / 10;

    const fixedNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    const grandTotal = (total + shipping + tax)
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {fixedNumber(total)}</p>
            <p><small>Tax: {fixedNumber(tax)}</small></p>
            <p><small>Shipping Cost: {fixedNumber(shipping)}</small></p>
            <p>Total: {fixedNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;
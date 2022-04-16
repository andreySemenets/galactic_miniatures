import * as React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartItem from '../../components/ShoppingCartItem/ShoppingCartItem';

import './ShoppingCartPage.css';

const steps = ['Cart', 'Customer Information', 'Payment'];

const ShoppingCartPage = () => {
    return (
        <div className="cartContainer">
            <h2 className="cartTitle">Shopping Cart</h2>
            <div className="cartStepper">
                <div className="stepOne">1</div>
                <div className="stepCart">Cart</div>
                <div className="stepArrow">
                    <ArrowRightAltIcon className="cartArrow" />
                </div>
                <div className="stepTwo">2</div>
                <div className="stepCustmerInfo">Customer Information</div>
                <div className="stepArrow">
                    <ArrowRightAltIcon className="cartArrow" />
                </div>
                <div className="stepThree">3</div>
                <div className="stepPayment">Payment</div>
            </div>
            <div className="cartItemsAndOrder">
                <div className="cartItems">
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                </div>
                <div className="cartOrderSummary">
                    <h4 className="cartOrderSummaryTitle">Order Summary</h4>
                    <div className="cartOrderSummaryInfo">
                        <div className="cartOrderSummaryModelsPrice">
                            <span>Models Price</span>
                            <span>
                                <b>$75</b>
                            </span>
                        </div>
                        <div>
                            <span>Options Price</span>
                            <span>
                                <b>$75</b>
                            </span>
                        </div>
                        <div>
                            <span>Order Total</span>
                            <span>
                                <b>$75</b>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h6>Write a note</h6>
                        <textarea
                            name="cartNote"
                            id="cartNote"
                            cols="20"
                            rows="5"
                        />
                    </div>
                    <div>
                        <button className="toCheckoutBtn">
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;

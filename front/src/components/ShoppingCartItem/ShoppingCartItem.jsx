import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './ShoppingCartItem.css'

const ShoppingCartItem = () => {
    return (
        <div className="cartItem">
            <div className='photoAndInfo'>
                <div className="cartItemPhoto"><img src="https://source.unsplash.com/random" alt="" /></div>
                <div className="cartItemInfo">
                    <div className="class1 cartItemInfoTitle">Lowsdfsfsfdsfsf</div>
                    <div className="class1 cartItemInfoDescription">Polygons 549</div>
                    <div className="class1 cartItemInfoPrice">$50</div>
                </div>
            </div>
            <div className="cartItemBtns">
                <div className="cartItemQuantityBtns">
                    <div className="cartitemQuantityMinus">
                        <RemoveIcon />
                    </div>
                    <div className="cartitemQuantity">1</div>
                    <div className="cartitemQuantityPlus">
                        <AddIcon />
                    </div>
                </div>
                <div className="cartItemDeleteBtns">
                    <div className="cartItemReload">
                        <UpdateIcon />
                    </div>
                    <div className="cartItemDelete">
                        <DeleteOutlineIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartItem;

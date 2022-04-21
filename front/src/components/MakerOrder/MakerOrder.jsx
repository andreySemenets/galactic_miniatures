import React from 'react';
import './MakerOrder.css'

const MakerOrder = ({order}) => {
    return (
        <>
          <div className="orderItem">
              <div className="orderPicture">
                  {/*<div className="cartPictuire">*/}
                  <img className='pictureOrder' src={'http://localhost:4000/' + order?.photoUrl} alt="rfhnbyrf"/>
                  {/*</div>*/}
                  <div className="orderCount">
                      + {order?.quantity}
                  </div>
              </div>

              <div className="orderStatus">
                  <p>Order track number: {order?.orderNumber}</p>
                  <div className="orderData">
                      <p>Order date: {order?.createdAt.slice(0,10 )}</p>
                      <p>Color: {order?.['PhysicalCopy.color']}</p>
                      <p>Scale: {order?.['PhysicalCopy.scale']}</p>
                  </div>
              </div>
          </div>

        </>
    );
};

export default MakerOrder;
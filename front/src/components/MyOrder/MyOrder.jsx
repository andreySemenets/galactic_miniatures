import React from 'react';
import './MyOrder.css'

const MyOrder = ({order , orderList}) => {
    return (
        <>
            <div className="orderItem">
                <div className="orderPicture">
                    <img src={'http://localhost:4000/Base.jpg'} alt=""/>
                    <div className="orderCount">
                        + {orderList.length}
                    </div>
                </div>
                <div className="orderStatus">
                    <p>Order track number: {order.orderNumber}</p>
                    <div className="orderIcons">
                        <div className="circleIcon">
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L15.298 2.28C15.5015 2.34354 15.6794 2.47048 15.8057 2.64229C15.932 2.81409 16.0001 3.02177 16 3.235V5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V14C19 14.2652 18.8946 14.5196 18.7071 14.7071C18.5196 14.8946 18.2652 15 18 15L14.78 15.001C14.393 15.511 13.923 15.961 13.38 16.331L8 20L2.62 16.332C1.81252 15.7815 1.15175 15.042 0.69514 14.1779C0.238528 13.3138 -0.000101223 12.3513 3.22098e-08 11.374V3.235C0.000120606 3.02194 0.0682866 2.81449 0.194562 2.64289C0.320838 2.47128 0.498622 2.34449 0.702 2.281L8 0ZM8 2.094L2 3.97V11.374C1.99986 11.9862 2.14025 12.5903 2.41036 13.1397C2.68048 13.6892 3.07311 14.1692 3.558 14.543L3.747 14.679L8 17.58L11.782 15H7C6.73478 15 6.48043 14.8946 6.29289 14.7071C6.10536 14.5196 6 14.2652 6 14V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5H14V3.97L8 2.094ZM8 10V13H17V10H8ZM8 8H17V7H8V8Z" fill="#09121F"/>
                            </svg>
                        </div>
                        <svg width="25" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="25" y2="1" stroke="white" stroke-width="2" stroke-dasharray="3 3"/>
                        </svg>
                        <div className="circleDisable">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0.992V19.008C17.9979 19.2706 17.8926 19.5219 17.7068 19.7075C17.521 19.8931 17.2696 19.9982 17.007 20H0.993C0.729813 20 0.477391 19.8955 0.291196 19.7095C0.105001 19.5235 0.000265042 19.2712 0 19.008V0.992C0.00209465 0.72938 0.107418 0.478126 0.293218 0.292513C0.479017 0.1069 0.730378 0.00183004 0.993 0H17.007C17.555 0 18 0.444 18 0.992ZM16 2H2V18H16V2ZM8.293 11.121L12.536 6.879L13.95 8.293L8.293 13.95L4.403 10.06L5.818 8.646L8.293 11.121Z" fill="#959EAD"/>
                            </svg>
                        </div>
                        <svg width="25" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="25" y2="1" stroke="#1E1F24" stroke-width="2" stroke-dasharray="3 3"/>
                        </svg>

                        <div className="circleDisable">
                            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.965 13C7.84612 13.8343 7.43021 14.5977 6.79368 15.1499C6.15714 15.7022 5.34272 16.0063 4.5 16.0063C3.65728 16.0063 2.84286 15.7022 2.20632 15.1499C1.56979 14.5977 1.15388 13.8343 1.035 13H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V3H19L22 7.056V13H19.965C19.8461 13.8343 19.4302 14.5977 18.7937 15.1499C18.1571 15.7022 17.3427 16.0063 16.5 16.0063C15.6573 16.0063 14.8429 15.7022 14.2063 15.1499C13.5698 14.5977 13.1539 13.8343 13.035 13H7.965ZM14 2H2V10.05C2.39456 9.6472 2.8806 9.34568 3.41675 9.17112C3.9529 8.99655 4.52329 8.95411 5.07938 9.04739C5.63546 9.14068 6.16077 9.36694 6.61061 9.70691C7.06044 10.0469 7.42148 10.4905 7.663 11H13.337C13.505 10.647 13.73 10.326 14 10.05V2ZM16 8H20V7.715L17.992 5H16V8ZM16.5 14C16.898 14 17.2796 13.8419 17.561 13.5605C17.8424 13.2791 18.0005 12.8975 18.0005 12.4995C18.0005 12.1015 17.8424 11.7199 17.561 11.4385C17.2796 11.1571 16.898 10.999 16.5 10.999C16.102 10.999 15.7204 11.1571 15.439 11.4385C15.1576 11.7199 14.9995 12.1015 14.9995 12.4995C14.9995 12.8975 15.1576 13.2791 15.439 13.5605C15.7204 13.8419 16.102 14 16.5 14ZM6 12.5C6 12.303 5.9612 12.108 5.88582 11.926C5.81044 11.744 5.69995 11.5786 5.56066 11.4393C5.42137 11.3001 5.25601 11.1896 5.07403 11.1142C4.89204 11.0388 4.69698 11 4.5 11C4.30302 11 4.10796 11.0388 3.92597 11.1142C3.74399 11.1896 3.57863 11.3001 3.43934 11.4393C3.30005 11.5786 3.18956 11.744 3.11418 11.926C3.0388 12.108 3 12.303 3 12.5C3 12.8978 3.15804 13.2794 3.43934 13.5607C3.72064 13.842 4.10218 14 4.5 14C4.89782 14 5.27936 13.842 5.56066 13.5607C5.84196 13.2794 6 12.8978 6 12.5Z" fill="#959EAD"/>
                            </svg>
                        </div>
                        <svg width="25" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="25" y2="1" stroke="#1E1F24" stroke-width="2" stroke-dasharray="3 3"/>
                        </svg>

                        <div className="circleDisable">
                            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 21H14V19C14 18.2044 13.6839 17.4413 13.1213 16.8787C12.5587 16.3161 11.7956 16 11 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21H0V19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21ZM8 12C7.21207 12 6.43185 11.8448 5.7039 11.5433C4.97595 11.2417 4.31451 10.7998 3.75736 10.2426C3.20021 9.68549 2.75825 9.02405 2.45672 8.2961C2.15519 7.56815 2 6.78793 2 6C2 5.21207 2.15519 4.43185 2.45672 3.7039C2.75825 2.97595 3.20021 2.31451 3.75736 1.75736C4.31451 1.20021 4.97595 0.758251 5.7039 0.456723C6.43185 0.155195 7.21207 -1.17411e-08 8 0C9.5913 2.37122e-08 11.1174 0.632141 12.2426 1.75736C13.3679 2.88258 14 4.4087 14 6C14 7.5913 13.3679 9.11742 12.2426 10.2426C11.1174 11.3679 9.5913 12 8 12ZM8 10C9.06087 10 10.0783 9.57857 10.8284 8.82843C11.5786 8.07828 12 7.06087 12 6C12 4.93913 11.5786 3.92172 10.8284 3.17157C10.0783 2.42143 9.06087 2 8 2C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6C4 7.06087 4.42143 8.07828 5.17157 8.82843C5.92172 9.57857 6.93913 10 8 10Z" fill="#959EAD"/>
                            </svg>
                        </div>

                        <div className="statusText">
                            Now in for confirmation
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrder;
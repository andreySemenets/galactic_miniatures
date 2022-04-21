import React from 'react';
import './UserProfile.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MakerOrder from "../../components/MakerOrder/MakerOrder";
import {getCatalogItems} from "../../redux/actions/catalogAC";
import {getOrdersMaker} from "../../redux/actions/makerOrdersAC";
import MyOrder from "../../components/MyOrder/MyOrder";


const MakerProfile = () => {

    const userData = useSelector(store => store.user)
    const makerOrders = useSelector(store => store.makerOrders)
    const withOrderList = makerOrders.filter(item => item.orderNumber)
    const catalogItems = useSelector(store => store.catalogItems)
    const dispatch = useDispatch();



    const resultList = withOrderList?.map(item => {
        let findItem = catalogItems.find(elem => item['PhysicalCopy.itemId'] === elem['PhysicalCopies.itemId'])
        return  {...item, photoUrl: findItem['Photos.photoUrl'], digitalPrice:  findItem.digitalPrice, description:findItem.description , itemTitle: findItem.itemTitle}
    })

    console.log('resultList ================', resultList)

    React.useEffect(() => {
        dispatch(getCatalogItems());
        dispatch(getOrdersMaker());
    }, [dispatch]);


    return (
        <>
            <div className="profileContainer">
                <div className='profileTitle'>My Profile</div>
                <div className="profileContent">
                    <div className="profileInfo">
                        {userData.avatarUrl ? (<img className='avatar' src={'http://localhost:4000/' + userData.avatarUrl + '.jpg'}/>) :
                            (<div className="avatar">{userData.firstName?.[0] + userData.lastName?.[0]}</div>)}
                        <div className='profileName'>{userData.firstName} {userData.lastName}</div>
                        <div className='profileEmail'>Maker</div>
                        <div className="profileButton">
                            <Link to='/profile/edit'><button className='buttonEdit'>Edit profile</button></Link>
                            {userData.isMaker ? (<Link className='linkButton' to="/profile/maker"><button className='buttonFlag'>
                                <img className='avatarButtonImg' src={'http://localhost:4000/' + 'buttonMaker' + '.png'} alt="ava"/>
                                Maker profile</button></Link>) : null}
                            {userData.isCreator ? (<Link className='linkButton' to="/profile/creator"><button  className='buttonFlag'>
                                <img className='avatarButtonImg' src={'http://localhost:4000/' + 'buttonCreator' + '.png'} alt="ava"/>
                                Creator profile</button></Link>) : null}
                            <button className='buttonLogout'>Log out</button>
                        </div>
                    </div>

                    <div className="profileActions">
                        <div className="actionsNavigations">
                            <div className='actionsItem' >Orders</div>
                        </div>
                        <div className="actionsItems">
                            <div className='itemProfileContent'>
                                {resultList.map(cart => <MakerOrder order={cart} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakerProfile;
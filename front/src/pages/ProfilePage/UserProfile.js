import React, {useEffect, useState} from 'react';
import './UserProfile.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const UserProfile = () => {

    const userData = useSelector(store => store.user)

    const [activeActions, setActiveActions] = useState(1)

        const actionsItem = (actions) => {
            switch (actions) {
                case 1:
                    return (<div className='itemProfileContent'>you don't have Orders</div>);
                case 2:
                    return (<div className='itemProfileContent'>you don't have Downloads</div>);
                case 3:
                    return (<div className='itemProfileContent'>Settings</div>);
                default :
                    return (<div className='itemProfileContent'>you don't have orders</div>);
            }
        }

    return (
        <>
            <div className="profileContainer">
                <div className='profileTitle'>My Profile</div>
                <div className="profileContent">
                    <div className="profileInfo">
                        {userData.avatarUrl ? (<img className='avatar' src={'http://localhost:4000/' + userData.avatarUrl + '.jpg'}/>) :
                            (<div className="avatar">{userData.firstName[0] + userData.lastName[0]}</div>)}
                        <div className='profileName'>{userData.firstName} {userData.lastName}</div>
                        <div className='profileEmail'>{userData.email}</div>
                        <div className="profileButton">
                            <Link to='/profile/edit'><button className='buttonEdit'>Edit profile</button></Link>
                            {userData.isMaker ? (<Link className='linkButton' to="/profile/maker"><button className='buttonFlag'>
                                <img className='avatarButtonImg' src={'http://localhost:4000/' + 'buttonMaker' + '.png'} alt="ava"/>
                                Maker profile
                            </button></Link>) : null}
                            {userData.isCreator ? (<Link className='linkButton' to="/profile/creator"><button  className='buttonFlag'>
                                <img className='avatarButtonImg' src={'http://localhost:4000/' + 'buttonCreator' + '.png'} alt="ava"/>
                                Creator profile
                            </button></Link>) : null}
                            <button className='buttonLogout'>Log out</button>
                        </div>
                    </div>

                    <div className="profileActions">
                        <div className="actionsNavigations">
                            <div className='actionsItem' onClick={() => setActiveActions(1)}>My Orders</div>
                            <div className='actionsItem' onClick={() => setActiveActions(2)}>My Downloads</div>
                            <div className='actionsItem' onClick={() => setActiveActions(3)}>Settings</div>
                        </div>
                        <div className="actionsItems">
                            {actionsItem(activeActions)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
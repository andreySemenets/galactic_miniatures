import React from 'react';
import './UserProfile.css'
import {Link} from "react-router-dom";

const UserProfile = () => {
    return (
        <>
            <div className="profileContainer">
                <div className='profileTitle'>My Profile</div>
                <div className="profileContent">
                    <div className="profileInfo">
                        <div className="avatar">
                            <p>User</p>
                        </div>
                        <div className='profileName'>User name</div>
                        <div className='profileEmail'>email</div>
                        <div className="profileButton">
                            <Link to='/profile/edit'><button className='buttonEdit'>Edit profile</button></Link>
                            <Link  to="/profile/maker"><button className='buttonFlag'>Maker profile</button></Link>
                            <Link  to="/profile/creator"><button  className='buttonFlag'>Creator profile</button></Link>
                            <button className='buttonLogout'>Log out</button>
                        </div>
                    </div>

                    <div className="profileActions">
                        <div className="actionsNavigations">
                            <div className='actionsItem' onClick={() => console.log('actionsItem')}>My Orders</div>
                            <div className='actionsItem'>My Downloads</div>
                            <div className='actionsItem'>Settings</div>
                        </div>
                        <div className="actionsItems">
                            Компоненты actiona
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
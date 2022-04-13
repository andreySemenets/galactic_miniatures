import React from 'react';
import './UserProfile.css'
import {Link} from "react-router-dom";

const MakerProfile = () => {
    return (
        <>
            <div className="profileContainer">
                <div className='profileTitle'>My Profile</div>
                <div className="profileContent">
                    <div className="profileInfo">
                        <div className="avatar">
                            <p>Maker</p>
                        </div>
                        <div className='profileName'>User name</div>
                        <div className='profileEmail'>Maker</div>
                        <div className="profileButton">
                            <Link to='/profile/edit'><button className='buttonEdit'>Edit profile</button></Link>
                            <Link  to="/profile/creator"><button className='buttonFlag'>Creator profile</button></Link>
                            <Link  to="/profile"><button className='buttonFlag'>User profile</button></Link>
                            <button className='buttonLogout'>Log out</button>
                        </div>
                    </div>

                    <div className="profileActions">
                        <div className="actionsNavigations">
                            <div className='actionsItem' >Orders</div>
                        </div>
                        <div className="actionsItems">
                            Render Listing
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakerProfile;
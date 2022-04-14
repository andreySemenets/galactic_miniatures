import React from 'react';
import './UserProfile.css'
import {Link} from "react-router-dom";

const CreatorProfile = () => {
    return (
        <>
            <div className="profileContainer">
                <div className='profileTitle'>My Profile</div>
                <div className="profileContent">
                    <div className="profileInfo">
                        <div className="avatar">
                            <p>Creator</p>
                        </div>
                        <div className='profileName'>User name</div>
                        <div className='profileEmail'>Creator</div>
                        <div className="profileButton">
                            <Link to='/profile/edit'><button className='buttonEdit'>Edit profile</button></Link>
                            <Link  to="/profile/maker"><button  className='buttonFlag'>Maker profile</button></Link>
                            <Link  to="/profile"><button className='buttonFlag'>User profile</button></Link>
                            <button className='buttonLogout'>Log out</button>
                        </div>
                    </div>

                    <div className="profileActions">
                        <div className="actionsNavigations addListing">
                            <div className='actionsItem'>My Listing</div>
                            <Link to='/profile/listing'><button className='buttonFlag'>+ Add Listing</button></Link>
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

export default CreatorProfile;
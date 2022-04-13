import React from 'react';
import './UserProfile.css'
import {Link} from "react-router-dom";

const EditProfile = () => {
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
                            <div className='actionsItem'>Edit profile</div>
                        </div>
                        <div className="actionsItems">
                            Форма Редактирования данных узера
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
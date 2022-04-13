import React from 'react';
import '../UserProfile.css'
import './EditProfile.css'
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
                            <form className='editItems'>
                                <div className="labelInput">
                                    <label htmlFor="firstName">First name</label>
                                    <input className='editInput' type="text" id='firstName'/>
                                </div>

                                <div className="labelInput">
                                    <label htmlFor="lastName">Last name</label>
                                    <input className='editInput' type="text" id='lastName'/>

                                </div>

                                <div className="labelInput">
                                    <label htmlFor="inputEmail">Your email</label>
                                    <input className='editInput' type="email" id='inputEmail'/>

                                </div>

                                <div className="labelInput">
                                    <label htmlFor="inputTel">Phone number</label>
                                    <input className='editInput' type="tel" id='inputTel'/>
                                </div>

                                <button  className='buttonFlag saveProfile'>Save</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
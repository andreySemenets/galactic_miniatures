import React, {useState} from 'react';
import '../UserProfile.css'
import './EditProfile.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editingTypingProfile, submitEditUser} from "../../../redux/actions/userAC";


const EditProfile = () => {
    const userData = useSelector(store => store.user)
    const dispatch = useDispatch()
    const [userProfile, setUserProfile] = useState({userData})

    console.log(userData.phone)

    const submitEditProfile = async (e) => {
        e.preventDefault()
        dispatch(submitEditUser(userData))
    }

    return (
        <>
            <div className="profileContainer">
                <div className='profileTitle'>My Profile</div>
                <div className="profileContent">
                    <div className="profileInfo">
                        <div className="avatar">
                            <p>User</p>
                        </div>
                        <div className='profileName'>{userProfile.userData.firstName} {userProfile.userData.lastName}</div>
                        <div className='profileEmail'>{userProfile.userData.email}</div>
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
                            <form className='editItems' onSubmit={submitEditProfile}>
                                <div className="labelInput">
                                    <label htmlFor="firstName">First name</label>
                                    <input className='editInput' type="text" id='firstName' name='firstName'
                                           onChange={(e) => dispatch(editingTypingProfile(e))}
                                           value={userData.firstName}/>
                                </div>

                                <div className="labelInput">
                                    <label htmlFor="lastName">Last name</label>
                                    <input className='editInput' type="text" id='lastName' name='lastName'
                                           onChange={(e) => dispatch(editingTypingProfile(e))}
                                           value={userData.lastName}/>
                                </div>

                                <div className="labelInput">
                                    <label htmlFor="inputEmail">Your email</label>
                                    <input className='editInput' type="email" id='inputEmail' name='email'
                                           onChange={(e) => dispatch(editingTypingProfile(e))}
                                           value={userData.email}/>
                                </div>

                                <div className="labelInput">
                                    <label htmlFor="inputTel">Phone number</label>
                                    <input className='editInput' type="tel" id='inputTel' name='phone'
                                           onChange={(e) => dispatch(editingTypingProfile(e))}
                                           value={userData.phone}/>
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
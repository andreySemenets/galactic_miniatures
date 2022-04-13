import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { checkUserAuth } from './redux/actions/userAC';
import PrimaryAppBar from './components/PrimaryAppBar/PrimaryAppBar';
import ModelPage from './components/ModelPage/ModelPage';
import UserProfile from "./pages/ProfilePage/UserProfile";
import CreatorProfile from "./pages/ProfilePage/CreatorProfile";
import MakerProfile from "./pages/ProfilePage/MakerProfile";
import EditProfile from "./pages/ProfilePage/EditProfile";



const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(checkUserAuth());
		}
	}, [dispatch]);

	return (
		<>
      <PrimaryAppBar />
			<Navbar />
			<Routes>
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/registration" element={<Registration />} />
				<Route path="/profile" element={<UserProfile />} />
				<Route path="/profile/creator" element={<CreatorProfile />} />
				<Route path="/profile/maker" element={<MakerProfile />} />
				<Route path="/profile/edit" element={<EditProfile />} />
				{/* TODO: ПОТОМ ПЕРЕДЕЛАТЬ НА ПАРАМС ЗАПРОС!!! */}
				<Route path="/models" element={<ModelPage />} />
			</Routes>
		</>
	);
};

export default App;

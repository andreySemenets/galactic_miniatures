import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { checkUserAuth } from './redux/actions/userAC';
import PrimaryAppBar from './components/PrimaryAppBar/PrimaryAppBar';
import ModelPage from './components/ModelPage/ModelPage';

import UserProfile from "./pages/ProfilePage/UserProfile";
import CreatorProfile from "./pages/ProfilePage/CreatorProfile";
import MakerProfile from "./pages/ProfilePage/MakerProfile";
import EditProfile from "./pages/ProfilePage/EditProfile/EditProfile";
import MainPage from './components/MainPage/MainPage';
import EditListing from './components/EditListing/EditListing';
import Reg from './components/Reg/Reg';
import Search from './components/Search/Search';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import SortByCategoryPage from './pages/SortByCategoryPage/SortByCategoryPage';

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
				<Route path='/' element={<MainPage />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/registration" element={<Reg />} />
				<Route path="/profile" element={<UserProfile />} />
				<Route path="/profile/creator" element={<CreatorProfile />} />
				<Route path="/profile/maker" element={<MakerProfile />} />
				<Route path="/profile/edit" element={<EditProfile />} />
				<Route path="/models/:id" element={<ModelPage />} />
				<Route path="/models/edit" element={<EditListing />} />
				<Route path="/search" element={<Search />} />
				<Route path="/user/id/shoppingcart" element={<ShoppingCartPage />} />
				<Route path='/sort' element={<SortByCategoryPage />} />
			</Routes>
		</>
	);
};

export default App;

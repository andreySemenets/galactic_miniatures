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
import MainPage from './components/MainPage/MainPage';

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
				<Route path="/auth/registration" element={<Registration />} />
				{/* TODO: ПОТОМ ПЕРЕДЕЛАТЬ НА ПАРАМС ЗАПРОС!!! */}
				<Route path="/models" element={<ModelPage />} />
			</Routes>
		</>
	);
};

export default App;

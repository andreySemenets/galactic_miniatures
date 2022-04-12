import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { regUser } from '../../redux/actions/userAC';

const Copyright = (props) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="#">
				Galactic miniatures
			</Link>
			{' '}
			{new Date().getFullYear()}
			.
		</Typography>
	);
};

const Registration = () => {
	const [regInput, setRegInput] = React.useState({});
	const errorOnReg = useSelector((store) => store.errorOnReg);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (user.email) {
			navigate('/');
		}
	}, [user.email]);

	const handleChange = (e) => {
		setRegInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		console.log(regInput);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(regUser(regInput));
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="name"
								label="Full Name"
								name="name"
								autoComplete="name"
								onChange={handleChange}
								value={regInput.name ?? ''}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={handleChange}
								value={regInput.email ?? ''}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
								placeholder="Min length of password 5 charecters"
								onChange={handleChange}
								value={regInput.password ?? ''}
							/>
						</Grid>
						{errorOnReg
							? <Grid item xs={12} sx={{ color: 'red' }}>{errorOnReg}</Grid>
							: null}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/auth/login" variant="body2">
								Already have an account? &nbsp;Log In
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
};

export default Registration;

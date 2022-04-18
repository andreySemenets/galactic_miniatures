import { Button, Card, CardContent, CardMedia, Container, FormControl, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { Box } from '@mui/system';
import CatalogCardItem from '../CatalogCardItem/CatalogCardItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ModelPage() {

	const [cart, setCart] = useState([]); // состояние корзины
	const [model, setModel] = useState({}); // данные модели для страницы
	const [quantity, setQuantity] = useState({ value: Number(1) }); // счетчик количества
	const [inputs, setInputs] = useState({}); // инпуты
	const [totalCost, setTotalCost] = useState({ value: Number(0) });

	console.log('FORM DATA:', cart);

	const { id } = useParams();
	useEffect(() => {
		axios.get(`http://localhost:4000/items/${id}`)
			.then((response) => {
				setModel(response.data);
			});
	}, [id]);

	// Расчет суммы заказа
	useEffect(() => {
		setTotalCost({ value: Number(model.digitalPrice) })
	}, [model.digitalPrice]);

	// Расчет суммы заказа в зависимости от количества
	useEffect(() => {
		setTotalCost({ value: parseFloat((model.digitalPrice + inputs.scale)).toFixed(2) * Number(quantity.value) })
	}, [quantity.value]);

	const colorSelectHandler = (event) => {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};

	const scaleSelectHandler = (event) => {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
		setTotalCost({ value: (model.digitalPrice + event.target.value) });
		setQuantity({ value: Number(1) });
	};

	const addToCartHandler = (event) => {
		event.preventDefault();

		const formData = {
			id,
			title: model.itemTitle,
			color: inputs.color,
			scale: inputs.scale,
			quantity: quantity.value,
			total: totalCost.value,
		};

		setCart(prev => [...prev, formData]);
		setInputs({});
		setQuantity({ value: Number(1) });
		setTotalCost({ value: Number(model.digitalPrice) });
	};

	return (
		<Container className={styles.myMainContainer} maxWidth="xl">
			<Box sx={{
				width: "100%",
				marginBottom: "125px",
				display: 'flex',
				justifyContent: 'space-between'
			}}>
				<Container>
					<Box sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						marginBottom: "20px"
					}}>
						<CardMedia
							component="img"
							alt={`${model.itemTitle}-pic`}
							width="614"
							height="392"
							image={'http://localhost:4000/' + model?.['Photos.photoUrl'] + '.jpg'}
						/>

					</Box>

					<Box
						component="div"
						sx={{
							width: '100%',
							height: 102,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<IconButton color="inherit"
							sx={{
								border: '2px solid #1F2937',
								borderRadius: '5px',
								width: 40,
								height: 102,
							}}
						><ArrowBackIosNewIcon /></IconButton>

						<Typography> Img1 </Typography>
						<Typography> Img2 </Typography>
						<Typography> Img3 </Typography>

						<IconButton color="inherit" sx={{
							border: '2px solid #1F2937',
							borderRadius: '5px',
							width: 40,
							height: 102,
						}} ><ArrowForwardIosIcon /></IconButton>

					</Box>

					<Typography
						component="div"
						sx={{
							fontWeight: 'bold',
							marginTop: "50px",
							marginBottom: "15px"
						}}
					>Description</Typography>

					<Typography>{model.description}</Typography>
				</Container>


				<Box
					component="form"
					onSubmit={addToCartHandler}
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}} >

					<Typography
						component="h2"
						sx={{
							fontSize: '24',
							fontWeight: 'bold',
							wordSpacing: '4px',
							marginBottom: '16px'
						}}
					>{model.itemTitle}</Typography>

					<Typography
						variant="h4"
						component="span"
						sx={{
							marginBottom: '40px'
						}}
					>{totalCost.value} USD</Typography>


					<Card sx={{
						backgroundColor: '#1F2937',
						color: '#FFFFFF',
						heigth: 222,
						marginBottom: '40px'
					}}>
						<CardContent>
							<Stack
								spacing={1}
								direction="row">
								<LibraryAddCheckOutlinedIcon
									sx={{ color: 'blue' }}
								/>
								<Typography
									variant="h6"
									component="b">
									Digital copy available
								</Typography>
							</Stack>
							<Typography color="#6B7280">
								You can buy a Digital version of this model. The priceis fixed, the ability to select options is not available.
							</Typography>
						</CardContent>

						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<Button className={styles.modelPageBuyButton}> Buy digital for {model.digitalPrice} USD </Button>
						</Box>

					</Card>

					<Typography sx={{ marginBottom: "15px" }}> Color </Typography>
					<FormControl sx={{ color: "#1F2937", marginBottom: "40px" }} size="small">
						<Select
							name="color"
							onChange={colorSelectHandler} value={inputs.color ?? ''}
							sx={{
								border: '2px solid #1F2937',
								color: '#FFFFFF'
							}}
						>
							<MenuItem value={'Yellow'}>Yellow</MenuItem>
							<MenuItem value={'Green'}>Green</MenuItem>
							<MenuItem value={'Gray'}>Gray</MenuItem>
						</Select>
					</FormControl>

					<Typography sx={{ marginBottom: "15px" }}> Scale </Typography>
					<FormControl sx={{ marginBottom: "40px" }} size="small">
						<Select
							name="scale"
							onChange={scaleSelectHandler} value={inputs.scale ?? ''}
							sx={{
								border: '2px solid #1F2937',
								color: '#FFFFFF'
							}}
							id="scale-select"
						>
							<MenuItem value={2.99}>15mm - 2.99$</MenuItem>
							<MenuItem value={3.99}>28mm - 3.99$</MenuItem>
							<MenuItem value={4.99}>32mm - 4.99$</MenuItem>
						</Select>
					</FormControl>

					<Typography
						sx={{
							marginBottom: "15px"
						}}
					> Quantity </Typography>

					<Box
						component="div"
						sx={{
							border: '2px solid #1F2937',
							borderRadius: '5px',
							width: 146,
							height: 45,
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'center',
							marginBottom: "40px"
						}}
					>
						<IconButton color="inherit" disabled={quantity.value === 1}
							onClick={() => { setQuantity({ value: quantity.value - Number(1) }) }} ><RemoveIcon /></IconButton>
						<Typography> {quantity.value} </Typography>
						<IconButton color="inherit"
							onClick={() => { setQuantity({ value: quantity.value + Number(1) }) }}><AddIcon /></IconButton>
					</Box>

					<Stack spacing={2} direction="row" container="true" justifyContent="center">
						<Button type="submit" className={styles.modelPageAddToCartButton} size="large" variant="contained">ADD TO CART</Button>
						<Button className={styles.modelPageAddToFavorite} children={<FavoriteBorderSharpIcon />}></Button>
					</Stack>
				</Box>

			</Box>
			<Container maxWidth="xl">
				<Typography
					component="span"
					sx={{ fontWeight: 'bold' }}
				>Customers also bought these</Typography>

				<Box sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					marginTop: "30px",
					flexWrap: 'wrap',
				}}>
					<CatalogCardItem />
					<CatalogCardItem />
					<CatalogCardItem />
					<CatalogCardItem />
				</Box>
			</Container>
		</Container >
	)
}

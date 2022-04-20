import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addModelToCart } from '../../redux/actions/cartAC';
import { setModel } from '../../redux/actions/modelAC';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	FormControl,
	IconButton,
	MenuItem,
	Select,
	Stack,
	Typography
} from '@mui/material'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import styles from './style.module.css'
import CatalogCardItem from '../CatalogCardItem/CatalogCardItem';
import axios from 'axios';




export default function ModelPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const cart = useSelector((store) => store.cart);
	const model = useSelector((store) => store.model);
	const user = useSelector((store) => store.user);

	const [quantity, setQuantity] = useState({ value: Number(1) }); // счетчик количества
	const [inputs, setInputs] = useState({}); // инпуты
	const [totalCost, setTotalCost] = useState({ value: Number(0) });
	const [alsoBuy, setAlsoBuy] = useState([]);
	const photosArr = model['Photos.photoUrl'];

	const [activeActions, setActiveActions] = useState(0)
	console.log('photosArr >>>>>', photosArr);

	const actionsItem = (actions) => {
		switch (actions) {
			case 0:
				return (<img
					style={{
						width: '614px',
						height: '392px',
					}}
					src={'http://localhost:4000/' + photosArr?.[0]}
					alt="here0"
					loading="lazy"
				/>);
			case 1:
				return (<img
					style={{
						width: '614px',
						height: '392px',
					}}
					src={'http://localhost:4000/' + photosArr[1]}
					alt="here1"
					loading="lazy"
				/>);
			case 2:
				return (<img
					style={{
						width: '614px',
						height: '392px',
					}}
					src={'http://localhost:4000/' + photosArr[2]}
					alt="here2"
					loading="lazy"
				/>);
			default:
				return (<img
					style={{
						width: '614px',
						height: '392px',
					}}
					src={'http://localhost:4000/' + photosArr[0]}
					alt="here0"
					loading="lazy"
				/>);
		}
	}


	useEffect(() => {
		const modelId = id;
		dispatch(setModel(modelId));
	}, []);

	// Расчет суммы заказа
	useEffect(() => {
		if (model.digitalPrice) {
			setTotalCost({ value: Number(model.digitalPrice) });
		}
	}, [model.digitalPrice]);

	// TOOOOOOODDDOOOOOOOOOOOOO
	useEffect(() => {
		const modelId = id;
		axios.get('http://localhost:4000/items', modelId)
			.then((response) =>
				setAlsoBuy(response.data));
	}, []);

	// Расчет суммы заказа в зависимости от количества
	useEffect(() => {
		setTotalCost({
			value: (parseFloat((model.digitalPrice + inputs.scale)) * Number(quantity.value)).toFixed(2),
		});
	}, [quantity.value]);

	// Выбор цвета модели
	const colorSelectHandler = (event) => {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};

	// Выбор масштаба модели
	const scaleSelectHandler = (event) => {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
		setTotalCost({ value: (model.digitalPrice + event.target.value) });
		setQuantity({ value: Number(1) });
	};

	const addToCartHandler = (event) => {
		const formData = {
			id,
			userId: user.id,
			title: model.itemTitle,
			quantity: quantity.value,
			total: totalCost.value,
		};

		dispatch(addModelToCart(event, formData))
		setInputs({});
		setQuantity({ value: Number(1) });
		setTotalCost({ value: Number(model.digitalPrice) });
		navigate(`/user/${user.id}/shoppingcart`)
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

					{/* ОСНОВНОЕ ФОТО */}
					<Box className={styles.modelPageMainImg}>

						{/* {model['Photos.photoUrl']
							? <CardMedia
								component="img"
								alt={`${model.itemTitle}-pic`}
								width="614"
								height="392"
								image={'http://localhost:4000/' + model?.['Photos.photoUrl']?.[0]}
							/>
							: <Box sx={{ display: 'flex', justifyContent: 'center' }}>
								<CircularProgress sx={{ color: 'blue' }} />
							</Box>
						} */}

						<div>
							{actionsItem(activeActions)}
						</div>

					</Box>




					{/* МИНИАТЮРЫ ФОТО */}
					<Box component="div" className={styles.modelPageCarouselBox} >

						{/* КНОПКА НАЗАД */}
						<IconButton className={styles.modelPageCarouselBtn} onClick={() => setActiveActions(prev => prev - 1)} ><ArrowBackIosNewIcon /></IconButton>

						<Stack direction="row" alignItems="center" spacing={2}>
							{photosArr?.length
								? photosArr.map((el) => (
									<Box key={el} >
										<img
											style={{
												width: '150px',
												height: '105px',
											}}
											src={'http://localhost:4000/' + el}
											alt="here"
											loading="lazy"
										/>
									</Box>
								))
								: null}
						</Stack>

						{/* КНОПКА ВПЕРЕД */}
						<IconButton className={styles.modelPageCarouselBtn} onClick={() => setActiveActions(prev => prev + 1)}>
							<ArrowForwardIosIcon />
						</IconButton>

					</Box>





					{/* ОПИСАНИЕ */}
					<Typography className={styles.modelPageDescriptionTitle} component="div">Description</Typography>

					<Typography>{model.description}</Typography>

				</Container>

				<Box component="form" onSubmit={addToCartHandler}
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}} >

					<Typography className={styles.modelPageModelTitle}>{model.itemTitle}</Typography>


					{model.digitalPrice
						? <Typography className={styles.modelPageModelTotalCost} variant="h4">{totalCost.value} USD</Typography>
						: <Box> <CircularProgress sx={{ color: 'blue' }} /> </Box>
					}


					<Card className={styles.modelPageModelBuyDigital}>
						<CardContent>
							<Stack spacing={1} direction="row">

								<LibraryAddCheckOutlinedIcon sx={{ color: 'blue' }} />

								<Typography variant="h6" component="b">
									Digital copy available
								</Typography>

							</Stack>

							<Typography color="#6B7280">
								You can buy a Digital version of this model. The priceis fixed, the ability to select options is not available.
							</Typography>

						</CardContent>

						<Box className={styles.modelPageModelBuyDigitalBtn}>
							<Button className={styles.modelPageBuyButton}> Buy digital for {model.digitalPrice} USD </Button>
						</Box>

					</Card>

					{/* COLOR SELECTOR */}
					<Typography sx={{ marginBottom: "15px" }}> Color </Typography>
					<FormControl sx={{ color: "#1F2937", marginBottom: "40px" }} size="small">

						<Select name="color" id="color-select"
							onChange={colorSelectHandler} value={inputs.color ?? ''}
							className={styles.modelPageSelect}>

							<MenuItem value={model?.['PhysicalCopies.color']}>{model?.['PhysicalCopies.color']}</MenuItem>
						</Select>

					</FormControl>

					{/* SCALE SELECTOR */}
					<Typography sx={{ marginBottom: "15px" }}> Scale </Typography>
					<FormControl sx={{ marginBottom: "40px" }} size="small">

						<Select name="scale" id="scale-select"
							onChange={scaleSelectHandler} value={inputs.scale ?? ''}
							className={styles.modelPageSelect}>

							<MenuItem value={Number(model?.['PhysicalCopies.price'])}>
								{model?.['PhysicalCopies.scale']} - {model?.['PhysicalCopies.price']} $
							</MenuItem>

						</Select>

					</FormControl>

					<Typography> Quantity </Typography>

					<Box className={styles.modelPageCounter} component="div">
						<IconButton color="inherit" disabled={quantity.value === 1}
							onClick={() => { setQuantity({ value: quantity.value - Number(1) }) }} ><RemoveIcon /></IconButton>
						<Typography> {quantity.value} </Typography>
						<IconButton color="inherit" disabled={!inputs.scale}
							onClick={() => { setQuantity({ value: quantity.value + Number(1) }) }}><AddIcon /></IconButton>
					</Box>

					<Stack spacing={2} direction="row" container="true" justifyContent="center">
						<Button disabled={!inputs.scale || !inputs.color} type="submit"
							className={styles.modelPageAddToCartButton} size="large" variant="contained">
							ADD TO CART
						</Button>
						<Button className={styles.modelPageAddToFavorite} children={<FavoriteBorderSharpIcon />}></Button>
					</Stack>
				</Box>

			</Box >

			<Container maxWidth="xl">
				<Typography sx={{ fontWeight: 'bold' }}>Customers also bought these</Typography>

				<Box className={styles.modelPageAlsoBuyBox}>

					{alsoBuy.map((el) => (<CatalogCardItem key={el.id} card={el} />))}

				</Box>
			</Container>
		</Container >
	)
}

import { Button, Card, CardContent, CardMedia, Container, FormControl, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'
import styles from './style.module.css'
import { Box } from '@mui/system';
import CatalogCardItem from '../CatalogCardItem/CatalogCardItem';

export default function ModelPage() {

	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
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
							alt="random-pic"
							width="614"
							height="392"
							image="https://img1.akspic.ru/previews/8/3/8/3/6/163838/163838-apelsin-abstraktnoe_iskusstvo-krasochnost-seryj_cvet-krasnyj_cvet-550x310.jpg"
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


					<Typography>
						Low poly isometric building and house Low poly isometric building and houseLow poly isometric building and house
						Low poly isometric building and house Low poly isometric building and houseLow poly isometric building and house
						Low poly isometric building and house Low poly isometric building and houseLow poly isometric building and house
					</Typography>
				</Container>


				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}} >
					<Typography
						component="span"
						sx={{
							fontSize: '24',
							fontWeight: 'bold',
							wordSpacing: '4px',
							marginBottom: '16px'
						}}
					>Low poly isometric building and house dioramas</Typography>
					<Typography
						variant="h4"
						component="span"
						sx={{
							marginBottom: '40px'
						}}
					>50,00 USD</Typography>


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
							<Button className={styles.modelPageBuyButton}> Buy digital for 69.90 USD </Button>
						</Box>

					</Card>


					<Typography sx={{ marginBottom: "15px" }}> Polygons </Typography>
					<FormControl sx={{ color: "#1F2937", marginBottom: "40px" }} size="small">

						<Select
							sx={{
								border: '2px solid #1F2937',
							}}
							id="polygons-select"
							value={age}
							onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<Typography sx={{ marginBottom: "15px" }}> Option 2 </Typography>
					<FormControl sx={{ color: "#1F2937", marginBottom: "40px" }} size="small">
						<Select
							sx={{
								border: '2px solid #1F2937',
							}}
							id="option2-select"
							value={age}
							onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<Typography sx={{ marginBottom: "15px" }}> Option 3 </Typography>
					<FormControl sx={{ marginBottom: "40px" }} size="small">
						<Select
							sx={{
								border: '2px solid #1F2937',
							}}
							id="option3-select"
							value={age}
							onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
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
						<IconButton color="inherit" ><RemoveIcon /></IconButton>
						<Typography> 1 </Typography>
						<IconButton color="inherit" ><AddIcon /></IconButton>

					</Box>

					<Stack spacing={2} direction="row" container justifyContent="center">
						<Button className={styles.modelPageAddToCartButton} size="large" variant="contained">ADD TO CART</Button>
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

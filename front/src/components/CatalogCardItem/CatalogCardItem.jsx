import React from 'react';
import { Box, Button, Card, CardActions, CardMedia, Typography } from '@mui/material';
import style from './style.module.css'

function CatalogCardItem() {
	return (
		<Box className={style.catalogCardItemContainer}>
			<Card className={style.catalogCardItem}>
				<CardMedia
					component="img"
					alt="random-pic"
					image="https://i.pinimg.com/originals/39/cb/76/39cb76a50c47b2ae50f7ef130c0fd5ba.jpg"
				>
				</CardMedia>
				<CardActions className={style.catalogCardItemButtonGroup}>
					<Button size="small" className={style.catalogCardItemButton}>50 USD</Button>
					<Button size="small" className={style.catalogCardItemButton}>Space marines</Button>
				</CardActions>
			</Card >
			<Typography> Low poly isometric building and house dioramas </Typography>
		</Box>
	);
};

export default CatalogCardItem;

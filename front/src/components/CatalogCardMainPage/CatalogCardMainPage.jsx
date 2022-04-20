import React from 'react';
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardMedia,
    Typography,
} from '@mui/material';
import style from './style.module.css';

function CatalogCardMainPage( { item }) {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(`/models/${item.id}`)
    }

    return (
        <Box onClick={clickHandler} className={style.catalogCardItemContainer}>
            <Card className={style.catalogCardItem}>
                <CardMedia
                    sx={{ height: '277px', width: '297px' }}
                    component="img"
                    alt="random-pic"
                    image={'http://localhost:4000/'+ item?.['Photos.photoUrl']}
                ></CardMedia>
                <CardActions className={style.catalogCardItemButtonGroup}>
                    <Button
                        size="small"
                        className={style.catalogCardItemButton}
                    >
                        {item?.digitalPrice} USD
                    </Button>
                    <Button
                        size="small"
                        className={style.catalogCardItemButton}
                    >
                        {item?.itemTitle}
                    </Button>
                </CardActions>
            </Card>
            <Typography>
                {/* {item?.['Category.categoryTitle']} */}
            </Typography>
        </Box>
    );
}

export default CatalogCardMainPage;

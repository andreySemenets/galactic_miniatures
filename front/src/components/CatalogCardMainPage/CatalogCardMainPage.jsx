import React from 'react';
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

    return (
        <Box className={style.catalogCardItemContainer}>
            <Card className={style.catalogCardItem}>
                <CardMedia
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

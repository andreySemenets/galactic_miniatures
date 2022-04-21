import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSortedCategories } from '../../redux/actions/sortAC';
import SearchItem from '../../components/SearchItem/SearchItem';
import { Box, CircularProgress } from '@mui/material';
import './SortByCategoryPage.css';

const SortByCategoryPage = () => {
    const sortedByCategories = useSelector((store) => store.sortedByCategories);
    const { cat, sub } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getSortedCategories(cat, sub)
        );
    }, [dispatch, cat, sub]);

    return (
        <>
            {sortedByCategories ? (
                <>
                    <Box className="wishContainer">
                        <div className="wishListTitle">Sorted by category</div>
                    </Box>
                    <Box className="sortedByCategories">
                        {sortedByCategories[0] &&
                            sortedByCategories.map((item) => (
                                <SearchItem key={item.id} item={item} />
                            ))}
                    </Box>
                </>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
        </>
    );
};

export default SortByCategoryPage;

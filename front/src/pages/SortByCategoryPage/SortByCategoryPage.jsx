import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogCardItem from '../../components/CatalogCardItem/CatalogCardItem';
import SearchItem from '../../components/SearchItem/SearchItem';
import { getSortedCategories, setCategoryFrSesStorage } from '../../redux/actions/sortAC';
import './SortByCategoryPage.css'

const SortByCategoryPage = () => {
    const sortedByCategories = useSelector((store) => store.sortedByCategories);
    const dispatch = useDispatch();

    // React.useEffect(() => {
    //     if ((window.sessionStorage.getItem("sortedByCategories"))) {
    //         dispatch(setCategoryFrSesStorage(JSON.parse(window.sessionStorage.getItem("sortedByCategories"))));
    //     }
    //   });

    // React.useEffect(() => {
    //     window.sessionStorage.setItem("sortedByCategories", sortedByCategories);
    //   }, [sortedByCategories]);

    return (
        <div className='sortedByCategories'>
            {sortedByCategories[0] &&
                sortedByCategories.map((item) => (
                    <SearchItem key={item.id} item={item} />
                ))}
        </div>
    );
};

export default SortByCategoryPage;

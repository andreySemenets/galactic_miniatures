import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getSortedCategories } from '../../redux/actions/sortAC';

export default function DropdownNav({ category }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [firstCategory, setFirstCategory] = React.useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setFirstCategory(event.target.innerText.toLowerCase());
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        // console.log(Boolean(event.target.innerText));
        if (event.target.innerText){
             const subCategory = event.target.innerText.toString();
            dispatch(getSortedCategories(firstCategory, subCategory))
            navigate('/sort')
        }
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white' }}
            >
                {category}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Vehicles</MenuItem>
                <MenuItem onClick={handleClose}>Characters</MenuItem>
                <MenuItem onClick={handleClose}>Locations</MenuItem>
                <MenuItem onClick={handleClose}>Weapons</MenuItem>
            </Menu>
        </div>
    );
}

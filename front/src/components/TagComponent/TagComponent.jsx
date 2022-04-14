import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function TagComponent({ tag, tags, setTags }) {
	const deleteHandler = ({ id }) => {
		console.log('delete click', id);
		setTags(tags.filter((tag) => tag.id !== id))
	}
	return (
		<Box sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: "5px",
			height: "40px",
			backgroundColor: "#FFFFFF",
			color: "#2C2C34",
			marginRight: "10px",
		}}>
			{tag.tagTitle}
			<IconButton sx={{ color: "#0054FF" }} onClick={() => { deleteHandler(tag) }}>
				<CloseIcon />
			</IconButton>
		</Box >
	)
}

export default TagComponent

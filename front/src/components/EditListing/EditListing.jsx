import React, { useState } from 'react';
import {
	Box,
	Container,
	TextField,
	Typography,
	Button,
	Select,
	MenuItem,
	Dialog,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import style from './style.module.css';
import TagComponent from '../TagComponent/TagComponent';

function EditListing() {

	const [inputs, setInputs] = useState({});
	const [formData, setFormData] = useState([]);
	const [tags, setTags] = useState([]);

	const tagsHandler = () => {
		setTags((prev) => ([...prev, { id: Date.now(), tagTitle: inputs.tags }]));
	}

	const updateHandler = (event) => {
		event.preventDefault();

		const formData = {
			id: Date.now(),
			title: inputs.title,
			price: inputs.priceForDigital,
			category1: inputs.category1,
			category2: inputs.category2,
			description: inputs.description,
			tags: tags.map((tag) => tag.tagTitle),
			scale: inputs.scale
		}

		setFormData((prev) => ([...prev, formData]))
		setInputs({});
		setTags([]);
	};
	console.log('formDATA >>>', formData);

	const inputsHandler = (event) => {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};

	return (
		<Container className={style.editListingMainContainer}>
			<Box component="form" noValidate className={style.editListingForm}
				onSubmit={updateHandler}>
				<Typography className={style.editListingMainTitle}>Edit Listing</Typography>

				<Box className={style.editListingContentContainer}>

					<Typography className={style.editListingSecondaryTitle}>Photos</Typography>

					{/* UPLOAD PHOTO */}
					<Box className={style.editListingUploadFotoContainer}>
						<Box className={style.editListingUploadFotoMiniature}>

							{/* 
							<Input accept="image/*" id="contained-button-file" multiple type="file" />
							<Button variant="contained" component="span">
								Upload
							</Button> */}

							{/* ХАРДКОД ДЛЯ НАГЛЯДНОСТИ */}
							<img
								style={{ width: "150px", height: "105px" }}
								src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"
								alt="here"
								loading="lazy"
							/>
						</Box>

						<Box className={style.editListingUploadFotoBox}></Box>

					</Box>

					<Typography className={style.editListingSecondaryTitle}>Files</Typography>

					{/* UPLOAD ZIP */}
					<Box className={style.editListingInputAndButton}>
						<TextField
							placeholder="Please upload file pack without supports"
							disabled
							size="small"
							sx={{ width: "330px", height: "inherit" }} />
						<Button
							variant="contained"
							component="label"
							sx={{ height: "inherit" }}>
							<FileDownloadIcon />
							Select File
							<input
								type="file"
								hidden
							/>
						</Button>
					</Box>

					<Box className={style.editListingInputAndButton}>
						<TextField
							disabled
							size="small"
							sx={{ width: "330px", height: "inherit" }} />
						<Button
							variant="contained"
							component="label"
							sx={{ height: "inherit" }}>
							<DeleteOutlineOutlinedIcon />
							Delete File
						</Button>
					</Box>

					<Typography className={style.editListingCommonTitle}>Price for digital files</Typography>
					<TextField size="small" className={style.editListingCommonInput}
						name="priceForDigital" onChange={inputsHandler} value={inputs.priceForDigital ?? ''} />

					<Typography className={style.editListingSecondaryTitle}>Listing Details</Typography>

					<Typography className={style.editListingCommonTitle}>Title</Typography>
					<TextField size="small" className={style.editListingCommonInput}
						name="title" onChange={inputsHandler} value={inputs.title ?? ''} />

					<Typography className={style.editListingCommonTitle}>Category 1</Typography>
					<Select size="small" className={style.editListingScaleSelect}
						name="category1" onChange={inputsHandler} value={inputs.category1 ?? ''}>

						<MenuItem value={'Warhammer'}>Warhammer</MenuItem>
						<MenuItem value={'Fantasy'}>Fantasy</MenuItem>
						<MenuItem value={'Sci-fi'}>Sci-fi</MenuItem>
						<MenuItem value={'Terrain'}>Terrain</MenuItem>
						<MenuItem value={'Space Marines'}>Space Marines</MenuItem>
						<MenuItem value={'Astrates'}>Astrates</MenuItem>
						<MenuItem value={'Tech Guys'}>Tech Guys</MenuItem>
						<MenuItem value={'Giga Robots'}>Giga Robots</MenuItem>
					</Select>

					<Typography className={style.editListingCommonTitle}>Category 2</Typography>
					<Select size="small" className={style.editListingScaleSelect}
						name="category2" onChange={inputsHandler} value={inputs.category2 ?? ''}>

						<MenuItem value={'Vehicles'}>Vehicles</MenuItem>
						<MenuItem value={'Characters'}>Characters</MenuItem>
						<MenuItem value={'Locations'}>Locations</MenuItem>
						<MenuItem value={'Weapons'}>Weapons</MenuItem>
					</Select>

					<Typography className={style.editListingCommonTitle}>Description</Typography>
					<TextField multiline rows={5} className={style.editListingDescription}
						name="description" onChange={inputsHandler} value={inputs.description ?? ''} />

					<Typography className={style.editListingCommonTitle}>Tags</Typography>

					<Box className={style.editListingInputAndButton} sx={{ display: 'flex', alignItems: 'center' }}>
						<TextField size="small" sx={{ width: "330px", height: "inherit" }}
							name="tags" onChange={inputsHandler} value={inputs.tags ?? ''} />

						<Button
							onClick={tagsHandler}
							variant="contained"
							component="label"
							sx={{ height: "inherit" }}>
							<AddIcon />
							Add tag
						</Button>
					</Box>

					<Box sx={{ display: 'flex' }}>
						{tags.map((tag) => <TagComponent key={tag.id} tag={tag} tags={tags} setTags={setTags} />)}
					</Box>

					<Typography className={style.editListingSecondaryTitle}>Variations</Typography>
					<Button variant="contained" disabled className={style.editListingVariationsBtn}>Edit variations</Button>

					<Typography className={style.editListingCommonTitle}>Scale</Typography>
					<Select size="small" className={style.editListingScaleSelect}
						name="scale" onChange={inputsHandler} value={inputs.scale ?? ''}>
						<MenuItem value={15}>15mm - 2.99$</MenuItem>
						<MenuItem value={28}>28mm - 3.99$</MenuItem>
						<MenuItem value={32}>32mm - 4.99$</MenuItem>
					</Select>

					<Box className={style.editListingSubmitFormBtnGroup} >
						<Button
							type="submit"
							variant="contained"
							className={style.editListingSubmitFormBtnUpd}>Update</Button>
						<Button component="label" className={style.editListingSubmitFormBtnCncl}>Cancel</Button>
					</Box>

				</Box>
			</Box>

		</Container >
	)
}

export default EditListing

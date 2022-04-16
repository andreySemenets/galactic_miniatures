import React, { useState } from 'react';
import {
	Box,
	Container,
	TextField,
	Typography,
	Button,
	Select,
	MenuItem,
	Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import style from './style.module.css';
import TagComponent from '../TagComponent/TagComponent';
import axios from 'axios';

function EditListing() {

	// INPUTS & FORMDATA
	const [inputs, setInputs] = useState({});
	const [form, setForm] = useState({});
	console.log('form >>>', form);

	// TAGS
	const [tags, setTags] = useState([]);
	// UPLOAD PHOTOS
	const [photos, setPhotos] = useState([]);

	// UPLOAD ARCHIVE
	const [zipInput, setZipInput] = useState(null);
	const [zip, setZip] = useState({});
	// console.log('photos>>>', photos[0].photoFile);

	const photosHandler = (event) => {
		setPhotos((prev) => ([...prev, { photoFile: event.target.files[0] }]))
	};

	const zipHandler = (event) => {
		console.log('zipHandler ++++>', event);
		setZip(() => (event.target.files[0] ?? {}))
		setZipInput(event.target.files[0].name ?? '')
	};

	const InputFile = styled('input')({
		display: 'none',
	});

	const tagsHandler = () => {
		setTags((prev) => ([...prev, { id: Date.now(), tagTitle: inputs.tags }]));
	};

	const updateHandler = (event) => {

		event.preventDefault();

		const formData = new FormData()

		formData.append('title', inputs.title);
		formData.append('price', `${inputs.priceForDigital}`);
		formData.append('category1', inputs.category1);
		formData.append('category2', inputs.category2);
		formData.append('description', inputs.description);
		formData.append('scale', inputs.scale);
		tags.forEach(tag => formData.append('tags', tag.tagTitle))
		formData.append('zip', zip);
		formData.append('photos', photos[0]?.photoFile);
		// photos.forEach(photo => formData.append('photos', photo))

		axios.post('http://localhost:4000/items/new', formData, {
			withCredentials: true,
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
			.then((res) => {
				console.log('RESPONSE FROM SERVER >>>', res);
			})

		setForm(formData);
		setInputs({});
		setTags([]);
		setPhotos([]);
		setZip({});
		setZipInput({});
	};


	const inputsHandler = (event) => {
		setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};

	return (
		<Container className={style.editListingMainContainer}>

			<Box component="form" noValidate className={style.editListingForm}
				onSubmit={updateHandler} encType="multipart/form-data">
				<Typography className={style.editListingMainTitle}>Edit Listing</Typography>

				<Box className={style.editListingContentContainer}>

					{/* UPLOAD PHOTO */}
					<Typography className={style.editListingSecondaryTitle}>Photos</Typography>

					{/* UPLOADED MINIATURES BOX */}
					<Stack direction="row" alignItems="center" spacing={2}>
						<Box className={style.editListingUploadFotoMiniature}>
							<img
								style={{ width: "150px", height: "105px" }}
								src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"
								alt="here"
								loading="lazy"
							/>
						</Box>

						{/* UPLOAD PHOTO BUTTON */}
						<Box className={style.editListingUploadFotoBox}>

							<label htmlFor="contained-button-file">
								<InputFile accept="image/*,.zip" id="contained-button-file" multiple type="file"
									name="photo" onChange={photosHandler} />
								<Button variant="contained" component="span">Upload</Button>
							</label>

						</Box>
					</Stack>

					{/* UPLOAD ZIP */}
					<Typography className={style.editListingSecondaryTitle}>Files</Typography>

					<Box className={style.editListingInputAndButton}>

						<TextField
							placeholder="Please upload file pack without supports"
							disabled
							size="small"
							sx={{ width: "330px", height: "inherit" }} />

						<label htmlFor="contained-button-file">
							<InputFile accept="image/*,.zip" id="contained-button-file" multiple type="file"
								name="file" onChange={zipHandler} />
							<Button variant="contained" component="span">
								<FileDownloadIcon />
								Select File</Button>
						</label>

						{/* <label htmlFor="contained-button-file">
							<Button variant="contained" component="span" sx={{ height: "inherit" }} >
								<input multiple type="file" name="file"
									onChange={zipHandler} />
								<FileDownloadIcon />
								Select File
							</Button>
						</label> */}

					</Box>

					<Box className={style.editListingInputAndButton}>
						<TextField disabled size="small"
							sx={{ width: "330px", height: "inherit" }} value={zipInput ?? ''} />
						<Button variant="contained" component="label" sx={{ height: "inherit" }}
							onClick={() => {
								setZipInput(null);
								setZip({})
							}}>
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

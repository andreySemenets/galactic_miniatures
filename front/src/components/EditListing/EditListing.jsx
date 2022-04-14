import React from 'react';
import {
	Box,
	Container,
	TextField,
	Typography,
	Button,
	Select,
	MenuItem,
	FormControl
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import style from './style.module.css';

function EditListing() {

	return (
		<Container className={style.editListingMainContainer}>
			<FormControl className={style.editListingForm}>
				<Typography className={style.editListingMainTitle}>Edit Listing</Typography>

				<Box className={style.editListingContentContainer}>

					<Typography className={style.editListingSecondaryTitle}>Photos</Typography>

					{/* UPLOAD PHOTO */}
					<Box className={style.editListingUploadFotoContainer}>
						<Box className={style.editListingUploadFotoMiniature}>

							{/* ХАРДКОД ДЛЯ НАГЛЯДНОСТИ */}
							<img
								style={{ width: "150px", height: "105px" }}
								src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"
								alt="here"
								loading="lazy"
							/>
						</Box>

						<Box className={style.editListingUploadFotoMiniature}>
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
							variant="outlined"
							size="small"
							sx={{ width: "330px", height: "inherit" }} ></TextField>
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

					{/* DELETE FILE */}
					<Box className={style.editListingInputAndButton}>
						<TextField
							variant="outlined"
							size="small"
							sx={{ width: "330px", height: "inherit" }} >
						</TextField>
						<Button
							variant="contained"
							component="label"
							sx={{ height: "inherit" }}>
							<DeleteOutlineOutlinedIcon />
							Delete File
						</Button>
					</Box>

					<Typography className={style.editListingCommonTitle}>Price for digital files</Typography>

					<TextField
						size="small"
						className={style.editListingCommonInput} />

					<Typography className={style.editListingSecondaryTitle}>Listing Details</Typography>

					<Typography className={style.editListingCommonTitle}>Title</Typography>
					<TextField size="small" className={style.editListingCommonInput} />

					<Typography className={style.editListingCommonTitle}>Category 1</Typography>

					<Select size="small" className={style.editListingScaleSelect}>
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
					<Select size="small" className={style.editListingScaleSelect}>
						<MenuItem value={'Vehicles'}>Vehicles</MenuItem>
						<MenuItem value={'Characters'}>Characters</MenuItem>
						<MenuItem value={'Locations'}>Locations</MenuItem>
						<MenuItem value={'Weapons'}>Weapons</MenuItem>
					</Select>


					<Typography className={style.editListingCommonTitle}>Description</Typography>
					<TextField multiline="true" rows={5} className={style.editListingDescription} />

					<Typography className={style.editListingCommonTitle}>Tags</Typography>

					<Box className={style.editListingInputAndButton} sx={{ display: 'flex', alignItems: 'center' }}>
						<TextField
							variant="outlined"
							size="small"
							sx={{ width: "330px", height: "inherit" }} >
						</TextField>
						<Button
							variant="contained"
							component="label"
							sx={{ height: "inherit" }}>
							<AddIcon />
							Add tag
						</Button>
					</Box>

					<Typography className={style.editListingSecondaryTitle}>Variations</Typography>
					<Button variant="contained" disabled className={style.editListingVariationsBtn}>Edit variations</Button>

					<Typography className={style.editListingCommonTitle}>Scale</Typography>
					<Select size="small" className={style.editListingScaleSelect}>
						<MenuItem value={15}>15mm - 2.99$</MenuItem>
						<MenuItem value={28}>28mm - 3.99$</MenuItem>
						<MenuItem value={32}>32mm - 4.99$</MenuItem>
					</Select>

					<Box className={style.editListingSubmitFormBtnGroup} >
						<Button variant="contained" component="label" className={style.editListingSubmitFormBtnUpd}>Update</Button>
						<Button component="label" className={style.editListingSubmitFormBtnCncl}>Cancel</Button>
					</Box>

				</Box>
			</FormControl>
		</Container >
	)
}

export default EditListing

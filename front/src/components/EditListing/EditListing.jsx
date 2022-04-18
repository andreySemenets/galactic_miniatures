import _ from 'lodash';
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
    FormGroup,
} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import style from './style.module.css';
import TagComponent from '../TagComponent/TagComponent';
import axios from 'axios';

const theme = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: 'white',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                inputSizeSmall: {
                    border: '1px solid #6c757d',
                    borderRadius: '8px',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#000000',
                    },
                },
                multiline: {
                    border: '1px solid #6c757d',
                    borderRadius: '12px',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#000000',
                    },
                },
            },
        },
    },
});

function EditListing() {
    // INPUTS & FORMDATA
    const [inputs, setInputs] = useState({});
    const [form, setForm] = useState({});

    // TAGS
    const [tags, setTags] = useState([]);

    // UPLOAD PHOTOS
    const [photos, setPhotos] = useState([]);
    const [preview, setPreview] = useState([]);


    // UPLOAD ARCHIVE
    const [zipInput, setZipInput] = useState(null);
    const [zip, setZip] = useState([]);
    console.log(zip);
    const photosHandler = (event) => {
        // console.log(event.target.files);
        const arrFromFileList = Array.from((event.target.files));
        setPhotos((prev) => Array.from([...prev, ...event.target.files]));
        const previewUrls = arrFromFileList.map((photo) =>
            URL.createObjectURL(photo)
        );
        setPreview((prev) => Array.from([ ...prev, ...previewUrls ]));
    };

    const zipHandler = (event) => {
        console.log(event.target.files);
        const zipArr = Array.from(event.target.files)
        setZip((prev) => Array.from([ ...prev, ...zipArr]) );
        setZipInput(event.target.files[0].name ?? '');
        // console.log(zip, zipInput);
    };

    const inputsHandler = (event) => {
        // console.log(event.target.name);
        setInputs((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const tagsHandler = () => {
        setTags((prev) => [...prev, { id: Date.now(), tagTitle: inputs.tags }]);
    };

    const updateHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('title', inputs.title);
        formData.append('price', inputs.priceForDigital);
        formData.append('category1', inputs.category1);
        formData.append('category2', inputs.category2);
        formData.append('description', inputs.description);
        formData.append('scale', inputs.scale);
        tags.forEach((tag) => formData.append('tags', tag.tagTitle));
        // formData.append('zip', zip);
        // formData.append('photos', photos.map(el => el));
        _.forEach(zip, oneZip => formData.append('zip', oneZip))
        _.forEach(photos, photo => formData.append('photos', photo))

        axios
            .post('http://localhost:4000/items/new', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                console.log('RESPONSE FROM SERVER >>>', res);
            });

        setForm(formData);
        setInputs({});
        setTags([]);
        setPhotos([]);
        setZip({});
        setZipInput({});
    };

    const InputFile = styled('input')({
        display: 'none',
    });
    const InputPhoto = styled('input')({
        display: 'none',
    });

    return (
        <ThemeProvider theme={theme}>
            <Container className={style.editListingMainContainer}>
                <Box
                    component="form"
                    noValidate
                    className={style.editListingForm}
                    onSubmit={updateHandler}
                    encType="multipart/form-data"
                >
                    <Typography className={style.editListingMainTitle}>
                        Edit Listing
                    </Typography>

                    <Box className={style.editListingContentContainer}>
                        {/* UPLOAD PHOTO */}
                        <Typography className={style.editListingSecondaryTitle}>
                            Photos
                        </Typography>

                        {/* UPLOADED MINIATURES BOX */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            {/* {photos[0] && photos.} */}
                            {preview.length
                                ? preview.map((el) => (
                                      <Box
                                          key={el}
                                          className={
                                              style.editListingUploadFotoMiniature
                                          }
                                      >
                                          <img
                                              style={{
                                                  width: '150px',
                                                  height: '105px',
                                              }}
                                              src={el}
                                              alt="here"
                                              loading="lazy"
                                          />
                                      </Box>
                                  ))
                                : null}

                            {/* UPLOAD PHOTO BUTTON */}
                            <Box className={style.editListingUploadFotoBox}>
                                <label htmlFor="contained-button-file">
                                    <InputPhoto
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        name="photo"
                                        onChange={photosHandler}
                                    />
                                    <Button
                                        variant="contained"
                                        component="span"
                                    >
                                        Upload
                                    </Button>
                                </label>
                            </Box>
                        </Stack>

                        {/* UPLOAD ZIP */}
                        <Typography className={style.editListingSecondaryTitle}>
                            Files
                        </Typography>

                        <Box className={style.editListingInputAndButton}>
                            <TextField
                                placeholder="Please upload file pack without supports"
                                disabled
                                size="small"
                                sx={{ width: '330px', height: 'inherit' }}
                            />

                            <label htmlFor="another-file">
                                <InputFile
                                    accept=".zip"
                                    id="another-file"
                                    multiple
                                    type="file"
                                    name="file"
                                    onChange={zipHandler}
                                /> &nbsp;
                                <Button variant="contained" component="span">
                                    <FileDownloadIcon />
                                    Select File
                                </Button>
                            </label>
                        </Box>

                        <Box className={style.editListingInputAndButton}>
                            <TextField
                                disabled
                                size="small"
                                sx={{ width: '330px', height: 'inherit' }}
                                onChange={zipHandler}
                                value={zipInput ?? ''}
                            /> &nbsp;
                            <Button
                                variant="contained"
                                component="label"
                                sx={{ height: 'inherit' }}
                                onClick={() => {
                                    setZipInput(null);
                                    setZip({});
                                }}
                            >
                                <DeleteOutlineOutlinedIcon />
                                Delete File
                            </Button>
                        </Box>

                        <Typography className={style.editListingCommonTitle}>
                            Price for digital files
                        </Typography>
                        <TextField
                            size="small"
                            className={style.editListingCommonInput}
                            name="priceForDigital"
                            onChange={inputsHandler}
                            value={inputs.priceForDigital ?? ''}
                        />

                        <Typography className={style.editListingSecondaryTitle}>
                            Listing Details
                        </Typography>

                        <Typography className={style.editListingCommonTitle}>
                            Title
                        </Typography>
                        <TextField
                            size="small"
                            className={style.editListingCommonInput}
                            name="title"
                            onChange={inputsHandler}
                            value={inputs.title ?? ''}
                        />

                        <Typography className={style.editListingCommonTitle}>
                            Category 1
                        </Typography>
                        <Select
                            size="small"
                            className={style.editListingScaleSelect}
                            name="category1"
                            onChange={inputsHandler}
                            value={inputs.category1 ?? ''}
                        >
                            <MenuItem value={'Warhammer'}>Warhammer</MenuItem>
                            <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                            <MenuItem value={'Sci-fi'}>Sci-fi</MenuItem>
                            <MenuItem value={'Terrain'}>Terrain</MenuItem>
                            <MenuItem value={'Space Marines'}>
                                Space Marines
                            </MenuItem>
                            <MenuItem value={'Astrates'}>Astrates</MenuItem>
                            <MenuItem value={'Tech Guys'}>Tech Guys</MenuItem>
                            <MenuItem value={'Giga Robots'}>
                                Giga Robots
                            </MenuItem>
                        </Select>

                        <Typography className={style.editListingCommonTitle}>
                            Category 2
                        </Typography>
                        <Select
                            size="small"
                            className={style.editListingScaleSelect}
                            name="category2"
                            onChange={inputsHandler}
                            value={inputs.category2 ?? ''}
                        >
                            <MenuItem value={'Vehicles'}>Vehicles</MenuItem>
                            <MenuItem value={'Characters'}>Characters</MenuItem>
                            <MenuItem value={'Locations'}>Locations</MenuItem>
                            <MenuItem value={'Weapons'}>Weapons</MenuItem>
                        </Select>

                        <Typography className={style.editListingCommonTitle}>
                            Description
                        </Typography>
                        <TextField
                            multiline
                            rows={5}
                            className={style.editListingDescription}
                            name="description"
                            onChange={inputsHandler}
                            value={inputs.description ?? ''}
                        />

                        <Typography className={style.editListingCommonTitle}>
                            Tags
                        </Typography>

                        <Box
                            className={style.editListingInputAndButton}
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            <TextField
                                size="small"
                                sx={{ width: '330px', height: 'inherit' }}
                                name="tags"
                                onChange={inputsHandler}
                                value={inputs.tags ?? ''}
                            /> &nbsp;

                            <Button
                                onClick={tagsHandler}
                                variant="contained"
                                component="label"
                                sx={{ height: 'inherit' }}
                            >
                                <AddIcon />
                                Add tag
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex' }}>
                            {tags.map((tag) => (
                                <TagComponent
                                    key={tag.id}
                                    tag={tag}
                                    tags={tags}
                                    setTags={setTags}
                                />
                            ))}
                        </Box>

                        <Typography className={style.editListingSecondaryTitle}>
                            Variations
                        </Typography>
                        <Button
                            variant="contained"
                            disabled
                            className={style.editListingVariationsBtn}
                        >
                            Edit variations
                        </Button>

                        <Typography className={style.editListingCommonTitle}>
                            Scale
                        </Typography>
                        <Select
                            size="small"
                            className={style.editListingScaleSelect}
                            name="scale"
                            onChange={inputsHandler}
                            value={inputs.scale ?? ''}
                        >
                            <MenuItem value={15}>15mm - 2.99$</MenuItem>
                            <MenuItem value={28}>28mm - 3.99$</MenuItem>
                            <MenuItem value={32}>32mm - 4.99$</MenuItem>
                        </Select>

                        <Box className={style.editListingSubmitFormBtnGroup}>
                            <Button
                                type="submit"
                                variant="contained"
                                className={style.editListingSubmitFormBtnUpd}
                            >
                                Update
                            </Button>
                            <Button
                                component="label"
                                className={style.editListingSubmitFormBtnCncl}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default EditListing;

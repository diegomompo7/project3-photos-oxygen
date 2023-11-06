import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPhotos, selectSearchPhotos, isLoading } from "./searchSlice";
import { IconButton, Stack, Box, Alert, Collapse } from "@mui/material";
import './search.css'
import SearchPhoto from "../../components/SearchPhoto/SearchPhoto";
import { Favorite, Download, Close } from "@mui/icons-material";

export let myFvaoritePhotos = []


const Search = (props) => {
    const dispatch = useDispatch()
    const search = useSelector(selectSearchPhotos)
    const isLoadingPhotos = useSelector(isLoading);

    const [favorite, setFavorite] = useState([])
    const [openAlert, setOpenAlert] = React.useState(false);

    useEffect(() => {
        dispatch(searchPhotos())
    }, [dispatch])

    if (isLoadingPhotos) {
        return <div>loading photos</div>;
    }

    const handleOnFavorite = (e, photo) => {
        e.preventDefault()
        console.log(photo)
        setFavorite([...favorite, [photo.id, photo.alt_description, photo.width, photo.height, photo.likes, photo.created_at]])
        setOpenAlert(true);
    }

    console.log(favorite)
    console.log(search)

    return (
        <>
            <Collapse in={openAlert}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpenAlert(false);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    The photo has beed added successful
                </Alert>
            </Collapse>


            <SearchPhoto input={props.searchP} setInput={props.setSearchP}></SearchPhoto>
            <Stack className="listItems" direction={{ xs: 'column', md: 'row' }}>

                {
                    search.map((photo) => (
                        <item className="itemPhoto" key={photo.id}>
                            <img className="photo-img" src={photo.urls.full}></img>
                            <h1 className="photo-title">{photo.alt_description}</h1>
                            <Box className="options">
                                <IconButton sx={{
                                    background: '#0F47AF',
                                    marginRight: '44px',
                                    left: '13%',

                                    "&:hover": {
                                        background: '#0F47AF',
                                        marginRight: '44px',
                                        left: '13%',
                                    }
                                }} className="btnOptions">
                                    <Favorite sx={{
                                        color: '#FFFFFF',
                                        fontSize: '1.5rem',
                                        background: '#0F47AF',
                                        borderRadius: '56px',

                                    }} className="btnOptions-icon" onClick={(e) => handleOnFavorite(e, photo)}></Favorite>
                                </IconButton>
                                <IconButton sx={{
                                    background: '#0F47AF',
                                    left: '13%',
                                    "&:hover": {
                                        background: '#0F47AF',
                                        left: '13%'
                                    }
                                }} className="btnOptions">
                                    <a href={photo.urls.full} target="_blank" download><Download sx={{
                                        color: '#FFFFFF',
                                        fontSize: '1.5rem',
                                        background: '#0F47AF',
                                        borderRadius: '56px'
                                    }} className="btnOptions-icon">
                                        </Download></a>
                                </IconButton>
                            </Box>

                        </item>
                    ))
                }

            </Stack>
        </>
    )


}

export default Search
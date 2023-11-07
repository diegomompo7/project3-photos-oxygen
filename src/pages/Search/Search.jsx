/* eslint-disable no-cond-assign */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPhotos, selectSearchPhotos, isLoading } from "../../features/search/searchSlice";
import { IconButton, Stack, Box } from "@mui/material";
import './Search.css'
import SearchPhoto from "../../components/SearchPhoto/SearchPhoto";
import { Favorite, Download } from "@mui/icons-material";
import { addFav, favData} from "../../features/favorite/favoriteSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Search = () => {
    const dispatch = useDispatch()
    const favPhotos = useSelector(favData);
    const search = useSelector(selectSearchPhotos)
    const isLoadingPhotos = useSelector(isLoading);


    useEffect(() => {
        dispatch(searchPhotos())
    }, [dispatch])

    if (isLoadingPhotos) {
        return <div>loading photos</div>;
    }

    const handleOnFavorite = (photo) => {
        const addPhoto = {
            id: photo.id, 
            description: 
            photo.alt_description ? photo.alt_description
            : "No description",
            width: photo.width, 
            height: photo.height, 
            likes: photo.likes, 
            date: photo.created_at, 
            download:photo.urls.full
        }
        addPhoto.isFavorite = true
        dispatch(addFav(addPhoto))
        toast.success("Photo added succseful")
        localStorage.setItem("favPhotos", JSON.stringify([...favPhotos, addPhoto]))

    }

    console.log(favPhotos)


    


    return (
        <>
            <ToastContainer />
            <SearchPhoto></SearchPhoto>
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

                                    }} className="btnOptions-icon" onClick={() => handleOnFavorite(photo)}></Favorite>
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
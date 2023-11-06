import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPhotos, selectSearchPhotos, isLoading } from "./searchSlice";
import { IconButton, Stack, Box } from "@mui/material";
import './search.css'
import SearchPhoto from "../../components/SearchPhoto/SearchPhoto";
import { Favorite, Download } from "@mui/icons-material";


const Search =  (props) => {
    const dispatch = useDispatch()
    const search = useSelector(selectSearchPhotos)
    const isLoadingPhotos = useSelector(isLoading);

    useEffect(() => {
        dispatch(searchPhotos())
    }, [dispatch])

    if (isLoadingPhotos) {
        return <div>loading photos</div>;
    }

    console.log(search)

    return (
        <>
            <SearchPhoto input={props.searchP} setInput={props.setSearchP}></SearchPhoto>
            <Stack className="listItems"  direction={{ xs: 'column', md: 'row' }}>

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
                                
                                "&:hover" : {
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
                                    
                                }} className="btnOptions-icon"></Favorite>
                            </IconButton>
                            <IconButton sx={{
                                background: '#0F47AF',
                                left: '13%',
                                "&:hover" : {
                                    background: '#0F47AF',
                                    left: '13%'
                                }
                            }} className="btnOptions">
                                <Download sx={{
                                    color: '#FFFFFF',
                                    fontSize: '1.5rem',
                                    background: '#0F47AF',
                                    borderRadius: '56px'
                                }} className="btnOptions-icon"></Download>
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
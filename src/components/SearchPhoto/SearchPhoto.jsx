import React, { useState } from "react";
import { Input, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './SearchPhoto.css'
import { useDispatch } from "react-redux";
import { searchPhotos } from "../../features/search/searchSlice";

const SearchPhoto = (props) => {

    const dispatch = useDispatch()
    const [inputSearch, setInputSearch] = useState("")

        const handleOnSubmit = (e) => {
            e.preventDefault()
            console.log(inputSearch)
            dispatch(searchPhotos(inputSearch))
        }

    return (
        <form className="search" onSubmit={(e) => handleOnSubmit(e)}>
            <Input className="searchPhoto" placeholder="Search a photo..." onChange={(e) => setInputSearch(e.target.value)} sx={{
            color: '#FFFFFF',
            fontFamily: 'Farro',
                fontSize: '1rem'
            }}/>
            <IconButton type="submit" className="btnSearch" sx={{
                background: '#FFFFFF',
                "&:hover" : {
                background: '#FFFFFF'
                }
                
            }}>
                <SearchIcon  sx={{
                  color: '#0F47AF',
                  fontSize: '1.5rem',
                   background: '#FFFFFF',
                   borderRadius: '56px'
                }} className="btnSearch-icon">
                </SearchIcon>
            </IconButton>
        </form>

    )
}
export default SearchPhoto
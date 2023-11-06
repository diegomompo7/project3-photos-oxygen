import React from "react";
import { Input, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './SearchPhoto.css'
import { useNavigate } from "react-router";

const SearchPhoto = (props) => {

    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        navigate('/search')
    }

    const handleOnChange = (e) => {
        e.preventDefault()
        props.setInput(e.target.value)
    }

    return (
        <form className="search" onSubmit={(e) => handleOnSubmit(e)}>
            <Input className="searchPhoto" placeholder="Search a photo..." onChange={(e) => handleOnChange(e)} sx={{
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
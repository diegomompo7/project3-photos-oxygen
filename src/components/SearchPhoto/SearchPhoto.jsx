import React, { useState } from "react";
import { Input, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './SearchPhoto.css'

const SearchPhoto = () => {


    const [input, setInput] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        
    }

    const handleOnChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    return (
        <form className="search" onSubmit={(e) => handleOnSubmit(e)}>
            <Input className="searchPhoto" placeholder="Search a photo..." onChange={(e) => handleOnChange(e)} sx={{
            color: '#FFFFFF',
            fontFamily: 'Farro',
                fontSize: '1rem'
            }}/>
            <IconButton type="submit" className="btnSearch" sx={{
                background: '#FFFFFF'
            }}>
                <SearchIcon  sx={{
                  color: '#0F47AF',
                  fontSize: '1.5rem'  
                }} className="btnSearch-icon">
                </SearchIcon>
            </IconButton>
        </form>

    )
}
export default SearchPhoto
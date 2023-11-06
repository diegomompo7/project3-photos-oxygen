import React from "react";
import { Input, IconButton} from "@mui/material";
import Textarea from '@mui/joy/Textarea'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router";
import './MyPhotos.css'


// import Outlet

const MyPhotos = (props) => {

    
    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        if(props.input !== ""){
            navigate('/search')
        }else{
            navigate('/')
        }
    }

    const handleOnChange = (e) => {
        e.preventDefault()
   
    }

    return (
        <form className="search" onSubmit={(e) => handleOnSubmit(e)}>
            <Textarea  minRows={5}  placeholder="Enter a description..." onChange={(e) => handleOnChange(e)}
            sx={{
                marginTop: '1.25em',
                marginBottom: '2em',
                background: "#0F47AF",
                color: '#FFFFFF',
                fontFamily: 'Farro',
                fontSize: '1rem',
                width: '100%',
                maxWidth: '519px'
                }}
            ></Textarea>
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
};

export default MyPhotos
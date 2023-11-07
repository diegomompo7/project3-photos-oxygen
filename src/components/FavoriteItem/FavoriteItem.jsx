import React from "react"
import { Stack, Box, IconButton } from "@mui/material"
import { Download, Delete, Edit } from "@mui/icons-material"
import './FavoriteItem.css'

const FavoriteItem = (props) => {
    const favorite = props.favorite
    console.log(favorite)
    return (
        <div>
          {favorite.length === 0 ? (
            <p>There aren't favorite photos</p>
          ) : (
            <Stack className="listFavorite" direction={{ xs: 'column', md: 'row' }}>

            {

              favorite.map((photo) => (
                  <item className="favoritePhoto" key={photo.id}>
                    <img className="photo-img-favorite" src={photo.download}></img>
                    <h1 className="photo-title-favorite">{photo.description}</h1>
                    <Box className="box-desc-one">
                    <p className="photo-description">Width: {photo.width}</p>
                    <p className="photo-description">Height: {photo.height}</p>
                    </Box>
                    <Box className="box-desc-two">
                      <p className="photo-description">Likes: {photo.likes}</p>
                      <p className="photo-description">Date added: {photo.date}</p>
                    </Box>
                    <Box className="optionsFavorite">
                                <IconButton sx={{
                                    background: '#0F47AF',
                                    
                                    

                                    "&:hover": {
                                        background: '#0F47AF',
                  
                                        
                                    }
                                }} className="btnOptionsFav">
                                    <Delete sx={{
                                        color: '#FFFFFF',
                                        fontSize: '1.5rem',
                                        background: '#0F47AF',
                                        borderRadius: '56px',

                                    }} className="btnOptions-icon"></Delete>
                                </IconButton>
                                <IconButton sx={{
                                    background: '#0F47AF',
                                    
                                    "&:hover": {
                                        background: '#0F47AF',
                                       
                                    }
                                }} className="btnOptionsFav">
                                    <a target="_blank" download><Download sx={{
                                        color: '#FFFFFF',
                                        fontSize: '1.5rem',
                                        background: '#0F47AF',
                                        borderRadius: '56px'
                                    }} className="btnOptions-icon">
                                        </Download></a>
                                </IconButton>
                                <IconButton sx={{
                                    background: '#0F47AF',
                                    
                                    "&:hover": {
                                        background: '#0F47AF',
                                       
                                    }
                                }} className="btnOptionsFav">
                                    <Edit sx={{
                                        color: '#FFFFFF',
                                        fontSize: '1.5rem',
                                        background: '#0F47AF',
                                        borderRadius: '56px'
                                    }} className="btnOptions-icon">
                                        </Edit>
                                </IconButton>
                            </Box>
                  </item>

                  
                
              ))
            }
            </Stack>
          )}
        </div>
      );
}
export default FavoriteItem
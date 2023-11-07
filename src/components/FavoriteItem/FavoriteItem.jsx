import React from "react"
import { Stack, Box } from "@mui/material"
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
                  </item>
              ))
            }
            </Stack>
          )}
        </div>
      );
}
export default FavoriteItem
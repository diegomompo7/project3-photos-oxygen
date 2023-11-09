import React, { useEffect, useState } from "react";
import { Stack, Box, IconButton } from "@mui/material";
import { Download, Delete, Edit } from "@mui/icons-material";
import { removeFav } from "../../features/favorite/favoriteSlice";
import { toast } from "react-toastify";
import "./FavoriteItem.css";
import downloadImage from "../Download/Download";
import { useDispatch } from "react-redux";
import ModalUpdate from "../ModalUpdate/ModalUpdate";

const FavoriteItem = (props) => {
  const favorite = props.favorite;
  const query = props.lookQuery;

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currDescription, setCurrDescription] = useState({});

  console.log(currDescription, " despues de open")

  const handleOpen = (photoEdit) => {
    console.log(photoEdit)
    setCurrDescription({
      id: photoEdit.id,
      title: photoEdit.description,
      width: photoEdit.width,
      height: photoEdit.height,
      likes: photoEdit.likes,
      date: photoEdit.date.slice(0, 10),
    });
  };

  console.log(open);
  return (
    <div>
      <Stack className="listFavorite" direction={{ xs: "column", md: "row" }}>
        {favorite
          .filter((photo) =>
            photo.description.toLowerCase().includes(query.toLowerCase())
          )
          .map((photo) => (
            <item className="favoritePhoto" key={photo.id}>
              <img className="photo-img-favorite" src={photo.download}></img>
              <h1 className="photo-title-favorite">{photo.description}</h1>
              <Box className="description">
                <Box className="box-desc-one">
                  <p className="photo-description width">
                    Width: {photo.width}
                  </p>
                  <p className="photo-description likes">
                    Likes: {photo.likes}
                  </p>
                </Box>
                <Box className="box-desc-two">
                  <p className="photo-description height">
                    Height: {photo.height}
                  </p>
                  <p className="photo-description date">
                    Date added: {photo.date}
                  </p>
                </Box>
              </Box>
              <Box className="optionsFavorite">
                <IconButton
                  sx={{
                    background: "#0F47AF",

                    "&:hover": {
                      background: "#0F47AF",
                    },
                  }}
                  className="btnOptionsFav"
                >
                  <Delete
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.5rem",
                      background: "#0F47AF",
                      borderRadius: "56px",
                    }}
                    className="btnOptions-icon"
                    onClick={() => {
                      dispatch(removeFav(photo.id));
                      toast.error("Photo deleted succesfull", {
                        position: toast.POSITION.BOTTOM_CENTER,
                        theme: "colored",
                      });
                    }}
                  ></Delete>
                </IconButton>
                <IconButton
                  sx={{
                    background: "#0F47AF",

                    "&:hover": {
                      background: "#0F47AF",
                    },
                  }}
                  className="btnOptionsFav"
                >
                  <Download
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.5rem",
                      background: "#0F47AF",
                      borderRadius: "56px",
                    }}
                    className="btnOptions-icon"
                    onClick={() =>
                      downloadImage(photo.download, photo.description)
                    }
                  ></Download>
                </IconButton>
                <IconButton
                  sx={{
                    background: "#0F47AF",

                    "&:hover": {
                      background: "#0F47AF",
                    },
                  }}
                  className="btnOptionsFav"
                >
                  <Edit
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.5rem",
                      background: "#0F47AF",
                      borderRadius: "56px",
                    }}
                    className="btnOptions-icon"
                    onClick={() => {
                      handleOpen(photo);
                      setOpen(true);
                    }}
                  ></Edit>
                </IconButton>
              </Box>
            </item>
          ))}
      </Stack>
      {open === true && (
        <ModalUpdate
          open={open}
          setOpen={setOpen}
          currDescription={currDescription}
        ></ModalUpdate>
      )}
    </div>
  );
};
export default FavoriteItem;

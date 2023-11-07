import { useDispatch, useSelector } from "react-redux";
import { addFav, favData } from "../../features/favorite/favoriteSlice";
import {IconButton } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import SearchIcon from "@mui/icons-material/Search";
import "./MyPhotos.css"
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { useEffect, useState } from "react";
// import Outlet

const MyPhotos = (props) => {

  const dispatch = useDispatch()
  const favPhotos = useSelector(favData);

  const loadLocalStorage = () => {
    const localData = localStorage.getItem("favPhotos");
    return localData ? JSON.parse(localData) : [];
  };

  useEffect(() => {
    const localFav = loadLocalStorage()
    if(favPhotos.length === 0) {
      dispatch(addFav(localFav))
    }
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
  };

  const handleOnChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="search" onSubmit={(e) => handleOnSubmit(e)}>
        <Textarea
          minRows={5}
          placeholder="Enter a description..."
          onChange={(e) => handleOnChange(e)}
          sx={{
            marginTop: "1.25em",
            marginBottom: "2em",
            background: "#0F47AF",
            color: "#FFFFFF",
            fontFamily: "Farro",
            fontSize: "1rem",
            width: "100%",
            maxWidth: "519px",
          }}
        ></Textarea>
        <IconButton
          type="submit"
          className="btnSearch"
          sx={{
            background: "#FFFFFF",
            "&:hover": {
              background: "#FFFFFF",
            },
          }}
        >
          <SearchIcon
            sx={{
              color: "#0F47AF",
              fontSize: "1.5rem",
              background: "#FFFFFF",
              borderRadius: "56px",
            }}
            className="btnSearch-icon"
          ></SearchIcon>
        </IconButton>
      </form>
      <FavoriteItem favorite={favPhotos} />
    </>
  );
};

export default MyPhotos;

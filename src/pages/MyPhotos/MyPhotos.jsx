import { useDispatch, useSelector } from "react-redux";
import { addFav, favData } from "../../features/favorite/favoriteSlice";
import {IconButton } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import SearchIcon from "@mui/icons-material/Search";
import "./MyPhotos.css"
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { useEffect, useState } from "react";
// import Outlet

const MyPhotos = () => {

  const dispatch = useDispatch()
  const favPhotos = useSelector(favData);
  const [lookQuery, setLookQuery] = useState("")



  const loadLocalStorage = () => {
    const localData = localStorage.getItem("favPhotos");
    return localData ? JSON.parse(localData) : [];
  };

  useEffect(() => {
    const localFav = loadLocalStorage()
    console.log(favPhotos)
    if(favPhotos.length === 0) {
      dispatch(addFav(localFav))
    }
  }, [dispatch])


  useEffect(() => {
    localStorage.setItem("favPhotos", JSON.stringify(favPhotos));
  }, [favPhotos]);





  return (
    <>
      <form className="search">
        <Textarea
          minRows={5}
          placeholder="Enter a description..."
          onChange={(e) => setLookQuery(e.target.value)}
          value={lookQuery}
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

      {
        favPhotos.length > 0 ? (
          <FavoriteItem favorite={favPhotos} lookQuery={lookQuery}/>
        ) : (
          <p>There aren't favorite photos</p>
        )
      }
    </>
  );
};

export default MyPhotos;

/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { addFav, favData } from "../../features/favorite/favoriteSlice";
import { Box } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import SearchIcon from "@mui/icons-material/Search";
import "./MyPhotos.css";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MenuOrder from "../../components/MenuOrder/MenuOrder";

const MyPhotos = () => {
  const dispatch = useDispatch();
  const favPhotos = useSelector(favData);
  const [lookQuery, setLookQuery] = useState("");
  const [sortedFav, setSortedFav] = useState([]);

  const loadLocalStorage = () => {
    const localData = localStorage.getItem("favPhotos");
    return localData ? JSON.parse(localData) : [];
  };

  useEffect(() => {
    const localFav = loadLocalStorage();
    console.log(favPhotos);
    if (favPhotos.length === 0) {
      dispatch(addFav(localFav));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("favPhotos", JSON.stringify(favPhotos));
  }, [favPhotos]);

  const handleOnChange = (order) => {
    console.log(order);
    let sorted = []

    switch (order) {
      case "width":
        sorted = [...favPhotos].sort((a, b) => b.width - a.width);
        setSortedFav(sorted);
        break;
      case "height":
        sorted = [...favPhotos].sort((a, b) => b.height - a.height);
        setSortedFav(sorted);
        break;
      case "likes":
        sorted = [...favPhotos].sort((a, b) => b.likes - a.likes);
        setSortedFav(sorted);
        break;
      case "date":
        sorted = [...favPhotos].sort((a, b) => b.date - a.date);
        setSortedFav(sorted);
        break;

      default:
        break;
    }
  };

  console.log(sortedFav);

  return (
    <>
      <ToastContainer />
      <Textarea
        minRows={5}
        placeholder="Enter a description..."
        onChange={(e) => setLookQuery(e.target.value)}
        value={lookQuery}
        sx={{
          top: "1.25em",
          bottom: "2em",
          margin: "0 auto",
          background: "#0F47AF",
          color: "#FFFFFF",
          fontFamily: "Farro",
          fontSize: "1rem",
          width: "95%",
          minWidth: "320px",
          maxWidth: "519px",
        }}
      ></Textarea>
      <MenuOrder handleOnChange={handleOnChange}></MenuOrder>

      {sortedFav.length > 0 ? (
        <FavoriteItem favorite={sortedFav} lookQuery={lookQuery} />
      ) : favPhotos.length > 0 ? (
        <FavoriteItem favorite={favPhotos} lookQuery={lookQuery} />
      ) : (
        <h1 className="not-favorite">There aren't favorite photos</h1>
      )}
    </>
  );
};

export default MyPhotos;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import  Root from './components/Root/Root';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MyPhotos from './pages/MyPhotos/MyPhotos';
import  Home  from './pages/Home/Home'
import  Search  from './features/search/search';

export let searchInput = "";

function App(props) {

  const { state, dispatch } = props;
  const [searchP, setSearchP] = useState("")

  console.log(searchP)
    searchInput = searchP


  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path= "/" element={<Search searchP={searchP} setSearchP={setSearchP}/>}></Route>
      <Route path= "/search" element={<Search searchP={searchP} setSearchP={setSearchP}/>}></Route>
        <Route path= "my-photos" element={<MyPhotos />}></Route>
    </Route>

))

  return (
      <RouterProvider router={appRouter}>
      </RouterProvider>
  );
}

export default App;

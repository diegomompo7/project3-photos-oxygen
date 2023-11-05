/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import  Root from './components/Root/Root';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MyPhotos from './pages/MyPhotos/MyPhotos';
import  Home  from './pages/Home/Home'


function App(props) {


  const { state, dispatch } = props;

  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="/" element={<Home />}></Route>
        <Route path= "my-photos" element={<MyPhotos />}></Route>
    </Route>

))

  return (
      <RouterProvider router={appRouter}>
      </RouterProvider>
  );
}

export default App;

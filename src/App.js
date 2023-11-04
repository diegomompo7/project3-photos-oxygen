/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Root } from './components/Root/Root';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { MyPhotos } from './components/MyPhotos/MyPhotos';


function App() {



  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        <Route path= "my-photos" element={<MyPhotos />}></Route>
    </Route>

))

  return (
    <div className="app">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Root } from './components/Root/Root';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { myPhotos } from './components/myPhotos/myPhotos';


function App() {

  const [selectTab, setSelectTab] = React.useState(0);

  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root selectTab={selectTab} setSelectTab={setSelectTab}/>}>
      <Route path= "my-photos" element={<myPhotos />}></Route>
    </Route>

))

  return (
    <div className="app">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;

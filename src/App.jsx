import { useState } from 'react'
import './App.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import Data from './Pages/Data'
import Buy from './Pages/Buy'
import Confirm from './Pages/Confirm'
import NotFound from './Pages/NotFound'

function App() {
  const route= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/confirm' element={<Confirm/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App

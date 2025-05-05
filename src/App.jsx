import React from 'react'
import HomePage from './pages/HomePage'
import MainLayOut from './layouts/MainLayOut'
import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
  from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path ='/' element={<MainLayOut />}>
    <Route index element={<HomePage />} /> 
  </Route>
  )
);
export const App = () => {
  return (
    <RouterProvider router={router} />

  )
}

import React from 'react'
import HomePage from './pages/HomePage'
import MainLayOut from './layouts/MainLayOut'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
  from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path ='/' element={<MainLayOut />}>
    <Route index element={<HomePage />} /> 
    <Route path='/jobs' element={<JobsPage />} /> 
    <Route path='/add-job' element={<AddJobPage />} /> 
    <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/> 
    <Route path='*' element={<NotFoundPage />} /> 
  </Route>
  )
);
export const App = () => {
  return (
    <RouterProvider router={router} />

  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

const Err404 = ()=><>
  <button onClick={_=> window.history.back() }>to Back</button>
  <h1>Error 404.</h1>
</>

export function Webrouter() {
  return (
    <>
      <Routes>
        {['/', '/home'].map( (path) => (
          <Route path={path} element={<Home />} />) 
        )} 
        <Route path='*' element={<Err404 />} />
      </Routes>
    </>
  )
}

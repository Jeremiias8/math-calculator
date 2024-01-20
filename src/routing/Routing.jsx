import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { Sum } from '../components/Sum'
import { Rest } from '../components/Rest'
import { Multiplication } from '../components/Multiplication'
import { Div } from '../components/Div'

export const Routing = () => {

  return (
    <div>
        <BrowserRouter>
            <Routes>
            
              <Route path="/sum" element={<Sum />}/>
              <Route path="/rest" element={<Rest />}/>
              <Route path="/multiplication" element={<Multiplication />}/>
              <Route path="/division" element={<Div />}/>        

            </Routes>
        </BrowserRouter>
    </div>
  )

}

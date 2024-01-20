import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { Sum } from '../components/Sum'
import { Rest } from '../components/Rest'
import { Multiplication } from '../components/Multiplication'
import { Div } from '../components/Div'
import { SquareRoot } from '../components/SquareRoot'

export const Routing = () => {

  return (
    <div>
        <BrowserRouter>
            <Routes>
            
              <Route path="/sum" element={<Sum />}/>
              <Route path="/rest" element={<Rest />}/>
              <Route path="/multiplication" element={<Multiplication />}/>
              <Route path="/division" element={<Div />}/>
              <Route path="/square" element={<SquareRoot />} />        

            </Routes>
        </BrowserRouter>
    </div>
  )

}

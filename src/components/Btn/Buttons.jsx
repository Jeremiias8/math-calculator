import React from 'react'
import '../../App.css'

export const Buttons = () => {

  return (
    <>
        <button className='header__links-content'>
            <a href="/sum">+</a>
            </button>
            <button className='header__links-content'>
            <a href="/rest">-</a>
            </button>
            <button className='header__links-content'>
            <a href="/multiplication">*</a>
            </button>
            <button className='header__links-content'>
            <a href="/division">/</a>
            </button>
            <button className='header__links-content'>
            <a href="/square">Square Root</a>
        </button>
    </>
  )

}

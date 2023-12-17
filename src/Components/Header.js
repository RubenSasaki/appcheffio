import React from 'react'
import {} from '@mui/material';
import {BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';



function Header() {
  return (
    <header>
      <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/cheffi0.appspot.com/o/hat-chef.svg?alt=media&token=6873ee05-7e99-43fe-b2bf-0766138f0ae6' alt='' />
      <div className='inputBox'>
        <SearchRounded className="searchIcon"/>
        <input type='text' placeholder='Search' />
      </div>

      <div className='shoppinCart'>
        <ShoppingCartRounded className='cart'/>
        <div className='cart_container'>
          <p>2</p>
        </div>
      </div>

      <div className='profileContainer'>
        <div className='imgBox'>
          <img src='https://firebasestorage.googleapis.com/v0/b/cheffi0.appspot.com/o/photo_2023-09-11_00-53-54.jpg?alt=media&token=e0fd1bf2-1666-4e92-bda4-52873ec699ae' 
          alt=''
          className='profilePic'/>
        </div>
        <h2 className='userName'>vetrivel Ravi</h2>
      </div>

      <div className='toggleMenu'>
        <BarChart className='toggleIcon'/>
      </div>
    </header>
  )
}

export default Header
/**este modulo para mostrar todas las cartas o platillos que hay */
import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

export default function MenuCard({imgSrc, name, isActive}) {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`} >
        <div className='imgBox'>
            <img src={imgSrc} alt=''></img>
        </div>
        <h3>{name}</h3>
        <i className='loadMenu'>
            <ChevronRightRounded/>
        </i>
    </div>
  )
}

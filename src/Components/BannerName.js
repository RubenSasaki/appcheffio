/**esta es la modificacion del banner */
import React from 'react'

function BannerName({name, discount, link}) {
  return (
    <div className='bannerContent'>
        <h3>Hello {name}</h3>
        <p>
            Obten todas las recetas que quieras <span>{discount}</span>
        </p>

        <a href={link}>Agrega tu receta</a>
    </div>
  )
}

export default BannerName
/*este modulo sirve para solo caracteristicas de la card*/
import { Favorite, StarRounded } from '@mui/icons-material'
import React, { useState } from 'react'

function ItemCard({imgSrc, name, ratings, price, itemId}) {

    const [isFavourite, setFavourite] = useState(false); //esta funcion es apra cambiar el esatdo del favorito
    const [currentValue, setCurrentValue]= useState(Math.floor(ratings)); //esto es para los ratings

    const handleClick = (value) => { //este le asigna el valor also ratings
        setCurrentValue(value);
    };
  return (
    <div className='itemCard' id={itemId}>
        <div className={`isFavourite ${isFavourite} ? "active" : ""}`}
        onClick={()=> setFavourite(!isFavourite) }>
            <Favorite />           
        </div>
        <div className='imgBox'>
            <img src={imgSrc} alt='' className='itemImg'/>
        </div>
        <div className='itemContent'>
            <h3 className='itemName'>{name}</h3>
            <div className='bottom'>
                <div className='ratings'>
                    {Array.apply(null, {length : 5}).map((e,i)=>(
                        <i key={i} className={`rating ${currentValue >i ? "orange" : "gray"}`} //este comprativo es para el rating si tiene estrellas o no
                        onClick={()=> handleClick(i+1)}>
                            <StarRounded/>
                        </i>
                    )
                    
                    )}
                    <h3 className='price'>{price}</h3>
                </div>
                <i className='AddtoCard'></i>
            </div>
        </div>
    </div>
  )
}

export default ItemCard
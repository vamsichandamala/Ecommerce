import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/star_dull_icon.png'
import carticon from '../Assets/cart_icon.png'
const ProductDisplay = (props) => {
    const { product } = props;
    const save = Number(product.old_price) - Number(product.new_price)
    return (
        <div className='total'>
            <div className='left'>
                <div className='left-1'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />


                </div>
                <div className='left-2'>
                    <img src={product.image} alt='' />


                </div>

            </div>
            <div className='right'>
                <h2>{product.name}</h2>
                <div className='rating'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={stardull_icon} alt='' />
            
                </div>
                <div className='prices'>
                    <h5 className='new'>${product.new_price}</h5>
                    <h5 className='old'>${product.old_price}</h5>
                    <h5 className='save'>(save ${save})</h5>


                </div>
                <div>
                    A lightweight, usually knitted , pullover shirt , close-fitting and with 
                    a round neckline and short sleeves, worn as an undershirt or outer 
                    garment.
                </div>
                <div className='selection'>
                    <p>Select Size</p>
                    <div className='sizes'>
                        <div className='size'>S</div>
                        <div className='size'>M</div>
                        <div className='size'>L</div>
                        <div className='size'>XL</div>
                        <div className='size'>XXL</div></div>
                </div>
                <div className='buttons'>

                    <button className='cart-btn'>Add to Cart <img className='cartimg' src={carticon} alt='' /> </button>
                    <button className='buy-btn'>Buy Now</button>
                </div>



            </div>

        </div>
    )
}

export default ProductDisplay

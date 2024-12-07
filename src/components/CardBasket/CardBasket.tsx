import React from 'react';
import './CardBasket.css';
import { TiDelete } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productsSlice } from '../../store/products.slice';

const CardBasket = ({ item }) => {

   const dispatch = useDispatch();

   return (
      <div className='card-basket'>
         <Link className='card-basket-link' to={"/collection/" + item.id}>
            <img className="card-basket__img" alt='Not img' src={"./img/products/" + item.img} />
         </Link>
         <h4 className="card-basket__title">{item.title}</h4>
         <b className="card-basket__category">{item.category}</b>
         <b className="card-basket__price">${item.price}</b>
         <button onClick={() => dispatch(productsSlice.actions.deleteBasketProducts(item))} className="card-basket__delete-btn">
            <TiDelete className="delete-btn__icon" />
         </button>
      </div>
   )
}

export default CardBasket;

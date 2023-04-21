import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import FavoritesItem from '../components/FavoriteItem';
import { Button, Container, Grid, GridItem } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FavoritesList = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    // setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);


  return (
    <Container p={5}>
     
      <h1>Favourites List</h1>
      {cart.length > 0 ? (
        <>
         {cart.map((item) => {
                return <FavoritesItem key={item.imdbID} item={item} />;
          })}
          <h1>Your List Summary</h1>
          <h2>Total Item: {cart.length}</h2>
        </>
      ) :
      <>
      <h1>Your nomination list is empty</h1>
      <Button onClick={() => navigate('/searchmovieslist')}>Nominate now</Button>
      </>
        }
      
    </Container>
  )
}

export default FavoritesList

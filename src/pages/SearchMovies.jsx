import React, { useState } from 'react'
import {
  FormControl,
  // FormLabel,
  // FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  InputRightElement,
  Flex,
  InputGroup
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {Heading,Stack,StackDivider,Box,Text, Image, Button} from '@chakra-ui/react'
import Product from '../components/Product';




const fetch = async movieName => {
  let apiKey = 'ec497065';
  // const { data } = await axios.get(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  // );
  const { data } = await axios.get(
    `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
  );
  console.log(data)
  return data;
};

const SearchMovies = () => {
  const [city, setCity] = useState('washington');
  const { data, error } = useQuery(['temperature', city], () => fetch(city));


  const submit = (event) => {
    event.preventDefault();
    const city = new FormData(event.currentTarget).get("city");

    setCity(city);
  };

  return (
    <Grid p={5}>
      <GridItem>
      <FormControl onSubmit={submit}>
        <InputGroup size='md'>
          <Input name="city" onBlur={e => setCity(e.target.value)} type="text" placeholder='Enter a movie to nominate'/>
          <InputRightElement children={<SearchIcon color='green.500' />} type="submit"/>
        </InputGroup>
      </FormControl>
      </GridItem>
      <GridItem p={1}>
      {!data ? null : 
      data.Search.map((item) => {
        return(
        <Product key={item.imdbID} item={item}/>
        );
      })
      }
      </GridItem>
    </Grid>
  )
}

export default SearchMovies

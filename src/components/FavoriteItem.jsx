import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image,Stack,Heading,Button, background, Toast, useToast } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import {  remove } from "../redux/slices/cartSlice";
import { DeleteIcon } from '@chakra-ui/icons';



const FavoritesItem = ({item}) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const toast = useToast();

    const removeFromCart = () => {
        dispatch(remove(item.imdbID));
        toast({
            title: `You have unnominated ${item.Title}`,
            description: `You have unnominated a total of ${cart.length+1} movies`,
            status: 'success',
            duration: 9000,
            isClosable: true,
            icon: <DeleteIcon/>
          })
    }
    
    return (
    <div>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'>
            <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={item.Poster}
            alt={item.Title}
            />
            <Stack>
            <CardBody>
                <Heading size={'md'}>{item.Title}</Heading>
            </CardBody>
            <CardFooter>
                <Button
                className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
                onClick={removeFromCart}
                style={{backgroundColor:'lightpink', color:'black'}}
                >
                Unnominate movie
                </Button>
            </CardFooter>
            </Stack>
        </Card>
    </div>
  )
}

export default FavoritesItem

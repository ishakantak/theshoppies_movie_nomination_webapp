import React from 'react'
import { Card, CardBody, CardFooter, Image,Stack,Heading,Button, useToast } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { CheckCircleIcon, DeleteIcon, WarningIcon } from '@chakra-ui/icons';


const Product = ({item}) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const toast = useToast();

    const addToCart = () => {
        if(cart.length > 4) {
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
                icon: <WarningIcon/>
              })
        }
        if(cart.length === 4) {
            dispatch(add(item));
            toast({
                title: `You have nominated ${item.Title}`,
                description: "You have nominated 5 movies",
                status: 'success',
                duration: 9000,
                isClosable: true,
                icon: <CheckCircleIcon/>
              })
        }
        
        if(cart.length < 4) {
            dispatch(add(item));
            toast({
                title: `You have nominated ${item.Title}`,
                description: `You have nominated a total of ${cart.length+1} movies`,
                status: 'success',
                duration: 9000,
                isClosable: true,
                icon: <CheckCircleIcon/>
              })
        }
    }
        
    

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
                {cart.some((p) => p.imdbID === item.imdbID) ? (
                    <Button
                    className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
                    onClick={removeFromCart}
                    style={{backgroundColor:'red', color:'white'}}
                    >
                    Unnominate movie
                    </Button>
                 ) : ( 
                    <Button
                    className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
                    onClick={addToCart}
                    disabled={cart.length === 5}
                    style={{backgroundColor:'green', color:'white'}}
                    >
                    Nominate Movie
                    </Button>
                 )} 
            </CardFooter>
            </Stack>
        </Card>
        
    </div>
  )
}

export default Product

import { React, useState, useMemo,useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { wrapper } from '../../config/slice'
import { readCache } from '../../config/cache'
import ProductCard from '../../components/ProductCard'
import Link from 'next/link'
import {
	Button
} from '@chakra-ui/react';
import {
	Flex,
	Stack,
	Heading,
	Text,
	useColorModeValue,
	Select,
	useColorMode,
	Box

} from '@chakra-ui/react';
import { useRouter } from 'next/router'






// Main Component


const categories = [{name:'All Beard&Shave'},{name:'After Shave'}, {name:'Razors'},{name:'Beard Oil'}]

const Brand = ({ products }) => {
	const router = useRouter()
    
    useEffect(() => {
        if(router.isReady){
            const { id } = router.query;
            if (id) return setCurrentCategory(id);
         }
        
    }, []);
   
    const prod = products.filter(p=> p)

	const [isLargerThan680] = useMediaQuery('(min-width: 680px)')

	const [currentCategory, setCurrentCategory] = useState('')

	const { colorMode, toggleColorMode } = useColorMode();



	const categoryProducts = useMemo(() => {
		// if there aren't any products return an empty array, which in the rendering function will turn into 0 product divs
		if (!prod) return []

		// if currentCategory is not set (if you forgot default value for example) return all products
		// also if currentCategory is 'all' skip filtering the products because we obviously return all of them
		if (currentCategory === 'All Beard&Shave') return prod


		// here we return any product who's categories include one with the slug equaling the value of 'currentCategory'
		return prod.filter(p => p.cat === `${currentCategory}`)
	}, [currentCategory])




	//handler for dropdown
	const handleDrop = e => {
		e.preventDefault();
		setCurrentCategory(e.target.value)
	}


	// memoized mapping from the filtered "categorySELECT" to product cards
	const productCardsSelect = useMemo(
		() => categoryProducts.map(product =>  <ProductCard product={product} id={product.name} key={product.id} />),
		[categoryProducts, currentCategory]
	)







	return (
		<>
			<div className='flex flex-wrap pt-[8rem] w-full' data-aos-id-blocks>
				<div className='md:w-1/4 hidden h-full md:flex flex-wrap'>
					<div className='w-full'>
					<div className='w-[98%] h-[350px] p-4 shadow-md rounded-lg'>
						<Flex
							minH={'30vh'}
							align={'center'}
							justify={'center'}
						
							py={0}
							bg={useColorModeValue('gray.50', 'gray.800')}>


							<Stack
							
								bg={useColorModeValue('white', 'gray.700')}
								rounded={'xl'}
								w={'full'}
								p={10}
								spacing={8}
							>


								<Stack align={'center'} spacing={2}>

									<Heading
										textTransform={'uppercase'}
										fontSize={'3xl'}
										color={useColorModeValue('gray.800', 'gray.200')}>
										Filter
									</Heading>

									<Text fontSize={'lg'} color={'white'}>
										Woman/Men
									</Text>
									<Select placeholder='Select option'>
										<option value='option1'>Men</option>
										<option value='option2'>Women</option>
									</Select>

								</Stack>


								<Stack align={'center'} spacing={2}>



									<Text fontSize={'lg'} color={'white'}>
										Price Range
									</Text>
									<Select placeholder='Select option' >
										<option value='50'>0-50€</option>
										<option value='100'>50-100€</option>
										<option value='200'>100-200€</option>
									</Select>

								</Stack>


							</Stack>
						</Flex>
					</div>


					</div>


					<div className='md:flex hidden p-5'>

						<div className='w-full rounded-lg'>
						</div>
					</div>
				</div>
				<div className='md:w-3/4 w-full h-full flex px-4 flex-wrap'>
					<div className='w-full flex px-3 h-[15rem]'>
						<div className='bg-productsbg bg-cover bg-left-top flex relative w-full rounded-lg'>
							<h1 className='text-3xl font-bold text-white font-sans absolute top-8 left-2'>Products</h1>
						</div>
					</div>

					<Flex w={'full'}
						px={4}
						py={4}
						align={'center'}
						justify={'center'}>
						{ <Select onClick={handleDrop} bgColor={'black'} color='white'>
							{categories.map(({ index, name }) => (
								<option id={index} key={index} value={name}>{name}</option>

							))}
						</Select>}


					</Flex>


					<Box position="relative" w={'100%'} px={4} h={'full'}>

						
					
							<div className='grid grid-cols-2 gap-y-10 gap-x-1 lg:grid-cols-5 lg:gap-x-5'>
								{productCardsSelect}

							</div>


					



					</Box>


				</div>
			</div>



		</>

	)
}

export default Brand

// Static

export const getStaticPaths = async () => {
	const { products } = await readCache()
	return {
		paths: products.map(product => ({
			params: {
				id: product.cat,
			},
		})),
		fallback: false,
	}
}

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async () => {
	const props = await readCache()
	props.title = 'Products'
	return {
		props,
	}
})
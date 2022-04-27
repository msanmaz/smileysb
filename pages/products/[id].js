import { useState } from 'react'
import {
	Stack,
	Button,
	Container,
	useColorMode,
	Image,
	Box,
	Flex,
	Heading,
	Text,
	Select,
	HStack,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react'
import { readCache } from '../../config/cache'
import {  wrapper } from '../../config/slice'
import Gallery from '../../components/Gallery'
import { MobileGallery } from '../../components/MobileGallery';




const Test = ({ product }) => {
	const [isLargerThan680] = useMediaQuery('(min-width: 680px)')
	const { colorMode, toggleColorMode } = useColorMode();


	const [quantity, setQuantity] = useState(0)

	return (
		<>
			<Container minH={'full'} maxW='full'>

				<Box w={'full'} mx={'auto'} px={{ base: 0, md: '5rem' }} maxW={'2000px'}>
					<Flex direction={{ base: 'column', md: 'row' }} justifyContent={'flex-start'} alignItems={'items-strech'} flexWrap={{ base: 'wrap', md: 'nowrap' }} mx={{ base: 0, md: '-1rem', lg: '-2rem' }}>
						{
							isLargerThan680 ? <Gallery image={product.img} /> : <MobileGallery image={product.img}/>

						}



						<Box w={{ base: 'full', sm: 'full', md: '41%', lg: '33%' }} px={{ base: 0, sm: '1rem', md: 0 }}>
							<Box minH={{base:'auto',md:'auto'}} display='flex' direction='column' pt={{ md: '7rem' }} top={0} bottom={'auto'} position='sticky'>
								<Stack direction={'column'} w='full' mb={{ base: '1rem', sm: '1rem', md: '2rem' }}>
									<Box mb={'5px'}>
										<Heading mb='1rem' fontWeight={'lights'} fontSize={'1.5rem'}>{product.name}</Heading>

										<Text mb='1.5rem' fontSize={'1.2rem'}>{product.brand}</Text>

										<Text mb='1rem' fontSize={'1rem'}>Sizes:</Text>

										<Select placeholder='Choose Size'  color={useColorModeValue('white', 'white')} bgColor={useColorModeValue('black', 'black')} size='lg'>
										<option>No Sizes</option> 
												
										
										</Select>









										<Stack w={'full'} pt={4} pb='2rem' px={{ base: 0, md: 0, lg: '5px' }}>
											<Text>Quantity:</Text>
											<Box display={'flex'}>
												<Button>+</Button>

												<Box px={4} mt={2}>{quantity} </Box>

												<Button disabled={quantity == 0 ? true : false}>-</Button>

											</Box>

										</Stack>


										<Button  p={'1.5rem'} _hover={{ bgColor: 'gray.800' }} w={'100%'} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('black', 'white')}>Add To Cart</Button>

										<Box py={4}>
											<HStack>
												{colorMode === 'dark' ? <Image w='1.5rem' h='1.5rem' rounded={'xl'} color='white' src='/images/whiteclock.svg' />
													: <Image w='1.5rem' h='1.5rem' src='/images/clock-svgrepo-com.svg' />
												}
												<Text>Same day delivery applies for orders placed before 2 PM</Text>
											</HStack>

										</Box>


									</Box>

								</Stack>
							</Box>

						</Box>





					</Flex>



					<Stack border='1px' borderColor={useColorModeValue('black', 'white')}>
						<Box py={{ base: '1rem', sm: '2rem', md: '2rem' }}>
							<Box px={{ base: '1rem', sm: '3rem', md: '5rem' }}>
								<Flex flexWrap={{ base: 'wrap', md: 'noWrap' }} direction={{ base: 'column', md: 'row' }} alignItems={'stretch'}>
									<Stack w={{ base: 'full', md: '33%' }}>
										<Box h="full">
											<Box px={{ base: '1rem', sm: '3rem', md: '5rem' }}>
												<Box py={{ base: '1rem', sm: '2rem', md: '2rem' }}>
													<Text as='h2' fontSize={'1.2rem'}>Product Info</Text>
													<Box my={'2rem'}>
														<Text my={'6px'}>Product ID</Text>
														<Text as='span' border='1px' borderColor={'black'} p='1px'>{product.id}</Text>
														<Text as='p' fontSize={'1rem'}>Cut to an Oversized fit, the EP19 is made from heavyweight 100% combed organic cotton and is Fair-Wear, Vegan and GOTS accredited. It&lsquo;s production is 90% Reduced CO2 achieved by better manufacturing.</Text>
													</Box>

												</Box>
											</Box>
										</Box>
									</Stack>
									<Stack w={{ base: 'full', md: '33%' }}>
										<Box h="full">
											<Box px={{ base: '1rem', sm: '3rem', md: '5rem' }}>
												<Box py={{ base: '1rem', sm: '2rem', md: '2rem' }}>
													<Text as='h2' fontSize={'1.2rem'}>GARMENT CARE</Text>
													<Box my={'2rem'}>
														<Text as='p' fontSize={'1rem'}>Love your garment and it will love you back. Being gentle is easy and better for the planet, it also protects the print and helps maintain shape and colour for longer.</Text>
													</Box>

												</Box>
											</Box>
										</Box>
									</Stack>
									<Stack borderLeft={'1px'} borderColor='black' w={{ base: 'full', md: '33%' }}>
										<Box h="full">
											<Box px={{ base: '1rem', sm: '3rem', md: '5rem' }}>
												<Box py={{ base: '1rem', sm: '2rem', md: '2rem' }}>
													<Text as='h2' fontSize={'1.2rem'}>Delivery</Text>
													<Box my={'2rem'}>
														<Text as='p' fontSize={'1rem'}>Orders are printed and shipped when the campaign ends and are mailed first-class. Each campaign needs to reach it&lsquo;s minimum sales in order to be successful.
															<br />
															NOTE: if you order garments from multiple campaigns they will be printed & shipped separately. Delivery charges are calculated separately for each campaign and added to your shopping bag.</Text>
													</Box>

												</Box>
											</Box>
										</Box>
									</Stack>

								</Flex>
							</Box>
						</Box>

					</Stack>

				</Box>

				{/* <div className='w-full mx-auto px-[2rem] md:px-[5rem] max-w-[2000px]'>



					<div className='flex flex-column md:flex-nowrap sm:flex-row items-stretch justify-start -mx-0 sm:-mx-[1rem] md:-mx-[2rem] flex-wrap'>


						<div className='w-full sm:w-full md:w-[58.33%] lg:w-[66%] px-0 sm:px-[1rem] md:px-[2rem]'>
							<div className='mb-[3rem] sm:mt-0 md:mb-[6rem] md:-ml-[5rem]'>
								<div className='_1QZSe relative'>//


									<div className='w-auto'>
										<div className='go9Kp' style={{ backgroundColor: 'rgb(247, 248, 249)' }}>
											<div className='relative'>
												<img src={`${pictures}`} />
											</div>
										</div>
									</div>

									<div className='w-auto'>
										<div className='go9Kp' style={{ backgroundColor: 'rgb(247, 248, 249)' }}>
											<div className='relative'>
												<img src={`/images/2.jpg`} />
											</div>
										</div>
									</div>




								</div>
							</div>
						</div>


						<div className='w-full sm:w-full md:w-[41%] lg:w-[33%] px-0 sm:px-[1rem] md:px-[2rem]'>
							<div className='md:min-h-[100vh] flex flex-col md:pt-[7rem] top-0 bottom-auto' style={{ position: 'sticky' }}>
								<div className='mb-[1rem] sm:mb-[1rem] md:mb-[2rem]'>
									<div className='mb-[1rem]'>
										<h1 className='heading leading-normal text-[1.8rem] sm:text-[1.8rem] md:text-[1.8rem]'>{product.name}</h1>
									</div>
									<div className='heading leading-normal text-[1.4rem]'>
										<span class>{product.price.formatted_with_symbol}</span>
									</div>


								</div>

							</div>
						</div>


					</div>




				</div> */}

				{/* <HStack mt={'4rem'} px={{base:6,md:6}}>
					<BreadCrumb product={product} />
				</HStack>


				<Stack direction={{ base: 'column', md: 'row', xl: 'row' }}>
					<Gallery />
					<Stack w={{ base: '100%', md: '50%', xl: '50%' }} px={4} justify={'center'} >

						<Box as={'header'}>
							<Heading
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{ base: '2xl', sm: '4xl', lg: '4xl' }}>
								{product.name}
							</Heading>
							<Text
								color={useColorModeValue('gray.900', 'gray.400')}
								fontWeight={300}
								py={4}
								fontSize={'2xl'}>
								{product.price.formatted_with_symbol}
							</Text>
						</Box>

						<Stack
							spacing={{ base: 4, sm: 6 }}
							direction={'column'}
							divider={
								<StackDivider
									borderColor={useColorModeValue('gray.200', 'gray.600')}
								/>
							}>
							<VStack spacing={{ base: 4, sm: 6 }}>



								<Text fontSize={'lg'}>
									{description}
								</Text>
							</VStack>


							<Box>
								<Text
									fontSize={{ base: '16px', lg: '18px' }}
									color={useColorModeValue('yellow.500', 'yellow.300')}
									fontWeight={'500'}
									textTransform={'uppercase'}
									mb={'4'}>
									Features
								</Text>

								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<List spacing={2}>
										<ListItem>Chronograph</ListItem>
										<ListItem>Master Chronometer Certified</ListItem>{' '}
									</List>
									<List spacing={2}>
										<ListItem>Anti‑magnetic</ListItem>
										<ListItem>Chronometer</ListItem>
									</List>
								</SimpleGrid>
							</Box>

						</Stack>



						<Flex  w={'full'} direction={{base:'column',md:'row',lg:'row'}} py={6} >

							<Flex w={'50%'} py={{base:4,md:0,lg:0,xl:0}}>

								<Stack w={'full'} px={{ base: 0, md: 0, lg: 0 }}>
									<Text>Quantity:</Text>
									<Box display={'flex'}>
										<Button onClick={() => setQuantity(quantity + 1)}>+</Button>

										<Box px={4} mt={2}>{quantity} </Box>

										<Button onClick={() => {
											if (quantity > 0) {
												setQuantity(quantity - 1)
											}
										}} disabled={quantity == 0 ? true : false}>-</Button>

									</Box>

								</Stack>


							</Flex>
	

							<Stack w={'50%'} display="flex"  align={{base:'flex-start', md:'flex-end'}}>
								
								<Text>Sizes:</Text>

								<Flex>
								{product.variant_groups.length === 0 ? <div>No Sizes</div> : product.variant_groups[0].options?.map((variant) =>
										<Button onClick={(e) => {OnUpdateVariant({
											id:variant.id,
											variantId: product.variant_groups[0].id
										}); onCategoryClick(e)}} key={variant.id} colorScheme={'gray'} 				bg={useColorModeValue('gray.200', 'gray.700')}
										_hover={{ bg: 'gray.500' }} id={variant.name} mx={2} isActive={size === variant.name ? true : false}>{variant.name}</Button>
									)
									
								
								}
									
								</Flex>

							</Stack>



						</Flex>
						

						<Box  w={'full'} display={'flex'}>
								<Button onClick={onAddToCart} w={'100%'} bgColor={'teal.500'}>Add To Cart</Button>

							</Box>


					</Stack>


				</Stack>


				<WhatsIncluded /> */}






			</Container>


		</>
	)
}





export const getStaticPaths = async () => {
	const { products } = await readCache()
	return {
		paths: products.map(product => ({
			params: {
				id: product.id,
			},
		})),
		fallback: false,
	}
}


export const getStaticProps = wrapper.getStaticProps(store => async ({ params }) => {
	const { products, ...props } = await readCache()

	const { id } = params

	const product = products.find(p => p.id === id)

	return {
		props: { ...props, product, title: product.name },
	}
})


export default Test
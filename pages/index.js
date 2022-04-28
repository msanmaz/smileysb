import React,{useMemo} from 'react'
import Hero from '../components/Hero'
import {VStack,Flex,Stack,Image,Container,Box,Heading,Text,Spacer,IconButton} from '@chakra-ui/react'
import {ChevronLeftIcon,ChevronRightIcon} from '@chakra-ui/icons'
import { wrapper } from '../config/slice'
import { readCache } from '../config/cache'
import SwiperCore, { Navigation } from "swiper";
import ProductCard from '../components/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'



// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import Categories from '../components/Categories'



SwiperCore.use([Navigation]);



export default function Home({products}) {
 
  const [currentCategory, setCurrentCategory] = React.useState('all')

  const swiperRef = React.useRef(null)
  const swiperRef2 = React.useRef(null)


  const categoryProducts = useMemo(() => {
    // if there aren't any products return an empty array, which in the rendering function will turn into 0 product divs
    if (!products) return []

    // if currentCategory is not set (if you forgot default value for example) return all products
    // also if currentCategory is 'all' skip filtering the products because we obviously return all of them
    if (!currentCategory) return products

    // here we return any product who's categories include one with the slug equaling the value of 'currentCategory'
    return products.filter(p => p.brand === 'Bandido')
  }, [products,currentCategory])

  const diffCat = useMemo(() => {
    // if there aren't any products return an empty array, which in the rendering function will turn into 0 product divs
    if (!products) return []

    // if currentCategory is not set (if you forgot default value for example) return all products
    // also if currentCategory is 'all' skip filtering the products because we obviously return all of them
    if (!currentCategory) return products

    // here we return any product who's categories include one with the slug equaling the value of 'currentCategory'
    return products.filter(p => p)
  }, [products,currentCategory])

  return (
    <Container maxW={'full'} px={'auto'}>

      
      <Hero/>
      
      <Flex px={{base:4, md:'10rem'}} pt={{base:'4rem',md:'5rem'}} alignItems={'center'} justifyContent={'space-between'} >
        <Stack >
          <Image w={{base:'4rem', md:'5rem'}} rounded={'2xl'}  h={{base:'4rem', md:'5rem'}} src='/andis.jpeg'/>
        </Stack>
        <Stack >
          <Image w={{base:'4rem', md:'5rem'}} rounded={'2xl'}  h={{base:'4rem', md:'5rem'}}  src='/Arkoamblem.png'/>
        </Stack>
        <Stack >
          <Image w={{base:'4rem', md:'5rem'}} bgColor='white' rounded={'2xl'} h={{base:'4rem', md:'5rem'}}  src="/Bandidohh_2-removebg-preview.png"/>
        </Stack>
        <Stack >
          <Image  w={{base:'4rem', md:'5rem'}}  bgColor='white' rounded={'2xl'} h={{base:'4rem', md:'5rem'}}  src='/wahllogo.png'/>
        </Stack>
      </Flex>


      
      {/* first swiper */}
      <Box my={'4rem'} pl={{ base: 4, md: 10 }}>

        <Flex>

          <Box>
            <Heading as={'h3'} lineHeight={10} fontSize={{ base: 'xl', md: 'xl' }}>Community Favourites</Heading>
            <Text color={'gray.500'} mb={4}>Top picks from the shop</Text>
          </Box>

          <Spacer />

          <Box px={4} display={{ base: 'none', md: 'flex' }}>
            <IconButton id="previousButton" mr={2} rounded={'3xl'} icon={<ChevronLeftIcon />} onClick={() => swiperRef.current.swiper.slidePrev()} />
            <IconButton id="nextButton" rounded={'3xl'} icon={<ChevronRightIcon />} onClick={() => swiperRef.current.swiper.slideNext()} />
          </Box>

        </Flex>


        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          ref={swiperRef}
          grabCursor={true}
        >
          {categoryProducts.map(product => <SwiperSlide key={product.id}> <ProductCard product={product} key={product.id} /> </SwiperSlide>)}


        </Swiper>
      </Box>


      <Categories/>



{/* second swiper */}
<Box my={{base:'1rem',md:4}} pl={{ base: 4, md: 10 }}>

<Flex>

  <Box>
    <Heading as={'h3'} lineHeight={10} fontSize={{ base: 'xl', md: 'xl' }}>Styled By Us</Heading>
    <Text color={'gray.500'} mb={4}>We pick the GOAT</Text>
  </Box>

  <Spacer />

  <Box px={4} display={{ base: 'none', md: 'flex' }}>
    <IconButton id="previousButton" mr={2} rounded={'3xl'} icon={<ChevronLeftIcon />} onClick={() => swiperRef2.current.swiper.slidePrev()} />
    <IconButton id="nextButton" rounded={'3xl'} icon={<ChevronRightIcon />} onClick={() => swiperRef2.current.swiper.slideNext()} />
  </Box>

</Flex>


<Swiper
  spaceBetween={10}
  slidesPerView={'auto'}
  ref={swiperRef2}
  grabCursor={true}
>
  {diffCat.map(product => <SwiperSlide key={product.id}> <ProductCard product={product} key={product.id} /> </SwiperSlide>)}


</Swiper>
</Box>





    </Container>
  )
}


export const getStaticProps = wrapper.getStaticProps(store => async () => {
  const props = await readCache()

  return {
    props,
  }
})

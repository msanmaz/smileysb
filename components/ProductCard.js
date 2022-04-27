
import { useToast } from '@chakra-ui/react'
import {
	AspectRatio,
	Box,
	Button,
	Image,
	Skeleton,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
  } from '@chakra-ui/react'
  import { PriceTag } from './PriceTag'
  import Link from 'next/link'
  



export default function ProductCard({product}) {


	const { id, name, img,brand } = product
	return (
	  <Stack
		spacing={useBreakpointValue({
		  base: '4',
		  md: '5',
		})}
	  >
		<Box position="relative" bgColor='gray.200' rounded={'10px'}>
		  <AspectRatio ratio={4 / 5}>
			<Image
			  src={img}
			  alt={name}
			  
			  draggable="false"
			  fallback={<Skeleton />}
			  borderRadius={useBreakpointValue({
				base: 'md',
				md: 'xl',
			  })}
			/>
		  </AspectRatio>

		</Box>
		<Stack>
		  <Stack spacing="1">
		  <PriceTag price={brand} currency="EUR" />

			<Text fontWeight="large" color={useColorModeValue('gray.900', 'gray.200')}>
			  {name.substring(0,15)}
			</Text>
		  </Stack>
		</Stack>
		<Stack align="center">
		<Link href={`/products/${id}`}>
		  <Button bgColor={useColorModeValue('gray.200', 'gray.700')} 		_hover={{ bg:useColorModeValue('gray.300', 'gray.600')}} isFullWidth>
			View Details
		  </Button>
		  </Link>
		  {/* <Link
			href={`/products/${id}`}
		  >
			View Details
		  </Link> */}
		</Stack>
	  </Stack>
	)
}




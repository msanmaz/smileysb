
import React, { useCallback, useState } from 'react';
import Link from 'next/link'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  HStack,
  Box
} from '@chakra-ui/react'
import { ChevronDownIcon,MoonIcon,SunIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="fixed z-50 w-full">
      <div className={` w-full md:px-6 p-4 px-0 flex justify-between items-center navh bg-[#161616]`}>
        <HStack display={'flex'} justifyContent={'flex-start'}>
        <Link href="/">
          <div className="flex my-4">
            <img src="/logosbs1.2.png" className="cursor-pointer fixed h-[6rem] w-[5rem] -top-[1rem] md:-left-0" />
          </div>
        </Link>


        <Box px={{base:'3.7rem',md:'3rem'}}>
        {colorMode === 'light' ? <IconButton aria-label='Change Dark' bgColor={'transparent'} color='white' _hover={{bgColor:'gray.700'}}  onClick={toggleColorMode} icon={<MoonIcon />} />
                            : <IconButton aria-label='Change Light' bgColor={'transparent'} onClick={toggleColorMode} icon={<SunIcon />} />
                        }
        </Box>

      
        </HStack>





              <HStack display={'flex'} justifyContent='flex-end'>
        <div className="md:flex hidden items-center ">
          <a href="tel:+353879402510">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-8 h-8" version="1.1" x="0" y="0" viewBox="0 0 512.076 512.076" style={{ enableBackground: "new 0 0 512 512" }} ><g>
              <g xmlns="http://www.w3.org/2000/svg" transform="translate(-1 -1)">
                <g>
                  <g>
                    <path d="M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818     c-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453     l-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646     C109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539     c-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92     c13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315     C517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173     c-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061     l43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579     l-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379     c49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801     c4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z" fill="#ffffff" data-original="#000000" />
                    <path d="M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533     c-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z" fill="#ffffff" data-original="#000000" />
                    <path d="M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533     c4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533     S286.448,137.59,291.161,137.59z" fill="#ffffff" data-original="#000000" />
                    <path d="M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533     c-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z" fill="#ffffff" data-original="#000000" />
                  </g>
                </g>
              </g>
            </g>
            </svg>



          </a>

        </div>

        <div className="flex items-center px-4 md:mt-0">
          <a href="https://api.whatsapp.com/send?phone=353879402510" target="_blank" rel="noreferrer">
            <svg viewBox="-1 0 512 512" className="fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg"><path d="m10.894531 512c-2.875 0-5.671875-1.136719-7.746093-3.234375-2.734376-2.765625-3.789063-6.78125-2.761719-10.535156l33.285156-121.546875c-20.722656-37.472656-31.648437-79.863282-31.632813-122.894532.058594-139.941406 113.941407-253.789062 253.871094-253.789062 67.871094.0273438 131.644532 26.464844 179.578125 74.433594 47.925781 47.972656 74.308594 111.742187 74.289063 179.558594-.0625 139.945312-113.945313 253.800781-253.867188 253.800781 0 0-.105468 0-.109375 0-40.871093-.015625-81.390625-9.976563-117.46875-28.84375l-124.675781 32.695312c-.914062.238281-1.84375.355469-2.761719.355469zm0 0" fill="#e5e5e5" /><path d="m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0" fill="#fff" /><path d="m19.34375 492.625 33.277344-121.519531c-20.53125-35.5625-31.324219-75.910157-31.3125-117.234375.050781-129.296875 105.273437-234.488282 234.558594-234.488282 62.75.027344 121.644531 24.449219 165.921874 68.773438 44.289063 44.324219 68.664063 103.242188 68.640626 165.898438-.054688 129.300781-105.28125 234.503906-234.550782 234.503906-.011718 0 .003906 0 0 0h-.105468c-39.253907-.015625-77.828126-9.867188-112.085938-28.539063zm0 0" fill="#64b161" /><g fill="#fff"><path d="m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0" /><path d="m195.183594 152.246094c-4.546875-10.109375-9.335938-10.3125-13.664063-10.488282-3.539062-.152343-7.589843-.144531-11.632812-.144531-4.046875 0-10.625 1.523438-16.1875 7.597657-5.566407 6.074218-21.253907 20.761718-21.253907 50.632812 0 29.875 21.757813 58.738281 24.792969 62.792969 3.035157 4.050781 42 67.308593 103.707031 91.644531 51.285157 20.226562 61.71875 16.203125 72.851563 15.191406 11.132813-1.011718 35.917969-14.6875 40.976563-28.863281 5.0625-14.175781 5.0625-26.324219 3.542968-28.867187-1.519531-2.527344-5.566406-4.046876-11.636718-7.082032-6.070313-3.035156-35.917969-17.726562-41.484376-19.75-5.566406-2.027344-9.613281-3.035156-13.660156 3.042969-4.050781 6.070313-15.675781 19.742187-19.21875 23.789063-3.542968 4.058593-7.085937 4.566406-13.15625 1.527343-6.070312-3.042969-25.625-9.449219-48.820312-30.132812-18.046875-16.089844-30.234375-35.964844-33.777344-42.042969-3.539062-6.070312-.058594-9.070312 2.667969-12.386719 4.910156-5.972656 13.148437-16.710937 15.171875-20.757812 2.023437-4.054688 1.011718-7.597657-.503906-10.636719-1.519532-3.035156-13.320313-33.058594-18.714844-45.066406zm0 0" fillRule="evenodd" /></g></svg>

          </a>
        </div>
              </HStack>





      </div>


      <div className="w-full bg-white flex-wrap justify-center md:justify-start md:px-4 space-x-4 flex">
        {NAV_ITEMS.map((navItem,index) => (
          <Menu key={index}
          >
            <MenuButton
              px={2}
              py={2}
              transition='all 0.2s'
              bgColor={'white'}
              color={'black'}
              fontSize={{ base: '0.6rem', md: '0.8rem' }}
              _hover={{ bg: 'gray.100' }}
              _expanded={{ bg: 'gray.200' }}
              as={Button} rightIcon={<ChevronDownIcon />}>
              {navItem.label}
            </MenuButton>
            <MenuList bgColor='white'>

              {navItem.children.map((child,index) => (
                <Link href={`/${navItem.label}/[id]`} passHref key={index} as={`/${navItem.label}/${child.href}`}>

                  <MenuItem py={4} color={'black'}>{child.label}</MenuItem>
                </Link>

              ))}
            </MenuList>

          </Menu>
        ))}



      </div>


    </div>
  )
}




const NAV_ITEMS = [
  {
    label: 'Brands',
    children: [
      {
        label: 'Arko',
        subLabel: 'Trending Design to inspire you',
        href: 'Arko',
      },
      {
        label: 'Barbicide',
        subLabel: 'Up-and-coming Designers',
        href: 'Barbicide',
      },
      {
        label: 'Bandido',
        subLabel: 'Up-and-coming Designers',
        href: 'Bandido',
      },
      {
        label: 'Wahl',
        subLabel: 'Up-and-coming Designers',
        href: 'Wahl',
      },
      {
        label: 'All Brands',
        subLabel: 'Up-and-coming Designers',
        href: 'All Brands',
      },
    ],
  },
  {
    label: 'Hair&Care',
    children: [
      {
        label: 'Hair Spray',
        subLabel: 'Find your dream design job',
        href: 'Hair%20Spray',
      },
      {
        label: 'Hair Wax',
        subLabel: 'Find your dream design job',
        href: 'Hair%20Wax',
      },
      {
        label: 'Pomade Wax',
        subLabel: 'An exclusive list for contract work',
        href: 'Pomade%20Wax',
      },
      {
        label: 'Shampoo',
        subLabel: 'An exclusive list for contract work',
        href: 'Shampoo',
      },
      {
        label: 'Hair Gel',
        subLabel: 'An exclusive list for contract work',
        href: 'Hair%20Gel',
      },
      {
        label: 'All Hair&Care',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Beard&Shave',
    children: [
      {
        label: 'Razor',
        subLabel: 'Find your dream design job',
        href: 'Razors',
      },
      {
        label: 'After Shave',
        subLabel: 'An exclusive list for contract work',
        href: 'After%20Shave',
      },
      {
        label: 'Beard Oil',
        subLabel: 'An exclusive list for contract work',
        href: 'Beard%20Oil',
      },
      {
        label: 'All Beard&Shave',
        subLabel: 'An exclusive list for contract work',
        href: '',
      },
    ],
  },
  {
    label: 'Barbering',
    children: [
      {
        label: 'Electrical',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Scissors',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Aprons',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Hygiene',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'All Barbering',
        subLabel: 'Find your dream design job',
        href: '#',
      },
    ],
  },
];


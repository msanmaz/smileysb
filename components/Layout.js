import React from 'react';
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './/Footer'
import { Slide, VStack, useDisclosure, Text, Button, Box, Stack, HStack, Heading } from '@chakra-ui/react'

const Layout = ({ Component, pageProps, props }) => {
    // If a page will export a static property 'title' it will be added to the website title
    const { title } = pageProps
    let combined_title = `Smileys Barber Supplies`
    if (title) combined_title += ` - ${title}`

    return (
        <VStack
        >
            <Head>
                <title>{combined_title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <Head>

                    <meta name="title" content="Smileys Barber Supplies" />
                    <meta name="description" content="We are a professional barber shop and barber equipment supplier, Our products are hair care items, shaving, barbering. We sell barbering products from brands such as Totex, Arko, Absolute, PermaSharp, Barbicide. We also have a range of professional clippers" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://smileysbarbersupplier.vercel.app" />
                    <meta property="og:title" content="Smileys Barber Supplies" />
                    <meta property="og:description" content="We are a professional barber shop and barber equipment supplier, Our products are hair care items, shaving, barbering. We sell barbering products from brands such as Totex, Arko, Absolute, PermaSharp, Barbicide. We also have a range of professional clippers" />
                    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/smileysbarber.appspot.com/o/Screenshot%202021-05-20%20at%2021.13.00.png?alt=media&token=3f0c4ee1-d293-4365-b53f-267434406b6b" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://metatags.io/" />
                    <meta property="twitter:title" content="Smileys Barber Supplies" />
                    <meta property="twitter:description" content="We are a professional barber shop and barber equipment supplier, Our products are hair care items, shaving, barbering. We sell barbering products from brands such as Totex, Arko, Absolute, PermaSharp, Barbicide. We also have a range of professional clippers" />
                    <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/smileysbarber.appspot.com/o/Screenshot%202021-05-20%20at%2021.13.00.png?alt=media&token=3f0c4ee1-d293-4365-b53f-267434406b6b" />
                </Head>
            </Head>
            <Navbar />
            <Component {...pageProps} />

            <Footer />
        </VStack>
    )
}

export default Layout
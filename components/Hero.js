import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Autoplay, EffectFade } from "swiper";
import "swiper/css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


SwiperCore.use([Autoplay,EffectFade])


function Hero() {
    let count = 0
    const slideRef = React.useRef()
    const images = ['https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80','https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
    const [currentIndex,setCurrentIndex] = React.useState(0)
    
    React.useEffect(() => {
        startSlider()
    },[])

    const startSlider = () => {
        setInterval(() => {
            nextClick()
        }, 6000);
    }

    const nextClick = () => {
        count = (count +1) % images.length
        setCurrentIndex(count)
        slideRef.current.classList.add('_1GHbd')
    }
 
   


    return (
        <>
            <div className='pb-[95%] h-0 relative bg-black flex flex-col justify-between md:h-[100vh] md:p-0'>
                <div className='z-10 pt-[7rem]'>
                    <div className='_3Rh31 _3HsKn w-full mx-auto px-2 md:px-5 max-w-[2000px]'>
                        <div className='w-full' style={{ maxWidth: '614px' }}>
                            <div className='py-3'>
                                <h1 className='heading uppercase text-2xl md:text-xl lg:text-[2rem] md:leading-[1.15] text-white' style={{ fontFamily: 'Roboto , sans-serif' }}>
                                    <span>For professional barber
                                        <br />
                                        and personal care products
                                    </span>
                                </h1>

                            </div>
                        </div>


                    </div>

                </div>


                            <div className={`mx-0 flex flex-col justify-end oVl3V absolute inset-0 opacity-75 pointer-events-none`}>
                                <div ref={slideRef} id='herob'  className='_2MKKw bg-cover bg-center absolute inset-0' style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
                                <div className='z-10'>
                                    <div className='_3Rh31 _3HsKn w-full mx-auto px-2 md:px-5 max-w-[2000px]'>
                                        <div className='py-2 sm:py-4 md:py-8'>
                                            <div className='w-full' style={{ maxWidth: '460px' }}>
                                                <h2 className='heading text-m sm:text-l md:text-[2rem] text-white'>
                                                    TEE'S WE'RE OBSESSED WITH
                                                </h2>
                                                <div className='flex items-end'>
                                                    <p className='text-sm text-gray-300 inline pr-1'>
                                                        <span>Shop our curated edit of tees we can't get enough of. New drops daily. </span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


   

 



            </div>

        </>
    )
}

export default Hero
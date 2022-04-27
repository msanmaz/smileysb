import { loadDB } from '../../../../config/firebase'
import Layout from '../../../../layout/layout'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../../../../components/Product'
const HairProducts = (props) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const max = 15;
    const min = 10;
    const rando = Math.floor(Math.random() * max) + 1;
    const rand = Math.floor(Math.random() * min) + 1;
    useEffect(() => {

        let firebase = loadDB();
        firebase.firestore()
            .collection("hair")
            .onSnapshot(snap => {
                const desc = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(desc);
                setLoading(false)
            });


    }, []);




    return (
        <div className="md:px-8 px-auto w-full">
            <div className="w-full pt-10">
                <div class="absolute bg-gray-300 md:top-36 top-28 p-3 rounded font-sans w-11/13 m-4">
                    <ol class="flex text-grey-dark">
                        <Link href='/'><li class="text-blue font-bold">Home</li></Link>
                        <li><span class="mx-2">/</span></li>
                        <Link href={`/brands/${props.brand}`} as={`/brands/${props.brand}`}><li class="text-blue font-bold cursor-pointer">{props.cat}</li></Link>
                        <li><span class="mx-2">/</span></li>
                        <li>{props.name}</li>
                    </ol>
                </div>

                <div className="px-5 w-full flex md:space-x-20 flex-wrap md:flex-nowrap">
                    <div className="md:w-2/5 w-full flex">


                        <div className="md:my-24 my-4">

                            <div className="w-full">
                                <Link href={`/beardandshave/${props.route}`} as={`/beardandshave/${props.route}`}>
                                    <div
                                        class="p-4 md:pt-20 pt-32 cursor-pointer w-full">
                                        <h3 class="text-lg font-semibold inline-flex">
                                            <svg class="mr-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                                    fill="currentColor" /></svg>
                                                Go Back
                                        </h3>
                                    </div>
                                </Link>
                                <img width={900} height={500} src={props.img} className="shadow-sm" />

                            </div>

                        </div>
                    </div>
                    <div className="md:w-3/5 w-full flex md:mt-52">

                        <div className="w-full">


                            <div className="px-4  rf flex py-4 text-xl"> {props.cat}</div>
                            <div className="px-4 rf font-extrabold text-2xl">{props.name}</div>
                            <div className="md:float-right px-4 py-4">
                            <Link href="/contact">
                                <button className="py-2 md:px-6 px-4 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Price Enquiry </button>
                                </Link>
                            </div>

                            <div className="flex flex-nowrap md:flex-wrap justify-between mt-2 md:mt-10 w-full md:w-1/2">

                                <div className="md:pr-20 my-2 px-4 font-light"> In Stock</div>

                            </div>
             


                            <div className="py-12 space-y-4">
                                <div className="flex flex-wrap justify-center">

                                    <div className="flex font-semibold text-2xl px-4">
                                        Product Information
</div>

                                    <div className="flex w-full text-lg font-semibold px-4 py-4">Description:</div>
                                    <div className="font-light px-4">
                                        {props.desc}
                                    </div>



                                </div>


                            </div>


                        </div>
                    </div>

                </div>


            </div>





                <div className="flex flex-wrap w-full">
                    <div className="font-semibold flex justify-center text-3xl h-10 w-full">
                        Related Products
                    </div>
                </div>
                    {loading ? "Loading Component Will be gone in 2 sec" :
                        <div className="flex flex-wrap md:px-4">
                            {products.slice(rando,rand).map(product =>
                                <Link href="/products/[id]" as={'/products/' + product.id}>
                                    <div className="w-1/2 md:w-1/7 py-4 px-4">
                                        <Product brand={product.brand} numReviews={2} rating={5} id={product.id} image={product.img} name={product.name} description={product.desc} />

                                    </div>

                                </Link>
                            )}

                        </div>
                    }



                

        </div>
    )

}



export async function getStaticPaths() {
    let result = await new Promise((resolve, reject) => {
        loadDB().firestore()
            .collection('hair')
            .get()
            .then(snapshot => {
                let data = []
                snapshot.forEach((doc) => {
                    data.push(
                        Object.assign({
                            id: doc.id
                        }, doc.data())
                    )
                })
                resolve(data)
            })
            .catch(error => {
                reject([])
            })
    })
    return {
        paths:
            result.map(character => {
                return {
                    params: {
                        id: character.id,
                    }

                }
            }),
        fallback: false
    }
}


export const getStaticProps = async ({ params }) => {
    const content = {}
    await loadDB().firestore()
        .collection('hair')
        .doc(params.id)
        .get()
        .then(result => {
            content['id'] = params.id;
            content['img'] = result.data().img;
            content['name'] = result.data().name;
            content['route'] = result.data().route;
            content['brand'] = result.data().brand;
            content['type'] = result.data().type;
            content['desc'] = result.data().desc;
            content['cat'] = result.data().cat;
            content['volume'] = result.data().volume;
        });

    return {
        props: JSON.parse(JSON.stringify(content))

    }
}
HairProducts.Layout = Layout
export default HairProducts
import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_1500x600_CV59._CB403490035_.jpg"
                />

                <div className="home__row">
                    <Product 
                        id="1397979"
                        title="The lean startup"
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={29.99}
                        rating={5} 
                    />
                    <Product 
                        id="2345678"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UL320_.jpg"
                        price={239.0}
                        rating={4} 
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="61738019031"
                        title="Samsung curved LED gaming monitor"
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        price={199.99}
                        rating={3} 
                    />
                    <Product
                        id="139u91u" 
                        title="Apple ipad pro (1.9 inch, Wi-fi, 128 GB - Silver (4th Generation)"
                        image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY218_.jpg"
                        price={598.99}
                        rating={4} 
                    />
                    <Product 
                        id="3456789121"
                        title="Amazon echo (3rd generation)"
                        image="https://m.media-amazon.com/images/I/61WdpWczUkL._AC_UY218_.jpg"
                        price={98.99}
                        rating={5} 
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="18909031739"
                        title="Samsung curved LED gaming monitor- Super Ultra Wide Dual WQHD 5120 x 1440"
                        image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
                        price={1094.98}
                        rating={4} 
                    />
                </div>

            </div>
        </div>
    )
}

export default Home

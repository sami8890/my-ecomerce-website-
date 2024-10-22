import React from 'react'
import ProductSection from './components/products'
import HeroSection from './components/hero'
import CategorySection from './components/Browse-bt-catagory'
import Sellingproducts from './components/Best-selling-products'

export const Home = () => {
    return (
        <div>
            {/* importing hero */}
            <HeroSection />
            <ProductSection />
            <CategorySection />
            <Sellingproducts/>
        </div>
    )
}
export default Home


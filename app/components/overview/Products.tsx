"use client"
import { useEffect, useState } from "react"
import Button from "@/app/atomic/atoms/button/Button"
import HomeLayout from "@/app/atomic/layout/HomeLayout"
import SalesCard from "@/app/atomic/templates/SalesCard"
import Container from "@/app/atomic/atoms/container/Container"
import useProductsStore from "@/app/helper/zustand/productsStore"
import { buttonVariants, containerVariants } from "@/app/variant/variants"



const Products = () => {
    //states
    const [show, setShow] = useState(false)
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [selectedSearchTerm, setSelectedSearchTerm] = useState<string | null>(null);

    //handle products filter function
    const handleFilterChange = (searchTerm: string | null) => {
        setSelectedSearchTerm(searchTerm);
        setActiveFilter(searchTerm || null);
    };

    //productSstore actions
    const { products, fetchProducts } = useProductsStore();

    //filtered products to be displayed 
    const filteredProducts = products.filter((product) => {
        const lowerCaseProductName = product.name.toLowerCase();
        const lowerCaseSearchTerm = selectedSearchTerm?.toLowerCase() || ''; // Handle empty search term

        return !selectedSearchTerm || lowerCaseProductName.includes(lowerCaseSearchTerm);
    });

    //fetch products on page load
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);


    return (
        <HomeLayout >
            <Container variant={containerVariants.DEFAULT} className=" md:mb-[10px] mb-[20px]">
                <div className='border-l-[15px] h-[100px] flex items-center border-l-orange px-[20px] mt-[30px]'>
                    <p className='text-orange font-semibold'>
                        Our Products
                    </p>
                </div>
                <h2 className="md:text-[30px] text-[20px] font-bold text-black90 mt-[10px]">
                    Explore Our Products
                </h2>
            </Container>
            <div className="flex flex-wrap  items-center sm:gap-4 gap-2 md:mb-[50px] mb-[20px]">
                <button onClick={() => handleFilterChange(null)} className={activeFilter === null ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent w-fit whitespace-nowrap sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>All</button>
                <button onClick={() => handleFilterChange('chair')} className={activeFilter === "chair" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Chairs</button>
                <button onClick={() => handleFilterChange('set')} className={activeFilter === "set" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Dining Set</button>
                <button onClick={() => handleFilterChange('sofa')} className={activeFilter === "sofa" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Sofa Set</button>
                <button onClick={() => handleFilterChange('table')} className={activeFilter === "table" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Side Table</button>
                <button onClick={() => handleFilterChange('accessories')} className={activeFilter === "accessories" ? 'bg-orange text-white w-fit sm:px-[25px] px-[15px] py-[6px] whitespace-nowrap rounded-full sm:text-[14px] text-[10px]' : 'border-orange border bg-transparent whitespace-nowrap w-fit sm:px-[25px] px-[15px] py-[6px] rounded-full sm:text-[14px] text-[10px]'}>Accessories</button>
            </div>
            <div className={`product-list ${filteredProducts.length ? 'show' : ''} grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[10px]`} >
                {filteredProducts.slice(0, 8).map((slug, i) => (
                    <div className="product-item show" key={i}>
                        <SalesCard
                            href={`/product/${slug.id}`}
                            isFilled={true}
                            imgSrc={`https://api.timbu.cloud/images/${slug.photos[0]?.url}`}
                            product={slug}
                            prodName={slug.name}
                            available_quantity={slug.available_quantity}
                            current_price={slug.available_quantity}
                        />
                    </div>
                ))}
            </div>
            {show && <div className={`product-list ${filteredProducts.length ? 'show' : ''} grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[10px]`} >
                {filteredProducts.slice(0, 12).map((slug, i) => (
                    <div className="product-item show" key={i}>
                        <SalesCard
                            href={`/product/${slug.id}`}
                            isFilled={true}
                            product={slug}
                            imgSrc={`https://api.timbu.cloud/images/${slug.photos[0]?.url}`}
                            prodName={slug.name}
                            available_quantity={slug.available_quantity}
                            current_price={slug.available_quantity}
                        />
                    </div>
                ))}
            </div>}
            <Button onClick={() => setShow(!show)} variant={buttonVariants.DEFAULT} className="mt-[25px] text-white">
                Load More
            </Button>
        </HomeLayout>

    )
}

export default Products

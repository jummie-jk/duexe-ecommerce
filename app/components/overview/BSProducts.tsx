"use client"
import { useEffect } from "react"
import Icon from "@/app/atomic/atoms/icon/Icon"
import { iconVariants } from "@/app/variant/variants"
import HomeLayout from "@/app/atomic/layout/HomeLayout"
import SalesCard from "@/app/atomic/templates/SalesCard"
import { containerVariants } from "@/app/variant/variants"
import Container from "@/app/atomic/atoms/container/Container"
import useProductsStore from "@/app/helper/zustand/productsStore"

const BSProducts = () => {

    const slideLeft = () => {
        const slider = document.getElementById("slider2") ?? document.createElement('div');
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    const slideRight = () => {
        var slider = document.getElementById("slider2") ?? document.createElement('div');
        slider.scrollLeft = slider.scrollLeft + 300;
    };

    const { products,  fetchProducts} = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div id="bestsellers">
            <HomeLayout >
                <Container variant={containerVariants.DEFAULT} className="border-t-2 border-t-[#b0b0b027] mb-[50px]">
                    <div className='border-l-[15px] h-[100px] flex items-center border-l-orange px-[20px] mt-[30px] mb-[10px]'>
                        <p className='text-orange font-semibold'>
                            This Month
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="m:text-[30px] md:text-[25px] text-[18px] font-bold text-black90 ">
                            Best Selling Products
                        </h2>
                        <Container variant={containerVariants.FLEXED} className="md:gap-[7px] gap-[5px] md:flex hidden">
                            <Icon src='arrow-left' alt="left" variant={iconVariants.FILLED} onClick={slideLeft} />
                            <Icon src='arrow-right' alt="right" variant={iconVariants.FILLED} onClick={slideRight} />
                        </Container>
                    </div>
                </Container>

            </HomeLayout>
            <div id='slider2' className="md:ml-[7rem] sm:ml-[4rem] md:mx-0 sm:mx-[4rem] mx-[1rem] md:flex grid grid-cols-2 md:gap-[20px]  gap-[15px] overflow-x-hidden overflow-y-hidden scroll scroll-smooth scrollbar-hide"  >
                {products.slice(10, 20).map((slug, i) => (
                    <div key={i}>
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
            </div>
        </div>
    )
}

export default BSProducts

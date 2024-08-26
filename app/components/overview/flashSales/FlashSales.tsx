"use client"
import Countdown from './Countdown'
import { useEffect, useState } from 'react';
import Icon from '@/app/atomic/atoms/icon/Icon';
import Button from '@/app/atomic/atoms/button/Button';
import SalesCard from '@/app/atomic/templates/SalesCard';
import { containerVariants } from '@/app/variant/variants';
import Container from '@/app/atomic/atoms/container/Container';
import useProductsStore from '@/app/helper/zustand/productsStore';
import { buttonVariants, iconVariants } from '@/app/variant/variants';


const FlashSales = () => {
  const [show, setShow] = useState(false)
  const targetDate = new Date('2024-07-17T00:00:00');

  const slideLeft = () => {
    const slider = document.getElementById("slider") ?? document.createElement('div');
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider") ?? document.createElement('div');
    slider.scrollLeft = slider.scrollLeft + 300;
  };

    const { products,  fetchProducts } = useProductsStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);


  return (
    <Container variant={containerVariants.DEFAULT} id='flashsales'>
      <Container variant={containerVariants.WRAPPER}>
        <div className='border-l-[15px] border-l-orange px-[20px] md:mb-0 mb-[20px]'>
          <p className='md:text-[30px] text-[20px] font-bold text-black90'>
            Flash Sales
          </p>
          <Countdown targetDate={targetDate} className='gap-[8px] font-bold font-sans text-grey flex items-center md:mt-[15px] mt-[15px]' />
        </div>
        <Container variant={containerVariants.FLEX_END} className='mt-[20px] mb-[20px] md:gap-[7px] gap-[5px] md:flex hidden'>
          <Icon src='arrow-left' alt="left" variant={iconVariants.FILLED} onClick={slideLeft} />
          <Icon src='arrow-right' alt="right" variant={iconVariants.FILLED} onClick={slideRight} />
        </Container>
      </Container>
      <div id='slider' className="md:ml-[7rem] sm:ml-[4rem] md:mx-0 sm:mx-[4rem] mx-[1rem] md:mt-0 mt-[34px] md:flex grid grid-cols-2 md:gap-[20px] gap-[10px] overflow-x-hidden overflow-y-hidden scroll scroll-smooth scrollbar-hide"  >
        {products?.slice(0, 10)?.map((slug, i) => (
          <div key={i}>
            <SalesCard
              href={`/product/${slug.id}`}
              isFilled={true}
              imgSrc={`https://api.timbu.cloud/images/${slug.photos[0]?.url}`}
              product={slug}
              prodName={slug.name}
              available_quantity={slug.available_quantity}
              badgeValue={slug.badgeValue}
              current_price={slug.available_quantity}
            />
          </div>
        ))}
      </div>
     {show && <div id='slider' className="md:ml-[7rem] sm:ml-[4rem] md:mx-0 sm:mx-[4rem] mx-[1rem] md:mt-0 mt-[34px] md:flex grid grid-cols-2 md:gap-[20px] gap-[10px] overflow-x-hidden overflow-y-hidden scroll scroll-smooth scrollbar-hide"  >
        {products.slice(0, 6).map((slug, i) => (
          <div key={i}>
            <SalesCard
              href={`/flashsales-product/${slug.id}`}
              isFilled={true}
              imgSrc={slug.image}
              product={slug}
              prodName={slug.name}
              available_quantity={slug.available_quantity}
              badgeValue={slug.badgeValue}
              current_price={slug.available_quantity}
            />
          </div>
        ))}
      </div>}
      <Container variant={containerVariants.WRAPPER} className='mt-[30px] md:block hidden'>
        <Button onClick={()=>setShow(!show)} variant={buttonVariants.DEFAULT} className='text-white md:text-base text-[13px]'>
          View All Products
        </Button>
      </Container>
    </Container>
  )
}

export default FlashSales

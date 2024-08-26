"use client"
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import Icon from "@/app/atomic/atoms/icon/Icon";
import Button from "@/app/atomic/atoms/button/Button";
import Loader from "@/app/atomic/atoms/loader/Loader";
import { buttonVariants } from "@/app/variant/variants";
import Footer from "@/app/atomic/organisms/footer/Footer";
import Header from "@/app/atomic/organisms/header/Header";
import Container from "@/app/atomic/atoms/container/Container";
import { containerVariants, iconVariants } from "@/app/variant/variants";


interface ProductProps {
    slice(arg0: number, arg1: number): unknown;
    photos: any;
    id: number;
    image: string;
    name: string;
    rating: string;
    badgeValue: string;
    available_quantity: string;
    category?: string;
    current_price: string;
    description: string;
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<ProductProps | null>(null);

    useEffect(() => {
        fetch(`/api/products/${params.id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data) {
                    setData(data);

                } else {
                    setData(null);
                }
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
                setData(null);
            });
    }, [params.id]);

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(data?.current_price || 0);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        // setTotalPrice(totalPrice * (quantity + 1));
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
        // setTotalPrice(basePrice * Math.max(prevQuantity - 1, 1));
    };

    if (!data) {
        return <Loader />;
    }

    return (
        <main>
            <Header />
            <Container variant={containerVariants.WRAPPER}>
                <div className="mt-[4rem]">
                    <p className="text-[#adadad] sm:text-[14px] text-[12px] sm:mt-[40px] mt-[25px] sm:mb-[40px] mb-[0px]">Home / Category/ Chair / <span className='text-black'>{data.name}</span></p>
                </div>
                <section className="lg:flex block items-start justify-between mt-[5rem]">
                    <div>
                        <img src={`https://api.timbu.cloud/images/${data.photos[0]?.url}`} alt={data.name} className="w-[500px]" />
                    </div>
                    <section className="lg:w-[37%] w-[100%]">
                        <div className="border-b-2">
                            <p className="text-[25px] font-bold mb-[10px]">{data.name}</p>
                            <div className="flex items-center gap-[10px]">
                                <Container variant={containerVariants.FLEXED}>
                                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                                    <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                                </Container>
                                <p>(150 Reviews)</p>
                                <p>|</p>
                                <p className="text-[#00FF66]">in stock</p>
                            </div>
                            <p className="mb-[20px] mt-[15px] font-medium text-[20px]">${data.current_price}.00</p>
                            <p className="mb-[20px] sm:text-base text-[13px]">{data.description}</p>
                        </div>
                        <div>
                            <Container variant={containerVariants.FLEXED} className="md:gap-[20px] gap-[15px] mt-[20px]">
                                <div className="flex items-center">
                                    <div onClick={handleDecrease} className="border border-grey sm:py-[11px] py-[9px] sm:px-[10px] px-[5px] sm:w-[60px] w-[40px] flex items-center justify-center cursor-pointer rounded-tl-[6px]  rounded-bl-[6px]"><FiMinus /></div>
                                    <p className="border border-grey sm:py-[7px] py-[5px] sm:px-[10px] px-[7px] sm:w-[80px] w-[50px] text-center">{quantity}</p>
                                    <div onClick={handleIncrease} className=" sm:py-[12px] py-[10px] sm:px-[10px] px-[5px] sm:w-[60px] w-[40px] flex items-center justify-center cursor-pointer rounded-tr-[6px] rounded-br-[6px] bg-orange text-white"><FiPlus /></div>
                                </div>
                                <Link href="/checkout" className="w-[100%]">
                                    <Button variant={buttonVariants.DEFAULT_FULL} className="text-white">
                                        Buy Now
                                    </Button>
                                </Link>
                            </Container>
                            <div className="border border-grey rounded-[5px] mt-[30px]">
                                <Container variant={containerVariants.FLEXED} className="border-b gap-[10px] py-[20px] sm:px-[20px] px-[10px]">
                                    <Icon variant={iconVariants.TRANSPARENT} src="icon-delivery2" alt="delivery-icon" className="sm:w-[40px] w-[30px]" />
                                    <div>
                                        <p className="font-medium sm:text-base text-[13px]">Free Delivery</p>
                                        <a href="" className="sm:text-[14px] text-[10px] underline font-medium ">Enter your delivery postal code for availability</a>
                                    </div>
                                </Container>
                                <Container variant={containerVariants.FLEXED} className=" gap-[10px] py-[20px] sm:px-[20px] px-[10px]">
                                    <Icon variant={iconVariants.TRANSPARENT} src="icon-return" alt="return-icon" className="sm:w-[40px] w-[30px]" />
                                    <div>
                                        <p className="font-medium sm:text-base text-[13px]">Return Delivery</p>
                                        <p className="sm:text-[14px] text-[10px] font-medium">Free 30 days delivery returns <a href="" className="underline">Details</a></p>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <div className='border-l-[15px] h-[100px] flex items-center border-l-orange px-[20px] mt-[30px]'>
                        <p className='text-orange font-semibold'>
                            Related Products
                        </p>
                    </div>
                    {/* <div className="lg:flex justify-between md:grid-cols-3 grid grid-cols-2 md:gap-[20px] gap-[10px] mt-[10px] mb-[5rem]">
                        {data[0?.slice(1, 4)?.map((slug, i) => (
                            <div key={i}>
                                <SalesCard
                                    href="/"
                                    isFilled={true}
                                    product={slug}
                                    imgSrc={slug.image}
                                    prodName={slug.name}
                                    available_quantity={slug.prevPrice}
                                    current_price={slug.slashPrice}
                                />
                            </div>
                        ))}
                    </div> */}
                </section>
            </Container>
            <Footer />
        </main>
    )
}



export default ProductDetail

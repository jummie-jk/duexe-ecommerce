"use client"
import Icon from "../atoms/icon/Icon"
import Container from "../atoms/container/Container"
import { containerVariants, iconVariants } from "@/app/variant/variants"
import Link from "next/link"
import useCartStore from "@/app/helper/zustand/cartStore"
import { FaCheck } from "react-icons/fa6";
import { Alert, Button, Space } from 'antd';

interface Product {
    id: number;
    image: string;
    name: string;
    rating: string;
    badgeValue: string;
    available_quantity: string;
    category?: string;
    current_price: string;
    description: string;
    photos?: string[]
}

interface cardProps {
    href: string,
    imgSrc: string,
    prodName: string,
    isFilled: boolean,
    available_quantity: number | string,
    badgeValue?: string | number,
    current_price?: number | string,
    product: Product
}


const SalesCard = ({ imgSrc, href, prodName, available_quantity, current_price, badgeValue, isFilled, product }: cardProps) => {

    const { addItemToCart, isAdded, setIsAdded } = useCartStore()

    const hadleAddToCart = () => {
        addItemToCart({
            ...product,
            prevPrice: product.available_quantity,
            slashPrice: "",
            photos: product.photos,
            available_quantity: product.available_quantity
        })
        setTimeout(() => setIsAdded(false), 2000);
    }

    return (
        <main className={`h-fit sm:shadow-shadow shadow-shadow_md rounded-md box-border transition-all duration-75 md:mb-0 mb-[20px]`}>
            <Link href={href} className="md:h-[200px] relative flex items-center flex-col justify-center h-[100px] md:p-[20px] p-[10px]  overflow-hidden">
                <div className="flex absolute top-1 left-1 items-center justify-between">
                    {badgeValue && <p className="bg-red text-white text-[10px] py-[3px] px-[7px] rounded-md">{badgeValue}</p>}
                </div>
                <div className=" object-contain w-[100%] md:w-[200px] flex items-center justify-center">
                    <img src={imgSrc} alt={prodName} className="md:h-[200px] h-[100px] max-w-[100%] object-fit " />
                </div>
            </Link>
            <section className={isFilled ? "bg-grey10 md:p-[20px] p-[10px] " : "bg-transparent md:p-[20px] p-[10px] "}>
                <div className="md:mb-[9px] mb-[5px] flex items-center justify-between">
                    <p className="sm:text-base text-[10px] font-semibold whitespace-nowrap">{prodName}</p>
                    <div onClick={hadleAddToCart} className="bg-orange cursor-pointer sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] rounded-full flex items-center justify-center text-white">
                        <Icon src="shop-bag" alt="" variant={iconVariants.TRANSPARENT} className="text-white w-[20px]" />
                    </div>
                </div>
                {isAdded && <div className="fixed-alert">
                    <Alert
                        message="Item added to cart!"
                        type="success"
                        showIcon
                        action={
                            <Button size="small" type="text">
                                UNDO
                            </Button>
                        }
                        closable
                    />
                </div>}
                <Container variant={containerVariants.FLEXED} className="gap-[6px] md:mb-[9px] mb-[5px]">
                    <p className="text-red font-medium md:text-base text-[13px]">${current_price}</p>
                    <p className=" line-through text-grey font-medium md:text-base text-[13px]">${available_quantity}</p>
                </Container>
                <Container variant={containerVariants.FLEXED} className="gap-[10px]">
                    <Container variant={containerVariants.FLEXED}>
                        <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                        <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                        <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                        <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                        <Icon variant={iconVariants.TRANSPARENT} src="star1" alt="star" />
                    </Container>
                    <p className="sm:text-base text-[13px] text-grey">
                        (85)
                    </p>
                </Container>
            </section>

        </main>
    )
}

export default SalesCard

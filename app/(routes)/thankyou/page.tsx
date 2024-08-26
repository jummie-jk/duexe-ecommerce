"use client"
import Button from "@/app/atomic/atoms/button/Button"
import { buttonVariants } from "@/app/variant/variants"
import Link from "next/link"
import useCartStore from "@/app/helper/zustand/cartStore"

const ThankYouPage = () => {
    const {clearCart} = useCartStore()
    return (
        <section className="flex items-center justify-center h-[100dvh]">
            <div className="sm:w-[40%] w-[90%] h-[250px] flex items-center justify-center flex-col py-[30px] px-[10px] rounded-[15px] shadow-shadow_md">
                <p className="mb-[20px]">Thank you for shopping with us!</p>
                <Link href="/">
                    <Button onClick={clearCart} variant={buttonVariants.DEFAULT_FULL} className="text-white">Back To Store</Button>
                </Link>
            </div>
        </section>
    )
}

export default ThankYouPage

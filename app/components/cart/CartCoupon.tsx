"use client"
import Button from "@/app/atomic/atoms/button/Button"
import useCartStore from "@/app/helper/zustand/cartStore"
import { buttonVariants } from "@/app/variant/variants"
import Link from "next/link"

const CartCoupon = () => {
    const {totalPrice} = useCartStore()
    return (
        <main className="lg:flex md:block justify-between items-baseline mt-[3rem] mb-[5rem]">
            <div className="sm:flex block items-center gap-[10px]">
                <input type="text" placeholder="Coupon Code" className="indent-3 outline-none border-2 border-[#383838] sm:w-[400px] w-[100%] rounded-[5px] py-[7px]" />
                <Button variant={buttonVariants.DEFAULT} className="text-white sm:mt-0 mt-[25px] sm:block hidden">
                    Apply Coupon
                </Button>
                <Button variant={buttonVariants.DEFAULT_FULL} className="text-white sm:mt-0 mt-[20px] sm:hidden block">
                    Apply Coupon
                </Button>
            </div>
            <section className="lg:w-[30%] md:w-[50%] lg:mt-0 mt-[30px] border-2 border-black p-[20px]">
                <p>Cart Total</p>
                <div className="flex items-center justify-between border-[#82828267] border-b-2 py-[10px]">
                   <p>${totalPrice.toFixed(2)}</p> 
                    <p>$3240</p>
                </div>
                <div className="flex items-center justify-between border-[#82828267] border-b-2 py-[10px]">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="flex items-center justify-between  py-[10px]">
                    <p>Total:</p>
                      <p>${totalPrice.toFixed(2)}</p> 
                </div>
                <Link href="/checkout" className="flex items-center justify-center py-[10px]">
                    <Button variant={buttonVariants.DEFAULT} className="text-white">
                        Proceed To Checkout
                    </Button>
                </Link>
            </section>
        </main>
    )
}

export default CartCoupon


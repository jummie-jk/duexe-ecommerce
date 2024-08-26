"use client"
import Link from "next/link"
import Icon from "../../atoms/icon/Icon";
import { FaBars } from "react-icons/fa6";
import { iconVariants } from "@/app/variant/variants"
import Container from "../../atoms/container/Container"
import { containerVariants } from "@/app/variant/variants"
import useCartStore from "@/app/helper/zustand/cartStore";


interface nav {
    href: string,
    text: string,
    isActive: boolean
}

const Nav = () => {
    const {cartItems} = useCartStore()

    const navLinks: nav[] = [
        {
            href: "/",
            text: "Shop",
            isActive: true
        },
        {
            href: "#flashsales",
            text: "Flash Sales",
            isActive: false
        },
        {
            href: "#bestsellers",
            text: "Best Sellers",
            isActive: false
        },
    ]

    return (
        <Container variant={containerVariants.WRAPPER} className="sm:border-b-2 border-b-0 border-b-[#b0b0b027] py-[20px]">
            <section className="flex items-center justify-between">
        
                <h1 className="font-bold text-[23px] m:block hidden">Duexe</h1>
            
                <Container variant={containerVariants.FLEXED} className="lg:gap-[55px] md:gap-[30px] m:flex hidden">
                    {navLinks.map((slug, i) => {
                        return (
                            <Link key={i} href={slug.href} className={slug.isActive ? "border-b border-b-1 border-orange" : "border-b-0"}>
                                {slug.text}
                            </Link>
                        )
                    })}
                </Container>
                <div className="m:hidden block">
                    <h1 className="font-bold text-[23px]">Duexe</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Icon src="search" alt="search" variant={iconVariants.TRANSPARENT} />
                    <Link href="/cart" className="relative">
                       { cartItems !== null ? <div className={`flex absolute  items-center justify-center left-3 top-[-6px] w-[20px] h-[20px] text-white text-[10px] bg-red rounded-full`}>
                            <p>{cartItems.length}</p>
                        </div> : ''}
                        <Icon src="shopping-cart" alt="shopping-cart" variant={iconVariants.TRANSPARENT} className="w-[25px]" />
                    </Link>
                </div>
            </section>
        </Container>
    )
}

export default Nav

import Nav from "../nav/Nav"
import Container from "../../atoms/container/Container"
import { containerVariants } from "@/app/variant/variants"
import { LuChevronDown } from "react-icons/lu";

const Header = () => {
    return (
        <>
            <Container variant={containerVariants.FLEX_BW} className="bg-dark-brown md:px-[7rem] sm:px-[4rem] px-[.5rem] sm:py-[10px] py-[20px] text-white">
                <p className="md:block hidden"></p>
                    <p className="sm:text-base text-[9px] w-full text-center">
                        Summer Sale For All Dining Set. Free Express Delivery - OFF 50%!
                    </p>
                <div className="md:flex items-center hidden">
                    <p>English</p>
                    <LuChevronDown />
                </div>
            </Container>
            <Nav />
        </>
    )
}

export default Header

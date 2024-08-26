import clsx from "clsx"
import { buttonVariants } from "@/app/variant/variants"

interface bProps {
    className?: string,
    variant: buttonVariants,
    onClick?: ()=> void,
    children: string | React.ReactNode,
    type?: "button" | "reset" | "submit" | undefined
}

const Button = ({ children, onClick, type, className, variant }: bProps) => {
    let style;
    switch (variant) {
        case buttonVariants.DEFAULT:
            style = clsx(className,
                "bg-orange hover:bg[#D36506] whitespace-nowrap w-fit",
                "rounded-[4px] text-[14px]  py-[9px] sm:px-[2.3rem] px-[2rem]"
            )
            break;
        case buttonVariants.DEFAULT_FULL:
            style = clsx(className,
                "bg-orange hover:bg[#D36506] whitespace-nowrap w-[100%]",
                "rounded-[4px] text-[14px] py-[9px] px-[2.3rem]"
            )
            break;
        case buttonVariants.OUTLINED:
            style = clsx(className,
                "border-orange hover:bg-[#FF8933] hover:text-white border text-orange  whitespace-nowrap w-fit",
                "rounded-[4px] text-[14px]  py-[9px] sm:px-[2.3rem] px-[2rem]"
            )
            break;
        default:
            break;
    }
    return (
        <button className={clsx(className, style)} onClick={onClick} type={type} >
            {children}
        </button>
    )
}

export default Button

import { iconVariants } from "@/app/variant/variants"
import clsx from "clsx"
import Image from "next/image";


interface iProps {
    src: string,
    alt: string,
    className?: string
    variant: iconVariants,
    onClick?: () => void;
}

const Icon = ({ src, alt, className, variant, onClick }: iProps) => {
    const dynamicIconSrc = `/assets/icons/${src}.svg`

    let style;
    switch (variant) {
        case iconVariants.FILLED:
            style = clsx(className, "bg-grey50 w-[35px] h-[35px] p-[10px] rounded-full text-black")
            break;
        case iconVariants.TRANSPARENT:
            style = clsx(className, "text-black bg-transparent")
            break;

        default:
            break;
    }
    return (
        <img
            onClick={onClick}
            alt={alt}
            src={dynamicIconSrc}
            className={clsx(className, style)}
        />
    )
}

export default Icon

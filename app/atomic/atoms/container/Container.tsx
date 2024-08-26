import clsx from "clsx"
import { containerVariants } from "@/app/variant/variants"

interface cProps {
    id?: string,
    className?: string,
    children: React.ReactNode,
    variant: containerVariants,
    ref?:  React.RefObject<HTMLDivElement>,
}

const Container = ({ className, children, variant, id }: cProps) => {
    let style;
    switch (variant) {
        case containerVariants.DEFAULT:
            style = clsx(className," mt-[40px]")
            break;
        case containerVariants.WRAPPER:
            style = clsx(className, "md:px-[7rem] sm:px-[4rem] px-[1rem]")
            break;
        case containerVariants.FLEXED:
            style = clsx(className, "flex items-center")
            break;
        case containerVariants.FLEX_END:
            style = clsx(className, "flex items-center justify-end")
            break;
        case containerVariants.FLEX_LEFT:
            style = clsx(className, "flex items-center justify-left")
            break;
        case containerVariants.FLEX_START:
            style = clsx(className, "flex items-center justify-start")
            break;
        case containerVariants.FLEX_CENTER:
            style = clsx(className, "flex items-center justify-center")
            break;
        case containerVariants.FLEX_BW:
            style = clsx(className, "m:flex block items-center justify-between")
            break;

        default:
            break;
    }
    return (
        <div className={clsx(className, style)} id={id}>
            {children}
        </div>
    )
}

export default Container

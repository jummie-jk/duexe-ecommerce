import Icon from "@/app/atomic/atoms/icon/Icon"
import { iconVariants } from "@/app/variant/variants"

interface pProp {
    icon: string,
    title: string,
    description: string,
}

const ProdShowcase = () => {

    const schema: pProp[] = [
        {
            icon: "icon-delivery",
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140",
        },
        {
            icon: "Icon-Customer service",
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
        },
        {
            icon: "shield-tick",
            title: "MONEY BACK GUARANTEE",
            description: "We will return money within 30 days",
        },
    ]
    return (
        <main  className="py-[90px] gap-[45px] md:flex block md:mb-0 mb-[15px] items-center justify-center">
            {schema.map((slug, i) => {
                return (
                    <section key={i} className="flex items-center justify-center md:mb-0 mb-[25px] flex-col">
                        <div className="w-[50px] flex items-center justify-center h-[50px] bg-dark-brown rounded-full mb-[10px]">
                            <Icon src={slug.icon} variant={iconVariants.TRANSPARENT} alt={slug.title} />
                        </div>
                        <p className="font-semibold mb-[10px]">{slug.title}</p>
                        <small>{slug.description}</small>
                    </section>
                )
            })}
        </main>
    )
}

export default ProdShowcase

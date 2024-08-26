import Container from "../atoms/container/Container"
import { containerVariants } from "@/app/variant/variants"

const HomeLayout = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <Container variant={containerVariants.WRAPPER} className={className}>
            {children}
        </Container>
    )
}

export default HomeLayout

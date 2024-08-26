import Image from 'next/image'
import Container from '@/app/atomic/atoms/container/Container'
import { containerVariants } from '@/app/variant/variants'
import HomeLayout from '@/app/atomic/layout/HomeLayout'

const Hero = () => {
    return (
        <HomeLayout>
            <Container variant={containerVariants.FLEX_BW} className='w-full '>
                <section className='flex items-center flex-col m:mt-[0] mt-[40px]'>
                    <h1 className='font-bold text-center md:text-[35px] m:text-[30px] text-[30px]'>
                        Elevate Your Space<br />
                        Today
                    </h1>
                    <Image src="/assets/imgs/Vector 5.png" width={250} height={250} alt='vector' />
                </section>
                <section className='m:mt-[0] mt-[40px]'>
                    <Image
                        src="/assets/imgs/heroImg.png"
                        width={800}
                        height={800}
                        alt='hero'
                    />
                </section>
            </Container>
        </HomeLayout>
    )
}

export default Hero

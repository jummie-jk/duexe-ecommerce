import Container from "@/app/atomic/atoms/container/Container"
import { buttonVariants, containerVariants } from "@/app/variant/variants"
import HomeLayout from "@/app/atomic/layout/HomeLayout"
import Button from "@/app/atomic/atoms/button/Button"
import Image from "next/image"
const NewIn = () => {
    return (
        <HomeLayout>
            <Container variant={containerVariants.DEFAULT}>
                <div className='border-l-[15px] h-[100px] flex items-center border-l-orange px-[20px] mt-[30px]'>
                    <p className='text-orange font-semibold'>
                        Featured
                    </p> 
                </div>
                <h2 className="text-[30px] font-bold text-black90 mt-[10px]">
                    New Arrival
                </h2>
            </Container>
            <div className="bg-dark-brown p-[50px] flex gap-[30px]">
                <section className=" bg-white rounded-[25px] px-[30px] flex items-center justify-center flex-col">
                    <div>
                        <Image src="/assets/imgs/NewInImgs/image1.png" alt="" width={300} height={300} />
                    </div>
                    <div>
                        <h2 className="font-semibold text-[25px] mb-[10px]">Dining Set Collection</h2>
                        <p className="mb-[10px] w-[60%]">Cozy four seater set to give you a different vibe</p>
                        <Button variant={buttonVariants.DEFAULT} className="font-semibold">
                            Shop Now
                        </Button>
                    </div>
                </section>
                <div>
                    <section className="bg-white rounded-[25px] px-[30px] mb-[30px] flex items-center justify-center">
                        <div>
                            <h2 className="font-semibold text-[25px] mb-[10px]">Sofa Collections</h2>
                            <p className="mb-[10px]">Featured woman collection that give you another vibe</p>
                            <Button variant={buttonVariants.DEFAULT} className="font-semibold">
                                Shop Now
                            </Button>
                        </div>
                        <div>
                            <Image src="/assets/imgs/NewInImgs/image2.png" alt="" width={300} height={300} />
                        </div>
                    </section>
                    <section className="bg-white rounded-[25px] px-[30px] flex items-center justify-center">
                        <div>
                            <h2 className="font-semibold text-[25px] mb-[10px]">Sofa Collections</h2>
                            <p className="mb-[10px]">Featured woman collection that give you another vibe</p>
                            <Button variant={buttonVariants.DEFAULT} className="font-semibold">
                                Shop Now
                            </Button>
                        </div>
                        <div>
                            <Image src="/assets/imgs/NewInImgs/image3.png" alt="" width={300} height={300} />
                        </div>
                    </section>
                </div>
            </div>
        </HomeLayout>
    )
}

export default NewIn

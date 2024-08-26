"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/app/atomic/atoms/button/Button'
import useCartStore from '@/app/helper/zustand/cartStore'
import Container from '@/app/atomic/atoms/container/Container'
import { buttonVariants, containerVariants } from '@/app/variant/variants'


const CheckoutForm = () => {
    const route = useRouter()
    const { cartItems, totalPrice } = useCartStore()
    const {clearCart} = useCartStore()
    const [error, setError] = useState(false)
    const [inputValues, setInputValues] = useState({
        fName: '',
        lName: '',
        address: '',
        apartment: '',
        town: '',
        phone: '',
        email: '',
    })

    const handleChange = (event: { target: { name: string; value: string } }) => {
        setInputValues({ ...inputValues, [event.target.name]: event.target.value });
    };

    const isFormValid = () => {
        return Object.values(inputValues).every((value) => Boolean(value.trim())); 
      };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (isFormValid()) {
            route.push("/thankyou")
        }else{
            setError(true)
        }
    }
    return (
        <main>
            <form onSubmit={handleSubmit} className='lg:flex block m:gap-[7rem] md:gap-[5rem] mb-[40px]'>
                <section>
                    <div>
                        <label htmlFor="fName" className='text-[#adadad] text-[14px]'>First Name</label><span className='text-[#df1c4070]'>*</span><br />
                        <input required name='fName' value={inputValues.fName} onChange={handleChange} type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
                    </div>
                    <div>
                        <label htmlFor="lName" className='text-[#adadad] text-[14px]'>Last Name</label><br />
                        <input required name='lName' value={inputValues.lName} onChange={handleChange} type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
                    </div>
                    <div>
                        <label htmlFor="address" className='text-[#adadad] text-[14px]'>Street Address</label><span className='text-[#df1c4070]'>*</span><br />
                        <input required name='address' value={inputValues.address} onChange={handleChange} type="address" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
                    </div>
                    <div>
                        <label htmlFor="apartment" className='text-[#adadad] text-[14px]'>Apartment, Floor,etc(optional)</label><br />
                        <input required name='apartment' value={inputValues.apartment} onChange={handleChange} type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
                    </div>
                    <div>
                        <label htmlFor="town" className='text-[#adadad] text-[14px]'>Town / City</label><span className='text-[#df1c4070]'>*</span><br />
                        <input required name='town' type="text" value={inputValues.town} onChange={handleChange} className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
                    </div>
                    <div>
                        <label htmlFor="phone" className='text-[#adadad] text-[14px]'>Phone Number</label><span className='text-[#df1c4070]'>*</span><br />
                        <input required name='phone' type="text" value={inputValues.phone} onChange={handleChange} className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
                    </div>
                    <div>
                        <label htmlFor="email" className='text-[#adadad] text-[14px]'>Email Address</label><span className='text-[#df1c4070]'>*</span><br />
                        <input required name='email' value={inputValues.email} onChange={handleChange} type="email" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
                    </div>
                    <div className='flex items-center '>
                        <input required type="checkbox" className=' accent-orange text-white' /><span className='sm:text-base text-[12px]'>Save this information for fast checkout next time</span>
                    </div>
                </section>

                <main className="w-[100%]">
                    <div className="lg:w-[70%] w-[100%] lg:mt-0 mt-[5rem]">
                        {cartItems.map((slug, i) => (
                            <section key={i} className="flex items-center justify-between">
                                <Container variant={containerVariants.FLEXED} className="md:gap-[20px] gap-[8px] ">
                                    <div className="sm:w-[90px] w-[40px] h-[40px] sm:h-[90px]">
                                        <img src={`https://api.timbu.cloud/images/${slug.photos[0]?.url}`} alt={slug.name} className="w-[100%] h-[100%] object-cover" />
                                    </div>
                                    <p>{slug.name}</p>
                                </Container>
                                <div>
                                    <p>${slug.available_quantity}</p>
                                </div>
                            </section>
                        ))}

                        <section className="border-b-2 flex items-center justify-between py-[15px] mt-[30px] border-[#82828267]">
                            <p>Subtotal:</p>
                           <p>${totalPrice.toFixed(2)}</p> 
                        </section>
                        <section className="border-b-2 py-[15px] border-[#82828267] flex items-center justify-between">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </section>
                        <section className="py-[15px] flex items-center justify-between">
                            <div className="flex items-center gap-[10px]">
                                <input type="radio" name="color" className="radio accent-orange" />
                                <p>Bank</p>
                            </div>
                            <div className="w-[80px] ">
                                <img src="/assets/imgs/visaImg.png" alt="" />
                            </div>
                        </section>
                        <section className="py-[15px] flex items-center justify-between">
                            <div className="flex items-center gap-[10px]">
                                <input type="radio" name="color" className="radio accent-orange" />
                                <p>Cash on Delivery</p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[100%]">
                        <section>
                            <div className="sm:flex block items-center gap-[10px]">
                                <input type="number" placeholder="Coupon Code" className="indent-3 outline-none border-2 border-[#383838] sm:w-[300px] w-[100%] rounded-[5px] py-[7px]" />
                                <Button variant={buttonVariants.DEFAULT} className="text-white sm:mt-0 mt-[25px] sm:block hidden">
                                    Apply Coupon
                                </Button>

                                <Button variant={buttonVariants.DEFAULT_FULL} className="text-white sm:mt-0 mt-[20px] sm:hidden block">
                                    Apply Coupon
                                </Button>

                                <Button type='submit' variant={buttonVariants.DEFAULT_FULL} className="text-white mt-[15px] mb-[30px] sm:hidden block">
                                    Place Order
                                </Button>

                            </div>
                            <Button type='submit'  variant={buttonVariants.DEFAULT} className="text-white mt-[20px] mb-[30px] sm:block hidden">
                                Place Order
                            </Button>
                        </section>
                    </div>
                </main>
            </form>
        </main>
    )
}

export default CheckoutForm

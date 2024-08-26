import React from 'react'
import Icon from '../../atoms/icon/Icon'
import { iconVariants } from '@/app/variant/variants'

const Footer = () => {
    return (
        <footer className="bg-dark-brown">
            <div className="w-full  md:px-[7rem] sm:px-[4rem] px-[1rem] py-6 lg:py-8">
                <div className="sm:flex block items-baseline justify-between">
                    <div className=" text-white m:mb-0 mb-[55px]">
                        <p className="mb-4 text-[20px] font-semibold">
                            Duexe
                        </p>
                        <p className="mb-4">Be the first to know about our app</p>
                        <div className='relative'>
                            <Icon variant={iconVariants.TRANSPARENT} className='cursor-pointer absolute top-[6px] right-[5px]' src='icon-send' alt='send'/>
                            <input type="email" placeholder='Enter your email' className='bg-transparent w-full placeholder:text-[#ad9b8e5b] border-2 border-white rounded-md indent-2 outline-none py-[5px] px-[7px]' />
                        </div>
                    </div>
                    <div className='sm:block hidden'>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white ">Support</h2>
                        <ul className="text-[#ffffffc9] ">
                            <li className="mb-4">
                                <a href="" className="hover:underline">hello@duexe.com</a>
                            </li>
                            <li>
                                <a href="" className="hover:underline">+234-708-000-3444</a>
                            </li>
                        </ul>
                    </div>
                    <div className='sm:block hidden'>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Account</h2>
                        <ul className="text-[#ffffffc9]  ">
                            <li className="mb-4">
                                <a href="" className="hover:underline">Cart</a>
                            </li>
                            <li>
                                <a href="" className="hover:underline">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:hidden flex justify-between">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                            <ul className="text-[#ffffffc9] ">
                                <li className="mb-4">
                                    <a href="" className="hover:underline">hello@duexe.com</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">+234-708-000-3444</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Account</h2>
                            <ul className="text-[#ffffffc9]  ">
                                <li className="mb-4">
                                    <a href="" className="hover:underline">Cart</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Shop</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-[#ff88338b] sm:mx-auto lg:my-8" />
                <div className="flex items-center justify-center">
                    <span className="text-sm text-[#ad9b8e5b] text-center">© Duexe 2024. All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer

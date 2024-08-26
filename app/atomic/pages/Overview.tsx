"use client"
import React, { lazy, Suspense } from 'react';
import Header from "../organisms/header/Header"
import Footer from "../organisms/footer/Footer"
import Hero from "@/app/components/overview/Hero"
import ProdShowcase from "@/app/components/overview/ProdShowcase"
const Products = lazy(() => import('@/app/components/overview/Products'));
const BSProducts = lazy(() => import('@/app/components/overview/BSProducts'));
const FlashSales = lazy(() => import('@/app/components/overview/flashSales/FlashSales'));



const Overview = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Suspense fallback={<div>Loading Products...</div>}>
                <FlashSales />
            </Suspense>
            <Suspense fallback={<div>Loading Products...</div>}>
                <BSProducts />
            </Suspense>
            <Suspense fallback={<div>Loading Products...</div>}>
                <Products />
            </Suspense>
            <ProdShowcase />
            <Footer />
        </div>
    )
}

export default Overview

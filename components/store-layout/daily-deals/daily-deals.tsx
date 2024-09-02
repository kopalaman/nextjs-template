"use client"

import React from "react"
import { DailyDealsProducts } from "public/data/daily-deals-products"

import { useTimeout } from "@/hooks/use-timeout"
import Section from "@/components/ui/section"
import Carousel from "@/components/carousel"
import CarouselLoader from "@/components/loaders/carousel-loader"

export default function DailyDealsSection() {
  const { state } = useTimeout()
  return (
    <Section
      title="Today's deals"
      description="All with free shipping"
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <CarouselLoader />}
      {state && <Carousel productsData={DailyDealsProducts} />}
    </Section>
  )
}

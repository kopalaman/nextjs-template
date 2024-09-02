"use client"

import React from "react"
import { SponsoredProducts } from "public/data/sponsored-products"

import { useTimeout } from "@/hooks/use-timeout"
import Section from "@/components/ui/section"
import Carousel from "@/components/carousel"
import CarouselLoader from "@/components/loaders/carousel-loader"

export default function SponsoredProductsSection() {
  const { state } = useTimeout()
  return (
    <Section
      title="Sponsored items"
      description=""
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <CarouselLoader />}
      {state && <Carousel productsData={SponsoredProducts} />}
    </Section>
  )
}

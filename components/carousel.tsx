"use client"

import type { Product } from "@/types"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import rangeMap from "@/lib/range-map"
import { useTimeout } from "@/hooks/use-timeout"
import ProductCard from "@/components/ui/cards/product-card"
import ProductCardLoader from "@/components/product/product-loader"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export type { SwiperOptions } from "swiper/types"

interface SponsoredCarouselProps {
  productsData: Product[]
  limit?: number
}

export default function Carousel({
  productsData,
  limit = 15,
}: SponsoredCarouselProps) {
  const { state } = useTimeout()

  return (
    <div className="group/section relative">
      <Swiper
        loop={false}
        modules={[Navigation]}
        autoplay={false}
        slidesPerView={4}
        spaceBetween={12}
        navigation={{
          nextEl: ".sponsored-button-next",
          prevEl: ".sponsored-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.6,
          },
          580: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {productsData?.map((product) => (
          <SwiperSlide key={product.id || `product-${product.slug}`}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        size={"icon"}
        className="sponsored-button-prev invisible absolute left-[25px] top-[40%] z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <ChevronLeft className="h-auto w-5" />
      </Button>
      <Button
        size={"icon"}
        className="sponsored-button-next invisible absolute right-[25px] top-[40%] z-10 flex -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:right-4 sm:group-hover/section:right-6 lg:group-hover/section:-right-[19px]"
      >
        <ChevronRight className="h-auto w-5" />
      </Button>
    </div>
  )
}

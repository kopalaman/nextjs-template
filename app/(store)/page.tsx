import React from "react"

import ProductCardLoader from "@/components/product/product-loader"
import AdBannerBigOne from "@/components/store-layout/ad-banners/ad-banner-big-one"
import AdBannerSmallOne from "@/components/store-layout/ad-banners/ad-banner-small-one"
import DailyDealsSection from "@/components/store-layout/daily-deals/daily-deals"
import ProductsSliderOne from "@/components/store-layout/products-slider/products-slider-one"
import ProductsSliderTwo from "@/components/store-layout/products-slider/products-slider-two"
import PromotionBento from "@/components/store-layout/promotion/promotion-bento"
import RecommendedSellers from "@/components/store-layout/recommended/recommended-sellers"
import SponsoredProductsSection from "@/components/store-layout/sponsored/sponsored-products"
import Testimonials from "@/components/store-layout/testimonials/testimonials"

export default function StorePage() {
  return (
    <div>
      <PromotionBento />
      <SponsoredProductsSection />
      <ProductsSliderOne />
      <RecommendedSellers />
      <ProductsSliderTwo />
      <AdBannerSmallOne />
      <DailyDealsSection />
      <AdBannerBigOne />
      <Testimonials />
    </div>
  )
}

import ProductCardLoader from "../product/product-loader"

export default function CarouselLoader() {
  const limit = 15
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-6">
      <ProductCardLoader />
      <ProductCardLoader className="hidden sm:block" />
      <ProductCardLoader className="hidden md:block" />
      <ProductCardLoader className="hidden xl:block" />
    </div>
  )
}

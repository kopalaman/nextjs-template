"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types"
import { Eye, SquareArrowOutUpRight } from "lucide-react"
import placeholder from "public/images/placeholders/product.svg"

import { Button } from "../button"
import Text from "../text"

export default function ProductCard({ product }: { product: Product }) {
  const { name, slug, image, shop } = product ?? {}
  const price = product?.price ?? 0
  const basePrice = product?.sale_price ?? 0

  return (
    <>
      <div className="group relative flex aspect-[3/2] w-full justify-center overflow-hidden rounded-lg">
        <Image
          alt={name}
          fill
          quality={100}
          src={image?.thumbnail ?? placeholder}
          className="bg-background object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          onClick={() => console.log("clicked")}
          className="absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer items-center justify-center gap-9 bg-muted/50 p-4 opacity-0 backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-85"
        >
          <div className="flex flex-col items-center text-center">
            <Button size={"icon"} className="text-xs ">
              <div className="flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
            </Button>
            <span className="text-xs text-primary font-medium">preview</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Button size={"icon"} className="text-xs ">
              <div className="flex items-center justify-center">
                <SquareArrowOutUpRight className="w-5 h-5" />
              </div>
            </Button>
            <span className="text-xs text-primary font-medium">details</span>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between pt-3.5">
        <div className="relative flex h-8 w-8 flex-shrink-0 overflow-hidden">
          <Image
            alt={shop?.name}
            fill
            quality={100}
            src={shop?.logo?.thumbnail ?? placeholder}
            className="rounded-full bg-muted-foreground object-cover"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className="-mt-[1px] flex flex-col truncate mr-auto pl-2.5">
          <Text tag="p" className="mb-0.5 text-base truncate font-medium">
            {/* href={routes.productUrl(slug)} */}
            <Link href={"/"}>{name}</Link>
          </Text>
          {/* href={routes.shopUrl(shop?.slug)} */}
          <Link href={"/"} className="capitalize text-muted-foreground">
            {shop?.name}
          </Link>
        </div>
        <div className="flex flex-shrink-0 flex-col items-end">
          <span className="rounded-lg -mt-1 px-2 py-1 text-[15px] font-semibold uppercase bg-accent shadow">
            K {price}
          </span>
          {basePrice && (
            <del className="px-1 mt-0.5 text-[13px] text-muted-foreground">
              {basePrice}
            </del>
          )}
        </div>
      </div>
    </>
  )
}

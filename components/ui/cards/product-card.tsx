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
          className="bg-muted/50 absolute left-0 top-0 z-10 flex size-full cursor-pointer items-center justify-center gap-9 p-4 opacity-0 backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-85"
        >
          <div className="flex flex-col items-center text-center">
            <Button size={"icon"} className="text-xs ">
              <div className="flex items-center justify-center">
                <Eye className="size-5" />
              </div>
            </Button>
            <span className="text-primary text-xs font-medium">preview</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Button size={"icon"} className="text-xs ">
              <div className="flex items-center justify-center">
                <SquareArrowOutUpRight className="size-5" />
              </div>
            </Button>
            <span className="text-primary text-xs font-medium">details</span>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between pt-3.5">
        <div className="relative flex size-8 shrink-0 overflow-hidden">
          <Image
            alt={shop?.name}
            fill
            quality={100}
            src={shop?.logo?.thumbnail ?? placeholder}
            className="bg-muted-foreground rounded-full object-cover"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className="-mt-px mr-auto flex flex-col truncate pl-2.5">
          <Text tag="p" className="mb-0.5 truncate text-base font-medium">
            {/* href={routes.productUrl(slug)} */}
            <Link href={"/"}>{name}</Link>
          </Text>
          {/* href={routes.shopUrl(shop?.slug)} */}
          <Link href={"/"} className="text-muted-foreground capitalize">
            {shop?.name}
          </Link>
        </div>
        <div className="flex shrink-0 flex-col items-end">
          <span className="bg-accent -mt-1 rounded-lg px-2 py-1 text-[15px] font-semibold uppercase shadow">
            K {price}
          </span>
          {basePrice && (
            <del className="text-muted-foreground mt-0.5 px-1 text-[13px]">
              {basePrice}
            </del>
          )}
        </div>
      </div>
    </>
  )
}

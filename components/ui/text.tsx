import { cn } from "@/lib/utils"

const classes = {
  h1: "text-5xl md:text-6xl font-bold",
  h2: "text-4xl md:text-5xl font-bold",
  h3: "text-3xl md:text-4xl font-bold",
  h4: "text-2xl md:text-3xl  font-bold",
  h5: "text-xl md:text-2xl font-bold",
  h6: "text-lg md:text-xl font-bold",
  p: "text-sm md:text-base",
  i: "",
  b: "",
  q: "text-quote",
  em: "",
  strong: "",
  small: "",
  span: "",
  del: "",
  mark: "",
  abbr: "cursor-help",
  pre: "border-2 border py-3 px-4 rounded-xl bg-background",
  code: "border border py-2 px-3 rounded-md shadow",
  kbd: "bg-gray-100 border border-gray-300 text-gray-900 rounded-lg leading-none inline-flex items-center justify-center text-sm py-1.5 px-2",
  blockquote: "border-l-4 border-gray-300 text-quote py-3 px-4",
  sub: "",
  sup: "",
}

export interface TextProps {
  /**  */
  tag?: keyof typeof classes
  /** title attribute only appear when tag is `abbr` */
  title?: string
  /** Add custom classes for extra style */
  className?: string
}

export default function Text({
  tag = "p",
  title,
  children,
  className,
}: React.PropsWithChildren<TextProps>) {
  let Component = tag
  if (tag === "abbr" && title === undefined) {
    console.warn("title attribute is missing for abbr tag.")
  }
  return (
    <Component
      {...(title && { title })}
      className={cn(classes[tag], className)}
    >
      {children}
    </Component>
  )
}

Text.displayName = "Text"

export type SponsoredItemsTypes = {
  thumbnail: string
  slug: string
  name: string
  location: string
  [key: string]: any
}

export interface User {
  id: string
  name: string
  profile: {
    id: string
    bio: string
    contact: string
    avatar: Attachment
  }
  permissions?: {
    name: string
  }[]
  wallet?: {
    available_points: number
    created_at: string
    customer_id: number
    id: number
    points_used: number
    total_points: number
    available_points_to_currency: number
    updated_at: string
  }
  role: string
  created_at: string
  updated_at: string
}

export interface Attachment {
  id: string
  original: string
  thumbnail: string
  __typename?: string
}

export interface Shop {
  id: string
  name: string
  slug: string
  description: string
  orders_count: number
  products_count: number
  logo: Attachment
  cover_image: Attachment
  settings: {
    contact: string
    website: string
    socials: {
      icon: string
      url: string
    }[]
  }
  address: {
    street_address: string
    city: string
    state: string
    zip: string
    country: string
  }
  owner: {
    id: string
    name: string
    email: string
  }
}

export interface Feedback {
  id: string
  user_id: string
  model_type: string
  model_id: string
  positive: boolean
  negative: boolean
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  photos: Attachment[]
  user: User
  product: Product
  shop: Shop
  feedbacks: Feedback[]
  positive_feedbacks_count: number
  negative_feedbacks_count: number
  my_feedback: Feedback
  created_at: string
  updated_at: string
}

export interface RatingCount {
  rating: number
  total: number
}

export interface Tag {
  id: string
  name: string
  slug: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  sale_price: number
  orders_count?: number
  image?: Attachment
  gallery: Attachment[]
  shop: Shop | any
  created_at: string
  updated_at: string
  preview_url: string
  my_review?: Review[] | any
  shop_id?: number
  rating_count?: RatingCount[] | any
  total_reviews?: number
  ratings?: number
  tags?: Tag[] | any
  type?: {
    id: string
    name: string
  }
  in_stock?: number
}

export interface reviews {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}
export interface meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export default interface product {
  availabilityStatus: string;
  brand: string;
  category: string;
  dimensions: { width: number; height: number; depth?: number };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: meta;
  minimumOrderQuantity: number;
  returnPolicy: string;
  description: string;
  reviews: reviews[];
  shippingInformation: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  price: undefined | number;
  rating: number;
  weight: number;
}

export interface ProductsError {
  message: string;
}

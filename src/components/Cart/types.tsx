import product, { meta, reviews } from "../Products/types/Types";

export interface cartItem extends product {
  quantity: number;
  totalPrice: number;
  priceAfterSale: number;
}

export class cartPayload implements cartItem {
  quantity: number;
  totalPrice: number;
  priceAfterSale: number;
  availabilityStatus: string;
  brand: string;
  category: string;
  dimensions: { width: number; height: number; depth?: number | undefined };
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
  price: number | undefined;
  rating: number;
  weight: number;
  constructor(product: product, quantity: number) {
    (this.quantity = quantity),
      (this.priceAfterSale = Number(
        (product.price! * (1 - product.discountPercentage / 100)).toFixed(2)
      )),
      (this.totalPrice = this.priceAfterSale * quantity),
      (this.availabilityStatus = product.availabilityStatus),
      (this.brand = product.brand),
      (this.category = product.category),
      (this.dimensions = product.dimensions),
      (this.discountPercentage = product.discountPercentage),
      (this.id = product.id),
      (this.images = product.images),
      (this.meta = product.meta),
      (this.minimumOrderQuantity = product.minimumOrderQuantity),
      (this.returnPolicy = product.returnPolicy),
      (this.description = product.description),
      (this.reviews = product.reviews),
      (this.shippingInformation = product.shippingInformation),
      (this.stock = product.stock),
      (this.tags = product.tags),
      (this.thumbnail = product.thumbnail),
      (this.title = product.title),
      (this.warrantyInformation = product.warrantyInformation),
      (this.price = product.price),
      (this.rating = product.rating),
      (this.weight = product.weight);
  }
}

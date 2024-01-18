import { Product } from "./product"

export class Order {
  id: number
  numberOrder: number
  date: Date
  finalPrice: number
  products: Product[]
}

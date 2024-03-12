import { ProductImage } from "./ProductImage";

export class Product 
{
  productId: number | undefined;
  name: string| undefined;
  brandId: number| undefined;
  price: number = 0;
  discount: number= 0;
  productImage: string|undefined;
  color: string | null| undefined;
  colorId: number| undefined;
  gender: string | null| undefined;
  genderId: number| undefined;
  productTypeId: number| undefined;
  productSubTypeId: number| undefined;
  categoryId: number| undefined;
  availability: boolean| undefined;
  description: string| undefined;
  shortDescription: string| undefined;
  specification: string| undefined;
  brand: any; // You might want to replace 'any' with an appropriate type if available
  productType: any; // You might want to replace 'any' with an appropriate type if available
  productSubType: any; // You might want to replace 'any' with an appropriate type if available
  category: any; // You might want to replace 'any' with an appropriate type if available
  productRatings: any[] | null| undefined; // You might want to replace 'any[]' with a specific rating type if available
  productReviews: any[] | null| undefined; // You might want to replace 'any[]' with a specific review type if available
  productImages: ProductImage[] = [];
}
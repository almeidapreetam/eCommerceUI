export class ProductFilter {
    ProductTypeId?: number;
    SearchText?: string;
    SubProductTypeId?: number;
    CategoryId?: number[] = [];
    Brand?: number[] = [];
    Count?: number;
    SortBy?: string;
    Color?: number;
    Gender?: number;
    MinPrice?: number;
    MaxPrice?: number;
}
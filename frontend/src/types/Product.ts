export type Product = {
    id: number;
    name: string;
    image_link: string;
    sku: string;
    price: string;
    discount_price?: string;
    description: string;
    large_description: string;
    is_new?: boolean;
    other_images_link: string[];
    category: {
      id: any;
      name: string;
    };
}
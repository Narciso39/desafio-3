export type ProductPost = {
    name: string;
    sku: string;
    category_id: number;
    description: string;
    large_description: string;
    price: number;
    discount_price: number | null;
    discount_percent: number | null;
    is_new: boolean;
    image_link: string;
    other_images_link: string[];
  }
  
-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "image_link" VARCHAR(250),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "sku" VARCHAR(10) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "large_description" VARCHAR(500) NOT NULL,
    "price" DECIMAL NOT NULL,
    "discount_price" DECIMAL,
    "discount_percent" DECIMAL,
    "is_new" BOOLEAN,
    "image_link" VARCHAR(250),
    "other_images_link" VARCHAR(1000),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

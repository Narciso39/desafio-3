/*
  Warnings:

  - Added the required column `other_images_link` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "other_images_link",
ADD COLUMN     "other_images_link" JSONB NOT NULL;

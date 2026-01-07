/*
  Warnings:

  - A unique constraint covering the columns `[name_img]` on the table `image_data` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `image_data_name_img_key` ON `image_data`(`name_img`);

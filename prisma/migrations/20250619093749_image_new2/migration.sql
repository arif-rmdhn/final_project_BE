/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `image_data` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `image_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `image_data` ADD COLUMN `url` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `image_data_url_key` ON `image_data`(`url`);

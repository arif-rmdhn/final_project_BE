/*
  Warnings:

  - You are about to drop the `system_off` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `system_off`;

-- CreateTable
CREATE TABLE `status_system` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stat` INTEGER NOT NULL,
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_img` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

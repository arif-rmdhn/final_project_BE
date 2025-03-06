-- AlterTable
ALTER TABLE `sensor_soil` ALTER COLUMN `update_at` DROP DEFAULT;

-- CreateTable
CREATE TABLE `system_off` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stat` INTEGER NOT NULL,
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - You are about to drop the `data_sensor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sensor_now` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `data_sensor` DROP FOREIGN KEY `data_sensor_sensor_id_fkey`;

-- DropForeignKey
ALTER TABLE `sensor_now` DROP FOREIGN KEY `sensor_now_sensor_id_fkey`;

-- DropTable
DROP TABLE `data_sensor`;

-- DropTable
DROP TABLE `sensor_now`;

-- CreateTable
CREATE TABLE `sensor_soil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sensor_id` INTEGER NOT NULL,
    `humadity` DOUBLE NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `conductivity` DOUBLE NOT NULL,
    `ph` DOUBLE NOT NULL,
    `tds` DOUBLE NOT NULL,
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sensor_sht` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sensor_id` INTEGER NOT NULL,
    `humadity` DOUBLE NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_current_soil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sensor_id` INTEGER NOT NULL,
    `humadity` DOUBLE NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `conductivity` DOUBLE NOT NULL,
    `ph` DOUBLE NOT NULL,
    `tds` DOUBLE NOT NULL,
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_current_sht` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sensor_id` INTEGER NOT NULL,
    `humadity` DOUBLE NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sensor_soil` ADD CONSTRAINT `sensor_soil_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sensor_sht` ADD CONSTRAINT `sensor_sht_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data_current_soil` ADD CONSTRAINT `data_current_soil_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data_current_sht` ADD CONSTRAINT `data_current_sht_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to alter the column `sensor_id` on the `data_sensor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_sensor` on the `sensor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `sensor_id` on the `sensor_now` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `data_sensor` DROP FOREIGN KEY `data_sensor_sensor_id_fkey`;

-- DropForeignKey
ALTER TABLE `sensor_now` DROP FOREIGN KEY `sensor_now_sensor_id_fkey`;

-- DropIndex
DROP INDEX `data_sensor_sensor_id_fkey` ON `data_sensor`;

-- DropIndex
DROP INDEX `sensor_now_sensor_id_fkey` ON `sensor_now`;

-- AlterTable
ALTER TABLE `data_sensor` MODIFY `sensor_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sensor` MODIFY `id_sensor` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sensor_now` MODIFY `sensor_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `data_sensor` ADD CONSTRAINT `data_sensor_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sensor_now` ADD CONSTRAINT `sensor_now_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

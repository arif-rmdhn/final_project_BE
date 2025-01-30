-- CreateTable
CREATE TABLE `Sensor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_sensor` VARCHAR(191) NOT NULL,
    `sensor_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Sensor_id_sensor_key`(`id_sensor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_sensor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sensor_id` VARCHAR(191) NOT NULL,
    `data_value` DOUBLE NOT NULL,
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sensor_now` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sensor_id` VARCHAR(191) NOT NULL,
    `data_value` DOUBLE NOT NULL,
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data_sensor` ADD CONSTRAINT `data_sensor_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sensor_now` ADD CONSTRAINT `sensor_now_sensor_id_fkey` FOREIGN KEY (`sensor_id`) REFERENCES `Sensor`(`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;

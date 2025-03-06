-- CreateTable
CREATE TABLE `Sensor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_sensor` INTEGER NOT NULL,
    `sensor_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Sensor_id_sensor_key`(`id_sensor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sensor_soil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sensor_id` INTEGER NOT NULL,
    `humadity` DOUBLE NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `conductivity` DOUBLE NOT NULL,
    `ph` DOUBLE NOT NULL,
    `salinity` DOUBLE NOT NULL,
    `tds` DOUBLE NOT NULL,
    `recorded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

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
    `salinity` DOUBLE NOT NULL,
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
    `update_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

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

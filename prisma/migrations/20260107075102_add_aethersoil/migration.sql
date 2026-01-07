/*
  Warnings:

  - You are about to drop the `sensorbmkg` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `sensorbmkg`;

-- CreateTable
CREATE TABLE `AetherSoil` (
    `Timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Temperature` DOUBLE NOT NULL,
    `Humidity` DOUBLE NOT NULL,
    `Ph` DOUBLE NOT NULL,
    `EC` DOUBLE NOT NULL,
    `Nitrogen` DOUBLE NOT NULL,
    `Potassium` DOUBLE NOT NULL,
    `Kalium` DOUBLE NOT NULL,

    PRIMARY KEY (`Timestamp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

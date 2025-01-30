/*
  Warnings:

  - A unique constraint covering the columns `[sensor_id]` on the table `data_sensor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `data_sensor_sensor_id_key` ON `data_sensor`(`sensor_id`);

/*
  Warnings:

  - You are about to drop the `teste` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `teste`;

-- CreateTable
CREATE TABLE `Sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coin` VARCHAR(191) NOT NULL,
    `date_purchase` VARCHAR(191) NOT NULL,
    `value_purchase` DOUBLE NOT NULL,
    `unity_purchase` DOUBLE NOT NULL,
    `total_money_purchase` DOUBLE NOT NULL,
    `value_sale` DOUBLE NULL,
    `date_sale` VARCHAR(191) NULL,
    `unity_sale` DOUBLE NULL,
    `total_money_sale` DOUBLE NULL,
    `profit` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

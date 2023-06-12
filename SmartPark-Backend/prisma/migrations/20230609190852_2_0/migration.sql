-- CreateTable
CREATE TABLE `carros` (
    `carID` INTEGER NOT NULL AUTO_INCREMENT,
    `idUser` INTEGER NOT NULL,
    `placa` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `carros_placa_key`(`placa`),
    PRIMARY KEY (`carID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vagas` (
    `vagaID` INTEGER NOT NULL AUTO_INCREMENT,
    `estabelecimento` VARCHAR(191) NOT NULL,
    `andar` INTEGER NOT NULL,
    `Status` INTEGER NOT NULL,

    PRIMARY KEY (`vagaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservas` (
    `reservaID` INTEGER NOT NULL AUTO_INCREMENT,
    `vagaID` INTEGER NOT NULL,
    `id` INTEGER NOT NULL,
    `horaReservada` DATETIME(3) NULL,
    `horaResrva` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`reservaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

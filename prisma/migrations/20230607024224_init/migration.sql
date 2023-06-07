-- CreateEnum
CREATE TYPE "BurritoSize" AS ENUM ('SMALL', 'REGULAR', 'LARGE');

-- CreateTable
CREATE TABLE "BurritoType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BurritoType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Burrito" (
    "id" SERIAL NOT NULL,
    "size" "BurritoSize" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Burrito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "totalCost" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "burritoId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BurritoOption" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "BurritoOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItemBurritoOption" (
    "orderItemId" INTEGER NOT NULL,
    "burritoOptionId" INTEGER NOT NULL,

    CONSTRAINT "OrderItemBurritoOption_pkey" PRIMARY KEY ("orderItemId","burritoOptionId")
);

-- AddForeignKey
ALTER TABLE "Burrito" ADD CONSTRAINT "Burrito_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "BurritoType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_burritoId_fkey" FOREIGN KEY ("burritoId") REFERENCES "Burrito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItemBurritoOption" ADD CONSTRAINT "OrderItemBurritoOption_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItemBurritoOption" ADD CONSTRAINT "OrderItemBurritoOption_burritoOptionId_fkey" FOREIGN KEY ("burritoOptionId") REFERENCES "BurritoOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

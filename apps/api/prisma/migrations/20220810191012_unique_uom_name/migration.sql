/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `UOM` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UOM_name_key" ON "UOM"("name");

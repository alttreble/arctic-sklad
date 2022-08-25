/*
  Warnings:

  - You are about to drop the column `name` on the `Item` table. All the data in the column will be lost.
  - Added the required column `commercialName` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genericName` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN  "genericName" TEXT;

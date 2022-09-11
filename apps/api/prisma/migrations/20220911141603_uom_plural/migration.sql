/*
  Warnings:

  - Added the required column `namePlural` to the `UOM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UOM" ADD COLUMN "namePlural" TEXT;
UPDATE "UOM" SET "namePlural" = "name"|| 'и' WHERE "namePlural" IS NULL;
ALTER TABLE "UOM" ALTER COLUMN "namePlural" SET NOT NULL;

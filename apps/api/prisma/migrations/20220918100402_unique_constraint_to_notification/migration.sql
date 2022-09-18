/*
  Warnings:

  - A unique constraint covering the columns `[itemId,type]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "NotificationListener" ALTER COLUMN "schedule" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Notification_itemId_type_key" ON "Notification"("itemId", "type");

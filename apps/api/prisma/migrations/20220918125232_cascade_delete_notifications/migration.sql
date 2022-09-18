-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_itemId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationListener" DROP CONSTRAINT "NotificationListener_itemId_fkey";

-- AddForeignKey
ALTER TABLE "NotificationListener" ADD CONSTRAINT "NotificationListener_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

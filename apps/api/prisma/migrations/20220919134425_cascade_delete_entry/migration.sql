-- DropForeignKey
ALTER TABLE "ItemEntry" DROP CONSTRAINT "ItemEntry_itemId_fkey";

-- AddForeignKey
ALTER TABLE "ItemEntry" ADD CONSTRAINT "ItemEntry_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

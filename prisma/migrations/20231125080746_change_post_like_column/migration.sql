/*
  Warnings:

  - You are about to drop the column `like` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "like",
ADD COLUMN     "like_count" INTEGER DEFAULT 0;

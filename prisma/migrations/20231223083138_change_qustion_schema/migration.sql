/*
  Warnings:

  - Made the column `quizId` on table `Questions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_quizId_fkey";

-- AlterTable
ALTER TABLE "Questions" ALTER COLUMN "quizId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

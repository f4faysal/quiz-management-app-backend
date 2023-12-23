-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_quizId_fkey";

-- AlterTable
ALTER TABLE "Questions" ALTER COLUMN "options" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "answer" DROP NOT NULL,
ALTER COLUMN "quizId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;

import { Score } from '@prisma/client';
import prisma from '../../../shared/prisma';

const startQuizByCategory = async (): Promise<Score[]> => {
  const result = await prisma.score.findMany({
    include: { quiz: true, user: true },
  });

  return result;
};

const submitQuiz = async (answers: Score): Promise<Score> => {
  const result = await prisma.score.create({
    data: answers,
  });
  return result;
};

const getScores = async (id: string): Promise<Score | null> => {
  const result = await prisma.score.findUnique({ where: { id } });
  return result;
};

export const QuizTakingService = {
  startQuizByCategory,
  submitQuiz,
  getScores,
};

import { Prisma, Score } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createQuizTaking = async (
  payload: Prisma.ScoreCreateInput
): Promise<Score> => {
  console.log(payload, 'payload');
  const result = await prisma.score.create({
    data: payload,
  });
  return result;
};

const getAllQuizTaking = async (): Promise<Score[]> => {
  const result = await prisma.score.findMany({});
  return result;
};

const getQuizTakingById = async (id: string): Promise<Score | null> => {
  const result = await prisma.score.findUnique({ where: { id } });
  return result;
};

const updateQuizTaking = async (
  id: string,
  payload: Prisma.ScoreUpdateInput
): Promise<Score> => {
  const result = await prisma.score.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteQuizTaking = async (id: string): Promise<Score> => {
  const result = await prisma.score.delete({ where: { id } });
  return result;
};

export const QuizTakingService = {
  createQuizTaking,
  getAllQuizTaking,
  getQuizTakingById,
  updateQuizTaking,
  deleteQuizTaking,
};

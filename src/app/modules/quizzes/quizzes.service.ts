import { Prisma, Questions, Quiz } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createQuiz = async (payload: Prisma.QuizCreateInput): Promise<Quiz> => {
  console.log(payload, 'payload');
  const result = await prisma.quiz.create({
    data: payload,
  });
  return result;
};

const getAllQuiz = async (): Promise<Quiz[]> => {
  const result = await prisma.quiz.findMany({
    include: {
      createdBy: true,
      category: true,
    },
  });
  return result;
};

const getQuizById = async (id: string): Promise<Quiz | null> => {
  const result = await prisma.quiz.findUnique({
    where: { id },
    include: {
      createdBy: true,
      category: true,
    },
  });
  return result;
};

const updateQuiz = async (
  id: string,
  payload: Prisma.QuizUpdateInput
): Promise<Quiz> => {
  const result = await prisma.quiz.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteQuiz = async (id: string): Promise<Quiz> => {
  const result = await prisma.quiz.delete({ where: { id } });
  return result;
};

const createCuizQuestions = async (
  payload: Prisma.QuestionsCreateInput
): Promise<Questions> => {
  const result = await prisma.questions.create({
    data: payload,
  });
  return result;
};

const updateQuizQuestions = async (
  id: string,
  payload: Prisma.QuizUpdateInput
): Promise<Quiz> => {
  const result = await prisma.quiz.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const QuizService = {
  createQuiz,
  getAllQuiz,
  getQuizById,
  updateQuiz,
  deleteQuiz,
  createCuizQuestions,
  updateQuizQuestions,
};

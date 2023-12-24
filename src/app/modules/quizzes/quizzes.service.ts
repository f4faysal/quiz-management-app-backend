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
      questions: true,
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
      questions: true,
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
  await prisma.questions.deleteMany({ where: { quizId: id } });
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
): Promise<Questions> => {
  const result = await prisma.questions.update({
    where: { id },
    data: payload,
  });
  return result;
};

const getLastQuizQuestions = async (id: string): Promise<Questions[]> => {
  const result = await prisma.questions.findMany({
    where: { quizId: id },
    include: {
      quiz: true,
    },
  });
  return result;
};

const getQuestion = async (id: string): Promise<Questions | null> => {
  const result = await prisma.questions.findUnique({ where: { id } });
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
  getLastQuizQuestions,
  getQuestion,
};

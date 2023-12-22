import { Prisma, Score } from '@prisma/client';
import ApiError from '../../../errors/ApiError';
import shuffleQuiz from '../../../helpers/shuffleArray';
import prisma from '../../../shared/prisma';
import { IQuiz } from './user.interface';

const startQuizByCategory = async (category: string): Promise<IQuiz[]> => {
  const quizData = await prisma.quiz.findFirst({
    where: {
      category: category,
    },
    select: {
      questions: true,
    },
  });

  if (!quizData) {
    throw new ApiError(404, 'Quiz not found for the specified category.');
  }
  console.log(quizData);
  // Extracting and shuffling questions
  const shuffledQuestions: IQuiz[] = shuffleQuiz(quizData.questions);

  return shuffledQuestions;
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
  startQuizByCategory,
  getAllQuizTaking,
  getQuizTakingById,
  updateQuizTaking,
  deleteQuizTaking,
};

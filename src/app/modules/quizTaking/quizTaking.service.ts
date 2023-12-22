import { Score } from '@prisma/client';
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
      id: true,
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

const submitQuiz = async (quizId: string, answers: number): Promise<Score> => {
  const result = quizId + answers;
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

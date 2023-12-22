import { Prisma } from '@prisma/client';

const shuffleQuiz = (quizData: Prisma.JsonValue) => {
  if (quizData && typeof quizData === 'object') {
    const questions: any[] = Object.values(
      quizData as Record<string, any>
    ).sort(() => Math.random() - 0.5);

    for (const question of questions) {
      // Check if options is an array before shuffling
      if (Array.isArray(question.options)) {
        question.options = shuffleArray(question.options);
      }
    }

    return questions;
  } else {
    throw new Error('Invalid quiz data format');
  }
};

// Function to shuffle array
const shuffleArray = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default shuffleQuiz;

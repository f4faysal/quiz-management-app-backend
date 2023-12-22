import express from 'express';
import { QuizController } from './quizzes.controller';

const router = express.Router();

router.get('/', QuizController.getAllQuiz);
router.get('/:quizId', QuizController.getQuizById);
router.post('/', QuizController.createQuiz);
router.patch('/:quizId', QuizController.updateQuiz);
router.delete('/:quizId', QuizController.deleteQuiz);

export const QuizRouter = router;

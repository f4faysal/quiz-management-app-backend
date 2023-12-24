import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuizController } from './quizzes.controller';

const router = express.Router();

router.get('/', QuizController.getAllQuiz);
router.get('/:quizId', QuizController.getQuizById);

router.get('/question/:quizId', QuizController.getLastQuizQuestions);
router.get('/question-id/:questionId', QuizController.getQuestion);

router.post('/', auth(ENUM_USER_ROLE.ADMIN), QuizController.createQuiz);
router.post('/question', QuizController.createQuizQuestions);

router.patch('/question/:questionId', QuizController.updateQuizQuestions);
router.patch('/:quizId', auth(ENUM_USER_ROLE.ADMIN), QuizController.updateQuiz);

router.delete(
  '/:quizId',
  auth(ENUM_USER_ROLE.ADMIN),
  QuizController.deleteQuiz
);

export const QuizRouter = router;

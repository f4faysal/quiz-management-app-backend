import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuizController } from './quizzes.controller';

const router = express.Router();

router.get('/', QuizController.getAllQuiz);
router.get('/:quizId', QuizController.getQuizById);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), QuizController.createQuiz);
router.patch('/:quizId', QuizController.updateQuiz);
router.delete('/:quizId', QuizController.deleteQuiz);

export const QuizRouter = router;

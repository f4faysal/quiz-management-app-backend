import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuizTakingController } from './quizTaking.controller';

const router = express.Router();

router.get('/', QuizTakingController.getAllQuizTaking);
router.get('/:quizId', QuizTakingController.getQuizTakingById);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  QuizTakingController.createQuizTaking
);
router.patch('/:quizId', QuizTakingController.updateQuizTaking);
router.delete('/:quizId', QuizTakingController.deleteQuizTaking);

export const QuizTakingRout = router;

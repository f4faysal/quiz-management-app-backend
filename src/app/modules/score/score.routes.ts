import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuizTakingController } from './score.controller';

const router = express.Router();

router.get('/', QuizTakingController.startQuizByCategory);
router.get('/userId', QuizTakingController.getScores);
router.post(
  '/',
  auth(ENUM_USER_ROLE.PERFORMER, ENUM_USER_ROLE.ADMIN),
  QuizTakingController.submitQuiz
);

export const QuizTakingRout = router;

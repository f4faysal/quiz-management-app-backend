import express from 'express';
import { QuizTakingController } from './quizTaking.controller';

const router = express.Router();

router.get('/start/:category', QuizTakingController.startQuizByCategory);

router.get('/:quizId', QuizTakingController.getQuizTakingById);
// router.post(
//   '/',
//   auth(ENUM_USER_ROLE.ADMIN),
//   QuizTakingController.createQuizTaking
// );
router.patch('/:quizId', QuizTakingController.updateQuizTaking);
router.delete('/:quizId', QuizTakingController.deleteQuizTaking);

export const QuizTakingRout = router;

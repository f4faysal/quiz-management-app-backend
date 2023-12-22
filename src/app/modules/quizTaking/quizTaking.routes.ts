import express from 'express';
import { QuizTakingController } from './quizTaking.controller';

const router = express.Router();

router.get('/start/:category', QuizTakingController.startQuizByCategory);
router.get('/scores/userID', QuizTakingController.getScores);
router.post('/submit', QuizTakingController.submitQuiz);

export const QuizTakingRout = router;

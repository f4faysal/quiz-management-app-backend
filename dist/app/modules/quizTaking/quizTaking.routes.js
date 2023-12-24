"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizTakingRout = void 0;
const express_1 = __importDefault(require("express"));
const quizTaking_controller_1 = require("./quizTaking.controller");
const router = express_1.default.Router();
router.get('/start/:category', quizTaking_controller_1.QuizTakingController.startQuizByCategory);
router.get('/scores/userID', quizTaking_controller_1.QuizTakingController.getScores);
router.post('/submit', quizTaking_controller_1.QuizTakingController.submitQuiz);
exports.QuizTakingRout = router;

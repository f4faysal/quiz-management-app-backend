"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizTakingService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const shuffleArray_1 = __importDefault(require("../../../helpers/shuffleArray"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const startQuizByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const quizData = yield prisma_1.default.quiz.findFirst({
        where: {
            category: category,
        },
        select: {
            id: true,
            questions: true,
        },
    });
    if (!quizData) {
        throw new ApiError_1.default(404, 'Quiz not found for the specified category.');
    }
    console.log(quizData);
    // Extracting and shuffling questions
    const shuffledQuestions = (0, shuffleArray_1.default)(quizData.questions);
    return shuffledQuestions;
});
const submitQuiz = (quizId, answers) => __awaiter(void 0, void 0, void 0, function* () {
    const result = quizId + answers;
    return result;
});
const getScores = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.score.findUnique({ where: { id } });
    return result;
});
exports.QuizTakingService = {
    startQuizByCategory,
    submitQuiz,
    getScores,
};
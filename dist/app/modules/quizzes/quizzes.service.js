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
exports.QuizService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createQuiz = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload, 'payload');
    const result = yield prisma_1.default.quiz.create({
        data: payload,
    });
    return result;
});
const getAllQuiz = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quiz.findMany({
        include: {
            createdBy: true,
            category: true,
            questions: true,
        },
    });
    return result;
});
const getQuizById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quiz.findUnique({
        where: { id },
        include: {
            createdBy: true,
            category: true,
            questions: true,
        },
    });
    return result;
});
const updateQuiz = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.quiz.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteQuiz = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.questions.deleteMany({ where: { quizId: id } });
    const result = yield prisma_1.default.quiz.delete({ where: { id } });
    return result;
});
const createCuizQuestions = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.questions.create({
        data: payload,
    });
    return result;
});
const updateQuizQuestions = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.questions.update({
        where: { id },
        data: payload,
    });
    return result;
});
const getLastQuizQuestions = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.questions.findMany({
        where: { quizId: id },
        include: {
            quiz: true,
        },
    });
    return result;
});
const getQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.questions.findUnique({ where: { id } });
    return result;
});
exports.QuizService = {
    createQuiz,
    getAllQuiz,
    getQuizById,
    updateQuiz,
    deleteQuiz,
    createCuizQuestions,
    updateQuizQuestions,
    getLastQuizQuestions,
    getQuestion,
};

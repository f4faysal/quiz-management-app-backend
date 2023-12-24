"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizTakingRout = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const score_controller_1 = require("./score.controller");
const router = express_1.default.Router();
router.get('/', score_controller_1.QuizTakingController.startQuizByCategory);
router.get('/userId', score_controller_1.QuizTakingController.getScores);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.PERFORMER, user_1.ENUM_USER_ROLE.ADMIN), score_controller_1.QuizTakingController.submitQuiz);
exports.QuizTakingRout = router;

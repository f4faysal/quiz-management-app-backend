"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/auth/user.routes");
const category_routes_1 = require("../modules/category/category.routes");
const quizzes_routes_1 = require("../modules/quizzes/quizzes.routes");
const score_routes_1 = require("../modules/score/score.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        routes: user_routes_1.AuthRouter,
    },
    {
        path: '/quizzes',
        routes: quizzes_routes_1.QuizRouter,
    },
    {
        path: '/score',
        routes: score_routes_1.QuizTakingRout,
    },
    {
        path: '/category',
        routes: category_routes_1.CategoryRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;

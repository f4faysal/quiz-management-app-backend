import express from 'express';

import { AuthRouter } from '../modules/auth/user.routes';
import { CategoryRouter } from '../modules/category/category.routes';
import { QuizTakingRout } from '../modules/quizTaking/quizTaking.routes';
import { QuizRouter } from '../modules/quizzes/quizzes.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/quizzes',
    routes: QuizRouter,
  },
  {
    path: '/quiz',
    routes: QuizTakingRout,
  },
  {
    path: '/category',
    routes: CategoryRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

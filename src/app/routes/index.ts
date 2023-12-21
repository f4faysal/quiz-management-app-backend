import express from 'express';

import { AttachmentRouter } from '../modules/attachment/attachment.routes';
import { AuthRouter } from '../modules/auth/user.routes';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/attachment',
    routes: AttachmentRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

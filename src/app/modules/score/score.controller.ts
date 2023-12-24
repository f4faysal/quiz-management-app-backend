import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuizTakingService } from './score.service';

const startQuizByCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizTakingService.startQuizByCategory();
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'QuizTaking created successfully',
      data: result,
    });
  }
);

const submitQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };
    const { answers } = req.body;

    answers.userId = userId;

    const result = await QuizTakingService.submitQuiz(answers);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'QuizTakingzes fetched successfully',
      data: result,
    });
  }
);

const getScores: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizTakingService.getScores(req.params.userId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'QuizTaking fetched successfully',
      data: result,
    });
  }
);

export const QuizTakingController = {
  startQuizByCategory,
  submitQuiz,
  getScores,
};

import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuizTakingService } from './quizTaking.service';

const startQuizByCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const result = await QuizTakingService.startQuizByCategory(categoryId);
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
    const { quizId } = req.params;
    const { answers } = req.body;

    const result = await QuizTakingService.submitQuiz(quizId, answers);
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
    const result = await QuizTakingService.getQuizTakingById(
      req.params.QuizTakingId
    );
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

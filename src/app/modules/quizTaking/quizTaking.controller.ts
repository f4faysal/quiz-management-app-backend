import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuizTakingService } from './quizTaking.service';

const createQuizTaking: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizTakingService.createQuizTaking(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'QuizTaking created successfully',
      data: result,
    });
  }
);

const getAllQuizTaking: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizTakingService.getAllQuizTaking();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'QuizTakingzes fetched successfully',
      data: result,
    });
  }
);

const getQuizTakingById: RequestHandler = catchAsync(
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

const updateQuizTaking: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizTakingService.updateQuizTaking(
      req.params.QuizTakingId,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'QuizTaking updated successfully',
      data: result,
    });
  }
);

const deleteQuizTaking: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizTakingService.deleteQuizTaking(
      req.params.QuizTakingId
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'QuizTaking deleted successfully',
      data: result,
    });
  }
);

export const QuizTakingController = {
  createQuizTaking,
  getAllQuizTaking,
  getQuizTakingById,
  updateQuizTaking,
  deleteQuizTaking,
};

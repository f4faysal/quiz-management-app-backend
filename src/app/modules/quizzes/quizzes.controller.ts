import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuizService } from './quizzes.service';

const createQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.createQuiz(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz created successfully',
      data: result,
    });
  }
);

const getAllQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.getAllQuiz();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quizzes fetched successfully',
      data: result,
    });
  }
);

const getQuizById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.getQuizById(req.params.quizId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz fetched successfully',
      data: result,
    });
  }
);

const updateQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.updateQuiz(req.params.quizId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz updated successfully',
      data: result,
    });
  }
);

const deleteQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.deleteQuiz(req.params.quizId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz deleted successfully',
      data: result,
    });
  }
);

const createQuizQuestions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.createCuizQuestions(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz questions created successfully',
      data: result,
    });
  }
);

const updateQuizQuestions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.updateQuizQuestions(
      req.params.questionId,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz questions updated successfully',
      data: result,
    });
  }
);

const getLastQuizQuestions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.getLastQuizQuestions(req.params.quizId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz questions fetched successfully',
      data: result,
    });
  }
);

const getQuestion: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.getQuestion(req.params.questionId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz questions fetched successfully',
      data: result,
    });
  }
);

export const QuizController = {
  createQuiz,
  getAllQuiz,
  getQuizById,
  updateQuiz,
  deleteQuiz,
  createQuizQuestions,
  updateQuizQuestions,
  getLastQuizQuestions,
  getQuestion,
};

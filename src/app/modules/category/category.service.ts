import { Category, Quiz } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategory = async (paylod: Category): Promise<Category> => {
  const result = await prisma.category.create({ data: paylod });

  return result;
};

const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();
  return result;
};

const getCategoryById = async (id: string): Promise<Quiz[]> => {
  const result = await prisma.quiz.findMany({
    where: { categoryId: id },
    include: {
      createdBy: true,
      category: true,
      questions: true,
    },
  });
  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategory,
  getCategoryById,
};

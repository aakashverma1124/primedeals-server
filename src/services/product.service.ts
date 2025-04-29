import prisma from '../db/prisma';

export const fetchLatestProducts = async () => {
  return prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' },
  });
};

import prisma from '../db/prisma';

export const fetchLatestProducts = async () => {
  return prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' },
  });
};

export const fetchProductBySlug = async (slug: string) => {
  return await prisma.product.findFirst({ where: { slug: slug } });
};

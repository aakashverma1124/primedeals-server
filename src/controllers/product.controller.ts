import { Request, Response } from 'express';
import { fetchLatestProducts } from '../services/product.service';

export const fetchProducts = async (req: Request, res: Response) => {
  try {
    const products = await fetchLatestProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error('[getProducts]', error);
    res.status(500).json({ message: 'Failed to fetch latest products' });
  }
};

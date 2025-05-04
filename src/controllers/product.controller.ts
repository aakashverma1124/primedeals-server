import { Request, Response } from 'express';
import {
  fetchLatestProducts,
  fetchProductBySlug,
} from '../services/product.service';

export const fetchProducts = async (req: Request, res: Response) => {
  try {
    const products = await fetchLatestProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error('[getProducts]', error);
    res.status(500).json({ message: 'Failed to fetch latest products' });
  }
};

export const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const slug = req.params['slug'];
    const productBySlug = await fetchProductBySlug(slug);
    res.status(200).json(productBySlug);
  } catch (error) {
    console.error('[fetchProductBySlug]', error);
    res.status(404).json({ message: 'Product not found.' });
  }
};

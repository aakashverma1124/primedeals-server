import express from 'express';
import {
  getProductBySlug,
  fetchProducts,
} from '../controllers/product.controller';

const productRoutes = express.Router();

productRoutes.get('/', fetchProducts);
productRoutes.get('/:slug', getProductBySlug);

export default productRoutes;

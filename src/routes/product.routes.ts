import express from 'express';
import { fetchProducts } from '../controllers/product.controller';

const productRoutes = express.Router();

productRoutes.get('/', fetchProducts);

export default productRoutes;

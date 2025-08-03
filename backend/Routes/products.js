import express from 'express';
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from '../Controllers/productsControllers.js';
import authMiddleware from '../Middlewears/authMiddleware.js';

const productRouter = express.Router();

productRouter.use(authMiddleware); 

productRouter.get('/', getAllProducts);
productRouter.post('/', addProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;
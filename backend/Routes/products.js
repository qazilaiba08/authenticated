import express from 'express';
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from '../Controllers/productsControllers.js';
import authMiddleware from '../Middlewears/authMiddleware.js';
import "../data.json"

const router = express.Router();

router.use(authMiddleware); 

router.get('/', getAllProducts, (req, res) => {
  res.status(200).json(res.locals.products);
});
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
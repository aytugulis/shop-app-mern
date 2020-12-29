import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.get('/', getProducts)
router.post('/', [protect, admin], createProduct)

router.get('/top', getTopProducts)

router.post('/:id/reviews', [protect], createProductReview)

router.get('/:id', getProductsById)
router.delete('/:id', [protect, admin], deleteProduct)
router.put('/:id', [protect, admin], updateProduct)

export default router

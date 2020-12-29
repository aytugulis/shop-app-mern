import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.post('/', registerUser)
router.get('/', [protect, admin], getUsers)

router.post('/login', authUser)

router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

router.delete('/:id', [protect, admin], deleteUser)
router.get('/:id', [protect, admin], getUserById)
router.put('/:id', [protect, admin], updateUser)

export default router

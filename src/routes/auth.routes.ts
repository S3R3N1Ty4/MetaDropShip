import express from 'express';
import { AuthService } from '../services/auth.service';
import { asyncHandler } from '../middleware/errorHandler';

const router = express.Router();
const authService = new AuthService();

router.post('/register', asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const result = await authService.register(email, password, firstName, lastName);
  res.status(201).json(result);
}));

router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  res.json(result);
}));

router.post('/verify-token', asyncHandler(async (req, res) => {
  const { token } = req.body;
  const decoded = await authService.verifyToken(token);
  res.json({ valid: true, user: decoded });
}));

export default router;

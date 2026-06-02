import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate } from '../middleware/auth';
import { asyncHandler } from '../middleware/errorHandler';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/create-intent', authenticate, asyncHandler(async (req, res) => {
  const { orderId, amount } = req.body;
  // Stripe integration would go here
  res.json({ clientSecret: 'test_secret', amount });
}));

router.post('/confirm', authenticate, asyncHandler(async (req, res) => {
  const { orderId, paymentMethodId } = req.body;
  
  const payment = await prisma.payment.create({
    data: {
      orderId,
      amount: 0,
      status: 'COMPLETED',
      paymentMethod: 'CARD',
    },
  });

  await prisma.order.update({
    where: { id: orderId },
    data: { paymentStatus: 'COMPLETED' },
  });

  res.json({ success: true, payment });
}));

export default router;

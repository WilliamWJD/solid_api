import { Router } from 'express';

const router = Router();

router.post('/users', (req, res) => {
  return res.status(201).json({});
});

export { router };
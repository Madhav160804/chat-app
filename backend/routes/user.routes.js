import express from 'express';
import protectRoute from '../middleware/protectRoute';

const router = express.Router();

router.get('/',  ,getUsersForSidebar);

export default router;
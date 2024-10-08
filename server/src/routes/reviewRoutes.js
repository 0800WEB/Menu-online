import express from 'express';
import { getReviews, createReview, getReviewById, updateReview, deleteReview } from '../controllers/reviewController.js' ;

const router = express.Router();

router.get('/', getReviews);
router.post('/', createReview);
router.get('/:id', getReviewById);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;

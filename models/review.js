import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true, 
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reviewType: {
    type: String,
    required: true,
    trim: true,
  },
  reviewId: {
    type: String,
    required: true,
  }
});

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

export default Review;
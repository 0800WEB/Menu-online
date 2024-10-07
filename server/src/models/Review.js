import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
    qualification: { type: Number, required: true },
});

export default mongoose.model('Review', ReviewSchema);

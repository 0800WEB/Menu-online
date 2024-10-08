import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    array_images: { type: [String] },
    description: { type: String },
    price: { type: Number, required: true },
    diet_type: { type: String, enum: ['celiac', 'carnivore', 'vegetarian', 'vegan', 'no_diet_type'], default: 'no_diet_type' },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});

export default mongoose.model('Product', ProductSchema);

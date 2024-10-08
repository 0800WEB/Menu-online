import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    notification: { type: Boolean, default: false },
    daily_notification: { type: Boolean, default: false },
    review_quality: { type: Number, default: 0 },
    user_type: { type: String, enum: ['client', 'admin', 'owner'], required: true },
    image: { type: String, default: 'no image' },
    googleId: { type: String, unique: true, sparse: true },
    provider: { type: String, enum: ['local', 'google'], default: 'local' }
}, {
    timestamps: true
});

// Middleware para hashear la contraseña antes de guardar
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Método para generar un JWT
userSchema.methods.generateAuthToken = function() {
    return jwt.sign(
        { id: this._id, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: '6h' }
    );
};

const User = mongoose.model('User', userSchema);

export default User;
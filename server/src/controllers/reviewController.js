import Review from '../models/Review.js';

// Obtener todas las reseñas
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('product_id user_id');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva reseña
export const createReview = async (req, res) => {
  const { id, product_id, user_id, comment, qualification } = req.body;

  const newReview = new Review({ id, product_id, user_id, comment, qualification });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtener una reseña por ID
export const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ message: 'Review no encontrada' });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la review', error });
  }
};

// Editar una reseña
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedReview = await Review.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review no encontrada' });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la review', error });
  }
};

// Eliminar una reseña
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    // Eliminar la review por su ID
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review no encontrada' });
    }

    res.status(200).json({ message: 'Review eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la review', error });
  }
};

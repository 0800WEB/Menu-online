import Category from '../models/Category.js';

// Obtener todas las categorías
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva categoría
export const createCategory = async (req, res) => {
  const { id, name } = req.body;

  const newCategory = new Category({ id, name });

  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtener una categoría por ID
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la categoría', error });
  }
};

// Editar una categoría
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    // Actualizar la categoría con los datos proporcionados
    const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la categoría', error });
  }
};

// Eliminar una categoría
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Eliminar la categoría por su ID
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la categoría', error });
  }
};

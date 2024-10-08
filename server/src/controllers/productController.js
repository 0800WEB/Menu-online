import Product from '../models/Product.js';

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category_id');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  const { id, name, image, array_images, description, price, diet_type, category_id } = req.body;

  const newProduct = new Product({ id, name, image, array_images, description, price, diet_type, category_id });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

// Editar un producto
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    // Actualizar el producto con los datos proporcionados
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Eliminar el producto por su ID
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};

import Product from '../Models/productsModel.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ userId: req.user.id });
    res.json({ message: 'Products fetched', data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const { name, price, description, category } = req.body;

  if (!name || !price || !description || !category)
    return res.status(400).json({ message: 'All fields required' });

  try {
    const product = new Product({ name, price, description, category, userId: req.user.id });
    await product.save();
    res.status(201).json({ message: 'Product added', data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found or not yours' });
    res.json({ message: 'Product updated', data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!product) return res.status(404).json({ message: 'Product not found or not yours' });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

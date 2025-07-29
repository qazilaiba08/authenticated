import express from 'express';
import cors from 'cors';
import authRoutes from './Routes/auth.js';
import productRoutes from './Routes/products.js';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(express.json());
connectDB();
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/',(req,res) => {
    res.send("Welcome to the server!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}🚀`);
});
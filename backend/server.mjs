import express from 'express';
import cors from 'cors';
import authRoutes from './Routes/auth.js';
import productRoutes from './Routes/products.js';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "https://your-frontend.vercel.app","http://localhost:5000"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    exposedHeaders: ["Content-Length", "X-Requested-With"],
    preflightContinue: false,
    maxAge: 86400, 
  credentials: true
}));

app.use(express.json());
connectDB();
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/',(req,res) => {
    console.log(req.body);
    
    res.send({ message: "Backend running on Vercel" });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}🚀`);
});

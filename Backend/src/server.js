import express from 'express';
import tasksRouter from './routes/tasksRouters.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

// app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks",tasksRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log('Server chạy trên cổng', PORT);
  });
});




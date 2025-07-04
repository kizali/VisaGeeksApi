import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
import User from './models/User.js';
dotenv.config();
// teste
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use
app.post('/create-user', async (req, res) => {
    const  {name,email}= req.body;
  const newUser =await new User({ name: name, email: email });
  await newUser.save();
  res.send('✅ User created and DB is working');
});
connectDB();
app.use('/api', requestVisaRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
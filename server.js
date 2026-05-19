//Dependecies 

const express = require('express');

const connectDB = require('./db/connection');

const bookRoutes = require('./routes/bookRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//connect to database
connectDB();

//MIDLEWARE
app.use(express.json());

//Routes
app.use('/api/books', bookRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
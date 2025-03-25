require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("❌ MONGO_URI is missing in .env file!");
    process.exit(1); // Stop server if URI is missing
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Database Connected'))
    .catch(err => console.error('❌ Database Connection Error:', err));

app.get('/', (req, res) => {
    res.send('Welcome to AmitResto Backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
mongoose.connect(process.env.MONGO_URI)
app.get('/api/menu', (req, res) => {
    res.json([
        { id: 1, name: "Burger", price: 5.99 },
        { id: 2, name: "Pizza", price: 9.99 },
        { id: 3, name: "Pasta", price: 7.49 }
    ]);
});
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

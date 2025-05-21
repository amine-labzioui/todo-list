const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

// Connexion MongoDB
mongoose.connect('mongodb://localhost/todoapp', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Routes
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

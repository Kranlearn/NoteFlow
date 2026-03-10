const express = require('express');
const cors = require('cors');
const path = require('path');
const notesRoutes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes API
app.use('/api/notes', notesRoutes);

// Route fallback → frontend
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrage
app.listen(PORT, () => {
  console.log(`✅ NoteFlow tourne sur http://localhost:3000`);
});

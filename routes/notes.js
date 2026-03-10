const express = require('express');
const router = express.Router();
const db = require('../database');

// GET — récupérer toutes les notes
router.get('/', (req, res) => {
  const notes = db.prepare('SELECT * FROM notes ORDER BY updated_at DESC').all();
  res.json(notes);
});

// GET — récupérer une note par id
router.get('/:id', (req, res) => {
  const note = db.prepare('SELECT * FROM notes WHERE id = ?').get(req.params.id);
  if (!note) return res.status(404).json({ error: 'Note introuvable' });
  res.json(note);
});

// POST — créer une note
router.post('/', (req, res) => {
  const { titre, contenu } = req.body;
  if (!titre) return res.status(400).json({ error: 'Le titre est obligatoire' });
  const result = db.prepare(
    'INSERT INTO notes (titre, contenu) VALUES (?, ?)'
  ).run(titre, contenu || '');
  const note = db.prepare('SELECT * FROM notes WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(note);
});

// PUT — modifier une note
router.put('/:id', (req, res) => {
  const { titre, contenu } = req.body;
  const note = db.prepare('SELECT * FROM notes WHERE id = ?').get(req.params.id);
  if (!note) return res.status(404).json({ error: 'Note introuvable' });
  db.prepare(
    'UPDATE notes SET titre = ?, contenu = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
  ).run(titre || note.titre, contenu ?? note.contenu, req.params.id);
  const updated = db.prepare('SELECT * FROM notes WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// DELETE — supprimer une note
router.delete('/:id', (req, res) => {
  const note = db.prepare('SELECT * FROM notes WHERE id = ?').get(req.params.id);
  if (!note) return res.status(404).json({ error: 'Note introuvable' });
  db.prepare('DELETE FROM notes WHERE id = ?').run(req.params.id);
  res.json({ message: 'Note supprimée' });
});

module.exports = router;
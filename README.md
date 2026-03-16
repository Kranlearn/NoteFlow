# NoteFlow 📝

Une application de prise de notes rapide, propre et efficace — construite en Fullstack avec Node.js, Express et SQLite.

---

## Stack technique

- **Backend** — Node.js, Express
- **Base de données** — SQLite (via better-sqlite3)
- **Frontend** — HTML, CSS, JavaScript vanilla

---

## Fonctionnalités

- Créer, éditer et supprimer des notes
- Sauvegarde instantanée avec `Ctrl + S`
- Interface sobre et moderne
- API REST complète (GET / POST / PUT / DELETE)
- Base de données persistante en local

---

## Installation en local

### Prérequis

- [Node.js](https://nodejs.org) installé sur ta machine
- [Git](https://git-scm.com) installé sur ta machine

### Étapes

```bash
# 1. Clone le projet
git clone https://github.com/TON_USERNAME/noteflow.git

# 2. Entre dans le dossier
cd noteflow

# 3. Installe les dépendances
npm install

# 4. Lance le serveur
node server.js
```

## Structure du projet

```
noteflow/
├── public/
│   └── index.html       ← Interface utilisateur
├── routes/
│   └── notes.js         ← Routes API REST
├── database.js          ← Connexion SQLite
├── server.js            ← Serveur Express
└── package.json
```

---

## API REST

| Méthode | Route | Description |
|--------|-------|-------------|
| GET | `/api/notes` | Récupérer toutes les notes |
| GET | `/api/notes/:id` | Récupérer une note par id |
| POST | `/api/notes` | Créer une nouvelle note |
| PUT | `/api/notes/:id` | Modifier une note |
| DELETE | `/api/notes/:id` | Supprimer une note |


```

---

## Auteur: Christophe** — Développeur Fullstack  
Stack : HTML · CSS · JavaScript · Node.js · Python · SQL · Linux

---

> Projet réalisé dans le cadre de mon portfolio freelance.

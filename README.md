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

ouverture du server dans le navigateur: **http://localhost:3000** . 🚀

---

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

---

## Mettre le projet sur GitHub

### 1. Installe Git
Télécharge et installe Git → https://git-scm.com/download/win  
Laisse toutes les options par défaut.

### 2. Configure Git (une seule fois)
```bash
git config --global user.name "Ton Prénom"
git config --global user.email "ton@email.com"
```

### 3. Crée un repo sur GitHub
- Va sur [github.com](https://github.com)
- Clique sur **"New repository"**
- Nom : `noteflow`
- Laisse tout par défaut et clique **"Create repository"**

### 4. Initialise Git dans ton projet
```bash
git init
git add .
git commit -m "Initial commit — NoteFlow"
```

### 5. Pousse le projet sur GitHub
```bash
git remote add origin https://github.com/TON_USERNAME/noteflow.git
git branch -M main
git push -u origin main
```

Remplace `TON_USERNAME` par ton pseudo GitHub. ✅

---

## Déploiement (Railway)

Une fois sur GitHub, le déploiement sur [Railway](https://railway.app) prend 5 minutes :

1. Connecte-toi sur Railway avec ton compte GitHub
2. Clique sur **"New Project"** → **"Deploy from GitHub repo"**
3. Sélectionne le repo `noteflow`
4. Railway détecte Node.js automatiquement et déploie 🚀

---

## Auteur: Christophe** — Développeur Fullstack  
Stack : HTML · CSS · JavaScript · Node.js · Python · SQL · Linux

---

> Projet réalisé dans le cadre de mon portfolio freelance.

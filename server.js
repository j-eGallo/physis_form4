const express = require('express');
const path = require('path');
const app = express();

// Middleware pour définir les en-têtes de mise en cache
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=604800'); // 1 semaine
    next();
});

// Définir le répertoire contenant les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

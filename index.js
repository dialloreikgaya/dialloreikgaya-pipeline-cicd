const http = require('http');

// CETTE LIGNE EST CRUCIALE : Railway injecte lui-même le port via process.env.PORT
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Application CI/CD de Diallo & Sawadogo déployée avec succès !\n');
});

// IMPORTANT : On écoute sur '0.0.0.0' pour être accessible sur le web
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

# Build et service du site

Le Dockerfile installe les dépendances avec `npm ci`, compile l'application avec
`npm run build`, puis Nginx sert uniquement les fichiers générés dans `dist` sur
le port `80`. Il n'y a aucune configuration de reverse proxy dans le conteneur.

Utiliser une application reliée à ce dépôt Git avec ces réglages :

| Réglage | Valeur |
| --- | --- |
| Build Pack / Build strategy | `Dockerfile` |
| Base Directory | `/` (racine du dépôt) |
| Dockerfile Location | `/Dockerfile` |
| Docker Build Stage Target | Laisser vide, ou `runtime` |
| Ports Exposes | `80` |
| Port interne du domaine, si renseigné | `80` |
| Commande de démarrage personnalisée | Laisser vide |

Pousser les fichiers modifiés sur la branche suivie par Coolify, puis redéployer.

Le seul réglage spécifique de Nginx permet de recharger les routes React, comme
`/design/obsidienne`, en servant `index.html`.

Pour vérifier localement depuis la racine du dépôt avec Docker disponible :

```sh
docker build -t dual-journey .
docker run --rm -p 8080:80 dual-journey
```

Ouvrir `http://localhost:8080/` et `http://localhost:8080/design/obsidienne`,
puis recharger ces pages directement pour vérifier les routes React.

Documentation : [Dockerfile dans Coolify](https://coolify.io/docs/applications/builds/dockerfile).

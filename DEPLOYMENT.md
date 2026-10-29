# Déploiement sur Coolify

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

Enregistrer les réglages, pousser les fichiers modifiés sur la branche suivie par
Coolify, puis redéployer. Si un contrôle de santé est configuré dans Coolify,
utiliser HTTP, le port `80`, le chemin `/` et le statut attendu `200`.

Le build utilise `app/package-lock.json` avec `npm ci`, compile Vite, puis copie
uniquement `app/dist` dans l'image Nginx finale. Le conteneur lance Nginx ; il
n'utilise plus le serveur de développement Vite sur le port 8080.
La configuration Nginx renvoie `index.html` pour les routes React, notamment
`/design` et `/design/obsidienne`.

Pour vérifier localement depuis la racine du dépôt avec Docker disponible :

```sh
docker build -t dual-journey .
docker run --rm -p 8080:80 dual-journey
```

Ouvrir `http://localhost:8080/` et `http://localhost:8080/design/obsidienne`,
puis recharger ces pages directement pour vérifier les routes React.

Documentation : [Dockerfile dans Coolify](https://coolify.io/docs/applications/builds/dockerfile).

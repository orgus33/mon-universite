# Système de Gestion Universitaire

Ce projet est un système de gestion universitaire complet conçu pour faciliter la gestion des élèves, des enseignants, des notes et des matières. Réalisé avec des technologies web modernes, l'application assure une expérience utilisateur fluide et une fonctionnalité robuste côté serveur.

## Technologies Utilisées

- Front-end : Le côté client est développé avec React, une puissante bibliothèque JavaScript pour construire des interfaces utilisateur. L'architecture basée sur les composants de React rend l'application scalable et facile à maintenir.
- Back-end : Le côté serveur est alimenté par Express.js, un framework d'application web minimal et flexible pour Node.js qui offre un ensemble robuste de fonctionnalités pour les applications web et mobiles. Cette configuration permet une gestion efficace des requêtes et une gestion transparente des données.
- Base de données : MongoDB avec l'ORM Mongoose est utilisé pour le stockage des données. Mongoose offre une solution basée sur des schémas pour modéliser les données de l'application, incluant le casting de type intégré, la validation, la construction de requêtes, et les hooks pour la logique métier.

## Fonctionnalités

- Gestion des élèves : Permet d'ajouter, de modifier et de supprimer des enregistrements d'élèves. Les informations de chaque élève, telles que leur identifiant, nom et date de naissance, peuvent être gérées facilement via une interface conviviale.
- Gestion des enseignants : Permet l'administration des profils des enseignants, incluant l'ajout de nouveaux enseignants et la modification des entrées existantes. Les informations de chaque enseignant, y compris leur spécialisation et leurs coordonnées, sont facilement accessibles.
- Gestion des notes : Facilite l'enregistrement et la mise à jour des notes des élèves pour diverses matières. Le système supporte les modifications et les interrogations des dossiers de notes, assurant que les enseignants peuvent facilement suivre les progrès des élèves.
- Gestion des matières : Offre la capacité d'ajouter et de gérer les détails des matières telles que les codes des matières, les titres et les coefficients, en accord avec les exigences académiques.

### Executer le projet

- Clonez le dépôt sur votre machine locale.
- Naviguez jusqu'au répertoire du projet et installez les dépendances :
npm install
- Puis lancer le serveur front-end :
npm start

Démarrez le serveur back-end :
cd server
npm install
npm start

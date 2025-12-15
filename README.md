# 💼 Portfolio - Maxime LEFORT

Portfolio professionnel développé avec React, TypeScript et Vite. Conçu pour présenter mon parcours, mes projets et mes compétences en administration systèmes et réseaux.

## 🚀 Aperçu

Portfolio moderne et responsive pour mettre en avant :
- Mon profil d'étudiant en Coordinateur de Projet Informatique
- Mes projets techniques (virtualisation, automatisation, conteneurisation)
- Mes compétences en administration système et réseaux
- Ma recherche d'alternance en admin sys

## ✨ Fonctionnalités

- ⚡ **Performance** : Construit avec Vite pour un chargement ultra-rapide
- 🎨 **Design moderne** : Interface élégante avec animations fluides
- 📱 **Responsive** : Adaptation parfaite sur tous les écrans
- 🌙 **Thème sombre** : Design optimisé pour le confort visuel
- 🔄 **Navigation fluide** : Smooth scroll entre les sections
- 🎯 **Componentisé** : Architecture React modulaire et maintenable

## 🛠️ Technologies utilisées

- **Frontend** : React 19.2 + TypeScript
- **Build Tool** : Vite 7.2
- **Styling** : CSS modules avec animations personnalisées
- **Linting** : ESLint + TypeScript ESLint
- **Déploiement** : Docker + Nginx (optionnel)

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes

1. Cloner le dépôt
```bash
git clone https://github.com/maxlft/portfolio.git
cd portfolio
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer en mode développement
```bash
npm run dev
```

4. Ouvrir le navigateur sur `http://localhost:5173`

## 🎯 Personnalisation

Pour adapter ce portfolio à vos besoins, modifiez le fichier de configuration :

```typescript
// src/data/portfolioData.ts
export const portfolioData = {
  personal: {
    name: "Votre Nom",
    title: "Votre Titre",
    description: "Votre description",
    image: "/votre-photo.jpg"
  },
  // ... autres configurations
}
```

### Sections personnalisables :
- **Personal** : Nom, titre, description, photo
- **About** : Présentation détaillée
- **Projects** : Liste de vos projets avec technologies
- **Skills** : Compétences organisées par catégories
- **Contact** : Email, LinkedIn, GitHub, etc.

## 📝 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Linting
npm run lint
```

## 🐳 Déploiement avec Docker

Le projet inclut une configuration Docker pour un déploiement simple :

```bash
# Build de l'image
docker build -t portfolio .

# Lancer le conteneur
docker run -p 80:80 portfolio
```

Ou avec Docker Compose :
```bash
docker-compose up -d
```

## 📂 Structure du projet

```
portfolio/
├── public/               # Fichiers statiques
├── src/
│   ├── components/       # Composants React
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/            # Configuration du portfolio
│   │   └── portfolioData.ts
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── Dockerfile           # Configuration Docker
├── docker-compose.yml   # Orchestration Docker
└── nginx.conf          # Configuration Nginx
```

## 🌟 Fonctionnalités à venir

- [ ] Mode clair/sombre manuel
- [ ] Section blog technique
- [ ] Formulaire de contact fonctionnel
- [ ] Animations avancées
- [ ] Multilingue (FR/EN)
- [ ] Téléchargement CV

## 📧 Contact

**Maxime LEFORT**
- Email : maxime.lefort@etik.com
- LinkedIn : [linkedin.com/in/maxlft](https://www.linkedin.com/in/maxlft/)
- GitHub : [github.com/maxlft](https://github.com/maxlft)

## 📄 Licence

Ce projet est libre d'utilisation pour un usage personnel. Pour un usage commercial, merci de me contacter.

---

Développé avec ❤️ par Maxime LEFORT | 2025

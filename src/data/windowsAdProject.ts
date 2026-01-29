// Détails du projet Création Active Directory
export const windowsAdProject = {
  title: "Création d'un Active Directory",
  subtitle: "Création de l'infrastructure AD d'un lycée",
  description:
        "Création complète de l'infrastructure Active Directory d'un établissement scolaire : Windows Server 2022, déploiement de GPO avancées, optimisation DNS/DHCP, et automatisation PowerShell. Une AD moderne, sécurisée, documentée et scalable pour gérer les élèves, les profs et les administrateurs en toute stabilité.",
  technologies: [
    "Windows Server 2022",
    "Active Directory",
    "Group Policy (GPO)",
    "DNS / DHCP",
    "PowerShell"
  ],

  sections: [
    {
      title: "Planification & Conception",
      content:
        "Analyse des besoins d'un établissement scolaire : identification des différents profils utilisateurs (administration, enseignants, élèves, technique), définition de l'arborescence des OU, planification de la structure de groupes de sécurité, et conception des politiques de groupe adaptées à chaque service. Rédaction d'un plan de déploiement complet avec les bonnes pratiques de sécurité.",
    },
    {
      title: "Déploiement & Configuration",
      content:
        "Création complète de l'infrastructure Active Directory : installation et configuration de Windows Server 2022, mise en place d'une structure OU logique par services (Administration, Enseignants, Élèves, Technique), création des comptes utilisateurs et ordinateurs, mise en place de groupes de sécurité cohérents, et déploiement de GPO optimisées pour chaque profil. Configuration du contrôleur de domaine avec les rôles DNS et DHCP.",
      image: "/projects/user-groupe.png",
      image2: "/projects/gestion-server.png",
    },
    {
      title: "Sécurisation & Automatisation",
      content:
        "Durcissement de l'AD : mise en place de stratégies de mots de passe renforcées, configuration des permissions. Automatisation via PowerShell pour la création de comptes en masse avec des répertoires personnels dans le réseau. Déploiement automatique des logiciels sur les sessions utilisateurs.",
      image: "/projects/gpo.png",
    },
  ],

  features: [
    "Déploiement de Windows Server 2022 avec Active Directory",
    "Arborescence OU structurée et optimisée",
    "GPO avancées : déploiement logiciels, restrictions, sécurité",
    "Scripts PowerShell pour l'automatisation des tâches récurrentes",
  ],

  challenges: [
    "Concevoir une infrastructure AD",
    "Créer une structure OU logique et maintenable",
    "Assurer la sécurité dès le déploiement initial",
  ],

  results: [
    "Déploiement réussi de Windows Server 2022 avec Active Directory",
    "Infrastructure AD opérationnelle",
    "Temps de gestion des comptes optimisé grâce à l'automatisation PowerShell",
    "Sécurité renforcée : stratégies de mots de passe",
    "Documentation complète permettant la reprise par n'importe quel admin système (en cours)",
  ],
};

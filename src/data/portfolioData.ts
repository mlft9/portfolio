// Configuration du portfolio - Personnalisez vos informations ici
export const portfolioData = {
  // Informations personnelles
  personal: {
    name: "Maxime Lefort",
    title: "Étudiant CPI — Administration Systèmes & Réseaux",
    description:
      "Étudiant en 2ème année de CPI, spécialisé en administration systèmes & réseaux. Je monte et maintiens des infras stables (Proxmox, Linux, Docker, VLAN, WireGuard…) et je cherche une alternance pour automatiser, sécuriser et optimiser des environnements en prod.",
    image: "/photo.jpg",
  },

  // Section À propos
  about: {
    text: "Actuellement en 2ème année de formation Coordinateur de Projet Informatique, je me spécialise dans l'administration des systèmes et réseaux. Passionné par les infrastructures IT, j'ai développé des compétences solides en gestion de serveurs Linux/Windows, virtualisation, conteneurisation et automatisation. À travers mes projets académiques et personnels, j'ai acquis une expérience pratique en déploiement d'environnements, supervision de services et sécurisation des systèmes. Je recherche activement une alternance en administration systèmes pour approfondir mes connaissances, contribuer à la gestion d'infrastructures critiques et participer à l'amélioration continue des environnements IT.",
  },

  // Projets
  projects: [
    {
      title: "Homelab Proxmox — Prod maison blindée & scalable",
      description:
        "Montage d’un homelab béton autour de Proxmox VE : cluster mono-nœud, LXC/VM optimisés, stockage ZFS, accès distant via WireGuard et Cloudflare Tunnel. L’infra héberge mes services critiques : Nextcloud, Vaultwarden, Pterodactyl, monitoring, reverse proxy, Wazuh, GitOps maison… Le tout durci, documenté, supervisé et pensé pour tenir en prod H24.",
      technologies: [
        "Proxmox VE",
        "Virtualisation KVM / LXC",
        "Cloudflare Tunnel",
        "Docker",
        "Infrastructure Réseau",
        "WireGuard VPN",
      ],
      detailId: "homelab",
    },
    {
      title:
        "Projet d'étude - fin de première année CPI : Chatbot IA pour stade de foot",
      description:
        "Création d'un chatbot IA capable de répondre aux questions des spectateurs lors des matchs de football. Utilisation de modèles de traitement du langage naturel pour comprendre et générer des réponses pertinentes. Ajout de réponses automatiques prédéfinies en base de données pour les questions courantes. Déploiement de l'application web avec Next.js et sécurisation avec des certificats SSL Let's Encrypt.",
      technologies: [
        "NodeJS",
        "Express",
        "OpenAI API",
        "Next.js",
        "Let's Encrypt",
        "Base de données SQL",
      ],
      github: "https://gitea.maximelefort.fr/maxime/projet-etude-chatbot",
    },
    {
      title: "Recréation self-hostée de GeoGuessr",
      description:
        "Déploiement d’une version self-hostée du jeu GeoGuessr, avec un backend Node.js/Express pour gérer les appels API Google Maps (Street View, géolocalisation, scoring) et un frontend React. L’ensemble tourne avec un reverse-proxy NGINX, le tout sécurisé, isolé et documenté pour un déploiement clean sur mon homelab.",

      technologies: ["NextJS", "Express", "NodeJS", "Google Maps API", "NGINX"],
      github: "https://gitea.maximelefort.fr/maxime/geoguessr-fr",
    },
  ],

  // Compétences par catégories
  skills: [
    {
      category: "Systèmes d'Exploitation",
      skills: [
        "Linux (Ubuntu, Debian, CentOS)",
        "Windows Server 2019/2022",
        "Active Directory",
        "Gestion des services systemd",
        "Bash scripting",
      ],
    },
    {
      category: "Réseaux & Sécurité",
      skills: [
        "TCP/IP",
        "VLAN",
        "DHCP",
        "DNS",
        "Firewall (iptables, pfSense)",
        "VPN (OpenVPN, WireGuard)",
        "SSH",
        "Certificats SSL/TLS",
      ],
    },
    {
      category: "Virtualisation & Conteneurs",
      skills: ["Proxmox VE", "VMware ESXi", "Docker", "Docker Compose", "LXC"],
    },
    {
      category: "Gestion de Projet",
      skills: [
        "Méthodologie Agile",
        "Documentation technique",
        "Ticketing (GLPI)",
        "Communication client",
        "Planning & organisation",
      ],
    },
  ],

  // Informations de contact
  contact: {
    email: "maxime.lefort@etik.com",
    linkedin: "https://www.linkedin.com/in/maxlft/",
    gitea: "https://gitea.maximelefort.fr/maxime",
  },
};

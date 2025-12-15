// Détails du projet Homelab
export const homelabProject = {
  title: "Homelab Proxmox",
  subtitle: "Infrastructure full prod, auto-hébergée & blindée",
  description:
    "Build d’un homelab complet autour de Proxmox VE pour héberger mes services critiques H24 : stockage cloud, mots de passe, monitoring, VPN, reverse proxy, hosting applicatif, etc. Le tout sur une infra documentée, segmentée, sécurisée, et pensée comme une prod réelle : VLAN, firewall, backups, supervision, CI/CD maison, haute stabilité.",

  technologies: [
    "Proxmox VE",
    "KVM / LXC",
    "Docker & Portainer",
    "Cloudflare Tunnel",
    "WireGuard",
    "Infra Réseau / VLAN",
    "Monitoring"
  ],

  sections: [
    {
      title: "Architecture & Infrastructure",
      content:
        "L’infra repose sur un serveur Proxmox VE avec VM + LXC optimisés, stockage SSD, snapshots réguliers. Déploiements rapides via templates cloud-init custom, ressources calibrées pour tenir en production, et configuration pensée pour encaisser les pannes sans tuer l’écosystème.",
      image: "/projects/infra.png",
    },
    {
      title: "Services Hébergés",
      content:
        "Le homelab tourne plusieurs briques essentielles : Nextcloud, Vaultwarden, Pterodactyl, Portainer, phpMyAdmin/MySQL, Nginx Proxy Manager, Wazuh, Gitea, Uptime Kuma, stack de monitoring, Minecraft Servers isolés, et différents containers Docker. Chaque service est soit en LXC avec optimisation, soit en stack Docker orchestrée depuis Portainer. Reload auto des projets via Webhooks Gitea + Portainer.",
      image: "/projects/services.png",
    },
  ],

  features: [
    "Infra virtualisée stable 24/7 via Proxmox VE",
    "ZFS ou SSD optimisé selon la machine, avec snapshots automatisés",
    "Reverse proxy full SSL automatique via Cloudflare & Nginx Proxy Manager",
    "Accès distant 100% sécurisé : WireGuard + Cloudflare Tunnel",
    "Déploiements auto via Gitea → Portainer",
    "Documentation et schémas d’archi à jour",
    "Infra scalable, ajout de services en quelques minutes",
  ],

  challenges: [
    "Calibrer les ressources pour héberger tous les services sans perte de perfs",
    "Éviter toute exposition directe de l’infra malgré les services publics",
    "Maintenir une documentation propre et suivie",
  ],

  results: [
    "Uptime > 99.5% depuis plusieurs mois",
    "Déploiement d’un nouveau service en < 20 minutes grâce aux templates",
    "Aucune exposition directe : tout passe via Cloudflare Tunnel",
    "Coût quasi nul comparé à du cloud public équivalent (économie ~30€/mois)",
    "Montée en compétences lourde en réseau, sécurité, virtualisation, Docker et CI/CD",
    "Infra évolutive prête pour ajouter VMs, containers ou même un 2e nœud Proxmox",
  ],
};

# todo

projet-devops/
├── app/                  # Code source de l'application
│   ├── app.js            # Fichier principal de l'application (Node.js)
│   ├── package.json      # Dépendances Node.js
│   ├── Dockerfile        # Fichier pour construire l'image Docker
│   └── test/             # Dossier pour les tests unitaires (si applicable)
│
├── infra/                # Infrastructure as Code (Terraform/Ansible)
│   └── terraform/        # Fichiers Terraform
│       └── main.tf       # Script de provisionnement
│
├── k8s/                  # Configuration Kubernetes
│   └── deployment.yaml   # Fichier YAML pour le déploiement K8s
│
├── Jenkinsfile           # Pipeline CI/CD (à la racine du projet)
│
├── README.md             # Documentation
└── .gitignore            # Fichiers à ignorer par Git

Lien du repositorie : https://github.com/sionlysion/todo
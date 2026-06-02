# MetaDropShip 🚀

Une plateforme de dropshipping moderne et complète construite avec Node.js, PostgreSQL et Prisma.

## 📋 Fonctionnalités

- ✅ Gestion complète des utilisateurs (Clients, Vendeurs, Admins)
- ✅ Catalogue de produits avec catégories et filtres
- ✅ Système de fournisseurs (Suppliers) avec gestion d'inventaire
- ✅ Panier et gestion des commandes
- ✅ Système de paiement (intégration Stripe prévue)
- ✅ Suivi des livraisons en temps réel
- ✅ Gestion de l'inventaire multi-fournisseurs
- ✅ Système d'avis et commentaires
- ✅ Support multi-devises
- ✅ Notifications et alertes

## 🛠️ Stack Technologique

- **Backend**: Node.js + Express
- **Language**: TypeScript
- **Base de données**: PostgreSQL
- **ORM**: Prisma
- **Frontend**: (À implémenter - React, Vue ou Angular)

## 📦 Structure du Projet

```
MetaDropShip/
├── prisma/
│   ├── schema.prisma          # Schéma de la base de données
│   └── migrations/            # Migrations Prisma
├── src/
│   ├── models/                # Modèles TypeScript
│   ├── routes/                # Routes API
│   ├── controllers/           # Contrôleurs
│   ├── middleware/            # Middlewares Express
│   ├── services/              # Services métier
│   ├── types/                 # Types TypeScript
│   └── index.ts               # Point d'entrée
├── .env.example               # Variables d'environnement exemple
├── package.json               # Dépendances NPM
├── tsconfig.json              # Configuration TypeScript
└── README.md                  # Ce fichier
```

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** 18+ 
- **PostgreSQL** 13+
- **npm** ou **yarn**

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/S3R3N1Ty4/MetaDropShip.git
cd MetaDropShip
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer la base de données**
```bash
# Créer le fichier .env
cp .env.example .env

# Éditer .env et ajouter votre URL PostgreSQL
# DATABASE_URL="postgresql://user:password@localhost:5432/metadropship?schema=public"
```

4. **Exécuter les migrations Prisma**
```bash
npm run prisma:migrate
```

5. **Générer le client Prisma**
```bash
npm run prisma:generate
```

6. **Démarrer le serveur en développement**
```bash
npm run dev
```

Le serveur démarrera sur `http://localhost:3000`

## 📊 Schéma de la Base de Données

### Entités Principales

#### 👥 **Users** (Utilisateurs)
- Clients, Vendeurs, Administrateurs
- Authentification et profil
- Adresses de livraison

#### 🏪 **Vendors** (Vendeurs)
- Boutiques en ligne
- Évaluations et vérifications
- Gestion des fournisseurs

#### 📦 **Products** (Produits)
- Catalogue produits
- Catégories
- Stocks et inventaire
- Évaluations clients

#### 🤝 **Suppliers** (Fournisseurs)
- Gestion des fournisseurs
- Délais de livraison
- Commandes minimales

#### 📋 **Orders** (Commandes)
- Gestion complète des commandes
- Statuts et suivi
- Paiements associés
- Articles de commande

#### 💳 **Payments** (Paiements)
- Traitement des paiements
- Multiple méthodes de paiement
- Remboursements

#### 🚚 **Shipping** (Livraison)
- Suivi des colis
- Numéros de suivi
- Statuts de livraison

#### ⭐ **Reviews** (Avis)
- Avis clients sur les produits
- Notations (1-5)
- Images d'avis

#### 🛒 **Cart** (Panier)
- Panier utilisateur
- Articles du panier

#### 🔔 **Notifications**
- Alertes utilisateur
- Notifications de commande

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev              # Démarrer le serveur en mode dev

# Build
npm run build            # Compiler le TypeScript

# Production
npm start                # Démarrer en production

# Prisma
npm run prisma:migrate   # Créer et exécuter les migrations
npm run prisma:generate  # Générer le client Prisma
npm run prisma:studio    # Ouvrir Prisma Studio (UI de la DB)
npm run prisma:seed      # Remplir la base avec des données de test
```

## 📚 Guide de Développement

### Utiliser Prisma Studio

Prisma Studio est une interface visuelle pour explorer et gérer votre base de données :

```bash
npm run prisma:studio
```

Cela ouvrira une interface web sur `http://localhost:5555`

### Créer une Migration

Quand vous modifiez le schéma `prisma/schema.prisma` :

```bash
npm run prisma:migrate
# Donner un nom à la migration
```

### Requêtes Prisma de Base

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer
await prisma.user.create({
  data: {
    email: 'user@example.com',
    password: 'hashedPassword',
    firstName: 'John',
    lastName: 'Doe'
  }
});

// Lire
await prisma.user.findUnique({ where: { email: 'user@example.com' } });

// Mettre à jour
await prisma.user.update({
  where: { id: 'user-id' },
  data: { firstName: 'Jane' }
});

// Supprimer
await prisma.user.delete({ where: { id: 'user-id' } });
```

## 🔐 Sécurité

### À Implémenter

- [ ] Authentification JWT
- [ ] Validation des entrées
- [ ] Protection CSRF
- [ ] Rate limiting
- [ ] Hachage des mots de passe (bcrypt)
- [ ] HTTPS
- [ ] Gestion des permissions

## 📈 Étapes Futures

- [ ] API REST complète avec Express
- [ ] Authentification et autorisation
- [ ] Tests unitaires et d'intégration
- [ ] Documentation Swagger/OpenAPI
- [ ] Frontend React
- [ ] Intégration Stripe pour les paiements
- [ ] Cache Redis
- [ ] Microservices
- [ ] Déploiement Docker
- [ ] CI/CD avec GitHub Actions

## 🤝 Contribution

Les contributions sont bienvenues ! N'hésitez pas à :

1. Fork le repository
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour des questions ou des problèmes, ouvrez une [Issue](https://github.com/S3R3N1Ty4/MetaDropShip/issues)

---

**Développé avec ❤️ par S3R3N1Ty4**

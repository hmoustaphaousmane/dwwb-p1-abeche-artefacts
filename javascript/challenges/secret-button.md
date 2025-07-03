# Le Bouton Secret

L'objectif de ce exercice est de créer une mini application web où **un seul** des boutons affichés permet de révéler un message caché — mais le piège est que : **le "bon" bouton change de position toutes les 5 secondes**, et **vous ne pouvez pas cliquer deux fois sur le même bouton**.

Travail à faire :

1. Génèrez dynamiquement **9 boutons** dans une grille 3x3.
2. L’un d’eux est désigné aléatoirement comme le **"bouton gagnant"** toutes les 5 secondes.
3. Si l’utilisateur clique sur le bon bouton (et ne l’a pas déjà cliqué), afficher un message de réussite.
4. Si l’utilisateur clique sur un mauvais bouton, désactivez-le et laissez-le réessayer.
5. Si l’utilisateur clique à nouveau sur un bouton déjà cliqué, rien ne se passe.
6. Après 3 mauvaises tentatives, bloquez le jeu et affiche un message d'echec.

## Règles

* Pas de variables globales sauf si c'est absolument nécessaire.
* Vous devez utiliser **du JavaScript pur (vanilla)** (pas de bibliothèques externes).
* Utilisez du **CSS** pour rendre le tout attrayant (mise en page en grille, effet au survol, etc.).
* Bonus : ajoutez un compte à rebours de 5 secondes.

## Hints

* Utilisez `setInterval()` pour changer l’index du bouton gagnant.
* Garde une trace des boutons déjà cliqués avec un tableau.
* Utilise les attributs `data-*` pour stocker des informations sur chaque bouton.

### Structure de base (HTML de départ)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Défi du Bouton Secret</title>
  <style>
    #grid {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 10px;
      margin-top: 30px;
    }
    button {
      height: 100px;
      font-size: 20px;
      cursor: pointer;
    }
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    #message {
      margin-top: 20px;
      font-size: 24px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Bouton Secret</h1>
  <div id="grid"></div>
  <div id="message"></div>

  <script>
    // Ton JavaScript ici !
  </script>
</body>
</html>
```

***Bon travail !!!***

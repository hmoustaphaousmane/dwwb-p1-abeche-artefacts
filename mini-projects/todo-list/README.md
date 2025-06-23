# Ma Première Application Web : Todo List

## Contexte et Objectifs

Dans ce mini-projet, vous allez créer votre première application web interactive ! Ce projet vous permettra de mettre en pratique ce que vous avez appris en HTML, CSS et JavaScript en créant une application de gestion de tâches (Todo List) que vous pourrez utiliser au quotidien et montrer fièrement à vos amis et à votre famille.

**Pourquoi ce projet ?**

- Il couvre tous les concepts essentiels du développement web abordés jusqu'ici.
- Vous verrez immédiatement le résultat de votre travail.
- C'est un projet utile que vous pouvez vraiment utiliser.
- Il vous prépare à des projets plus complexes.

## Prérequis

Afin de pouvoir aborder ce projet avec aisance, vous devrez avoir au préalable assimilé les notions suivantes (en JavaScript) :

- Les variables et types de données
- Les fonctions
- La structure conditionnelle `if/else`
- Le DOM
  - Sélectionner un élément du DOM
  - Manipuler le contenu d'un élément
  - Créer et ajouter un nouvel élément au DOM
- Les événements
- Les classes CSS avec JavaScript
- Les tableaux (particulièrement les méthodes des tableaux)
- Les objets (et leurs propriétés)
- Le concept de *template literals*
- Optionnellement :
  - Les callbacks (fonctions de rappel)
  - La déstructuration

Pour un aperçu de ces notions, vous pouvez consulter les bases du JavaScript [ici](../../javascript-basics.md).

## Ce que votre application doit faire

Votre application doit comporter les fonctionnalités suivantes.

### Fonctionnalités de Base

Pour commencer, vous devez impérativement implémenter les fonctionnalités de base ci-dessous.  
***NOTE :*** *Il est conseillé de bien maîtriser ces fonctionnalités avant de passer à l'étape suivante.*

1. **Ajouter une tâche** :
   - Un champ de texte pour saisir une nouvelle tâche
   - Un bouton "Ajouter" pour l'insérer dans la liste
   - Exemples de tâches : "Faire les courses", "Appeler maman"

2. **Afficher les tâches** :
   - Toutes les tâches s'affichent dans une belle liste
   - Chaque tâche a une case à cocher à gauche

3. **Modifier une tâche** :
   - Si vous vous trompez, vous pouvez cliquer sur "Éditer" pour corriger
   - Exemple : changer "Faire les course" en "Faire les courses"

4. **Supprimer une tâche** :
   - Cliquer sur "Supprimer" pour enlever une tâche
   - L'application demande "Êtes-vous sûr ?" pour éviter les erreurs

### Fonctionnalités Avancées (une fois les bases maîtrisées)

5. **Marquer comme terminée** :
   - Cocher la case lorsque la tâche est terminée
   - La tâche devient barrée et grisée

6. **Filtrer les tâches** :
   - Voir "Toutes" les tâches
   - Voir seulement celles "En attente"
   - Voir seulement celles "Terminées"

7. **Compteurs automatiques** :
   - Afficher combien de tâches il y a au total
   - Combien sont terminées et combien restent à faire

8. **Tout effacer** :
   - Un bouton pour supprimer toutes les tâches d'un coup

## Outils et Technologies

### Ce que vous allez utiliser

- **HTML** : Pour définir la structure de la page
- **CSS** : Pour la mise en forme (styliser et rendre votre application belle)
- **JavaScript** : Pour rendre votre application interactive

### Rien à installer

Vous avez déjà tout ce qu'il vous faut :

- Un navigateur web (Chrome, Firefox, etc.)
- Un éditeur de texte (VS Code de préférence)

### Structure de votre projet

```bash
mon-todo-list/
├── index.html          # La page principale (celle qui s'affiche)
├── style.css           # Les couleurs et la mise en forme
├── script.js           # La logique (ce qui fait fonctionner l'application)
└── README.md           # Vos notes et explications
```

## À quoi doit ressembler votre application

### L'apparence générale

Imaginez une application simple et claire avec :

- **Un titre** : "ToDo List" en haut de la page
- **Une zone de saisie** :

  - Une boîte de texte avec "Ajouter une nouvelle tâche"
  - Un bouton "Ajouter" à côté
- **Des onglets de filtre** :

  - "Toutes (0)" pour voir toutes les tâches
  - "En attente (0)" pour les tâches à faire
  - "Terminées (0)" pour les tâches accomplies
- **La liste des tâches** :

  - Chaque tâche a une case à cocher
  - Le texte de la tâche
  - Un bouton "Éditer" et un bouton "Supprimer"

### Les couleurs et le style

- Fond blanc ou couleur claire
- Bordure bleue (optionnelle) autour de l'application
- Les tâches terminées sont barrées et grises
- Tout est centré et bien aligné

## Comment procéder

Voici les étapes recommandées.

### Étape 0 : Créer un dossier pour le projet

- Créez un dossier avec un nom parlant (todo-list ou ma-todo-list par exemple).
- Ouvrez le dossier dans votre éditeur de texte préféré (VS Code ou autre).

### Étape 1 : La structure HTML

- Créez le fichier `index.html`
- Ajoutez le titre, le champ de texte, le bouton
- Créez la zone où vos tâches vont apparaître
- **Test :** Votre page s'affiche dans le navigateur (même si elle ne fait encore rien)

<!-- [Screen shot 1](./screen-shots/screen-shot1.png) -->
<center>
    <img src="./screen-shots/screen-shot1.png">
</center>

### Étape 2 : Le style CSS

Cette étape concerne la mise en forme de votre application. Pour cela :

- Créez le fichier `style.css`
- Centrez tout sur la page
- Ajoutez des couleurs et des bordures
- Rendez les boutons jolis
- **Test :** Votre page est plus belle, même si elle ne fonctionne pas encore

<center>
    <img src="./screen-shots/screen-shot2.png">
</center>

### Étape 3 : Le JavaScript de base

Maintenant que votre page est bien définie et stylisée, passons à l'ajout des tâches.

- Créez le fichier `script.js`
- Programmez l'ajout d'une nouvelle tâche
- Affichez les tâches dans la liste
- **Test :** Vous pouvez ajouter des tâches !

### Étape 4 : Fonctionnalités avancées

Ici, vous allez implémenter les fonctionnalités suivantes : cocher une tâche comme terminée, modifier, supprimer.

- Ajoutez la possibilité de cocher les tâches
- Implémentez les boutons "Éditer" et "Supprimer"
- **Test :** Votre application est entièrement fonctionnelle !

### Étape 5 : Les finitions

Pour finaliser :

- Ajoutez les filtres (Toutes, En attente, Terminées)
- Assurez-vous que les compteurs se mettent à jour automatiquement
- **Test :** Votre application est parfaite !

## Livrables

1. **Vos 4 fichiers** :

   - `index.html` (la page web)
   - `style.css` (les styles)
   - `script.js` (le code JavaScript)
   - `README.md` (les explications)

2. **Dans le README.md, indiquez** :

   - Une brève description de l'application
   - Comment ouvrir l'application
   - Les difficultés rencontrées
   - Ce dont vous êtes le plus fier
   - Les améliorations que vous aimeriez apporter

3. **Une application fonctionnelle** :

   - On doit pouvoir ouvrir `index.html` dans un navigateur
   - Toutes les fonctionnalités doivent fonctionner
   - L'application doit être agréable à utiliser

## Planning suggéré (allez à votre rythme !)

**Durée estimée : 2 à 3 jours** (mais prenez le temps nécessaire)

- **Jour 1** : HTML + CSS (la base)
- **Jour 2** : JavaScript (ajout, affichage, suppression)
- **Jour 3** : Finitions (filtres, compteurs, tests)

**Conseil :** Commencez petit ! Une application simple qui fonctionne vaut mieux qu'une application complexe qui ne fonctionne pas.

## Ressources

### Si vous êtes bloqué·e

- **MDN Web Docs** : Documentation officielle (en français)
- **W3Schools** : Tutoriels simples avec exemples
- **Stack Overflow** : Posez vos questions
- **YouTube** : Recherchez "todo list JavaScript débutant"

### Concepts importants à réviser

- **HTML** : `div`, `input`, `button`, `ul`, `li`
- **CSS** : `class`, `id`, sélecteurs, `display`, `color`
- **JavaScript** : variables, fonctions, DOM, événements

## Message de motivation

**Félicitations pour vous lancer dans ce projet !**

Rappelons-nous que tous les développeurs ont commencé par un petit projet comme celui-ci. Même les plus grands ont rencontré des difficultés avec leur première Todo List. Alors, l'important c'est de :

- **Prendre son temps** : Mieux vaut comprendre que d'aller vite
- **Tester souvent** : Après chaque modification, vérifiez que tout fonctionne
- **Ne pas avoir peur des erreurs** : Les bugs font partie de l'apprentissage, faites-en, corrigez-les
- **Être fier·e de son travail** : Chaque ligne de code est une victoire !

**Bon travail !**

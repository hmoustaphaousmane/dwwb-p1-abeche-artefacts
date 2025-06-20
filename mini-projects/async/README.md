# Guide pour débuter avec l'asynchrone

---

**Durée estimée :** 3-4 heures  
**Prérequis :** Bases de JavaScript (variables, fonctions, objets)  
**Objectif :** Comprendre la programmation asynchrone en JavaScript

---

## 1. Qu'est-ce que la programmation asynchrone ?

Imaginez que vous êtes dans une cuisine :

- **Synchrone** (une tâche après l'autre) :

    1. Je mets l'eau à bouillir
    2. J'attends qu'elle bouille (en ne faisant rien d'autre)
    3. Je coupe les légumes
    4. J'attends que les légumes cuisent
    5. Je prépare la sauce

- **Asynchrone** (plusieurs tâches en parallèle) :

    1. Je mets l'eau à bouillir
    2. Pendant qu'elle chauffe, je coupe les légumes
    3. Je lance la cuisson des légumes
    4. Pendant qu'ils cuisent, je prépare la sauce

La programmation asynchrone est un modèle de programmation que permet à un programme d'exécuter plusieur tâches à la fois. Grâce à l'asynchrone, lorsque le programme démarre l'exécution d'une instruction potentiellement longue, il ne va pas attendre la fin de cette instruction pour lancer l'exécution de la tâche suivante. Le programme exécute les tâches suivantes pendants que l'exécution de la tâche longue.

Elle est particulièrement utile pour les opérations qui nécessitent des E/S (comme le téléchargement de données à partir d'un service web) ou des calculs intensifs, car elle permet de maintenir une interface utilisateur réactive ou un service élastique.

En JavaScript, la programmation asynchrone est souvent implémentée à l'aide de promesses (promises), de callbacks ou de la syntaxe async/await. Ces mécanismes permettent au langage de rester réactif pendant l'exécution de tâches longues, comme le téléchargement de données à partir d'une API. Notons qu'à la base JavaScript est `one-threaded` (n'exécute qu'une tâche à la fois). Mais grâce aux mécanismes asynchron, on peut exécuter plusieur tâches à la fois.

### Pourquoi l'asynchrone est-il important ?

Dans le développement web, on est souvent amener à implémenter des fonctionnalités telles que :

- La récupération des données depuis un serveur
- L'attente d'une action (evènement) de l'utilisateur (par exemple clique ou survol)
- Le chargmenet des médias (images, videos, fichiers, ...)
- La sauvegarde des données

Sans l'asynchrone, ses fonctionnalités "figeraitent" le site web  pendant leurs exécutions. De ce fait, l'asynchone est important car il nous permet de rendre l'exécution de nos applications fluide, sans latence et d'assurer une meilleur expérience utilisateur.

### Application 1

Reproduisez le bout de code suivant et observer le comportement qui en résulte.

```javascript
// Code synchrone (bloquant)
console.log("Je commence à cuisiner");
// Imaginer que cette opération prend 3 secondes
console.log("J'attends que l'eau bouille...");
console.log("L'eau bout ! Je peux continuer");

// Avec setTimeout (asynchrone)
console.log("Je commence à cuisiner");
setTimeout(() => {
    console.log("L'eau bout ! Je peux continuer");
}, 3000);
console.log("Pendant ce temps, je coupe les légumes");
```

**Questions :**

- Quel ordre d'affichage obtenez-vous ?
- Pourquoi est-ce différent ?

---

## 2 Les Callbacks: première approche

### Qu'est-ce qu'un callback ?

Un **callback** (ou fonction de rappel) est une fonction qu'on passe en paramètre à une autre fonction et qui sera exécuter plus tard vous donnez à une autre fonction pour qu'elle l'exécute plus tard.

### **Exemple**

```javascript
// Une fonction qui prend du temps à s'exécuter
function preparerPlat(nomPlat, quandCestPret) {
    console.log(`Je prépare ${nomPlat}...`);
    
    // Simulation d'un délai de préparation
    setTimeout(() => {
        console.log(`${nomPlat} est prêt !`);
        quandCestPret(); // On "appelle" le callback
    }, 2000);
}

// Utilisation
preparerPlat("Riz sauté", function() {
    console.log("Merci, je vais la chercher !");
});
```

### **Application 2 : Créer votre premier callback**

Créez une fonction `telechargerFichier` qui simule le téléchargement d'un fichier. La foncton prendra en paramètre le nom du fichier et un callback. Pour simuler le temps de téléchargement, utiliser `setTimeout` avec un delais de 5 secondes. Quand le delais est écoulé, un message indiquant à l'utilisateur que le fichier a été téléchargé avec succès s'affiche dans la console pour aleter l'utilisateur que le fichier est déjà télécharger. Pour tester votre fonction, utiliser une fonction flechée qui affiche le message "Je peux maintenant utiliser nom du fichier !" comme callback (deuxième argument). Tous messages dans la console doivent utiliser l'interplation des chaînes de caractères grâce au string literals.

### Le problème du *"Callback Hell"*

Lorsqu'on enchaîne (imbrique) plusieurs opérations asychrone en utilisant des callbacks, nous sommes très rapidement confronté à un problème dû au fait qu'on se retrouve avec un code profondément imbriquée, difficile à lire et à maintenir. Ce problème est connu sous le nom de **callback hell** (*pyramide de la damnation* ou *enfer des callbacks*). Lorsqu'on est confronté à ce problème, la gestion des bugs (erreurs) devient un peu plus difficile car il faudra gérer des bugs à chaque niveau d'imbrication, ce qui alourdit encore plus le code. Mais pas d'inquiétude, les les **Promises** sont là pour sauver de cette situation.

```javascript
// Exemple du "Callback Hell" - difficile à lire !
telechargerFichier("fichier1.txt", function(fichier1) {
    console.log("Fichier 1 téléchargé");
    telechargerFichier("fichier2.txt", function(fichier2) {
        console.log("Fichier 2 téléchargé");
        telechargerFichier("fichier3.txt", function(fichier3) {
            console.log("Tous les fichiers sont téléchargés !");
            // Imagine encore plus de niveaux... 😵
        });
    });
});
```

---

## 3 : Les Promises - Une meilleure approche**

### Qu'est-ce qu'une Promise ?

Une **Promise** (promesse) est une opération asynchrone qui peut abouter à un resultat ou échouer avec une erreur.

Une Promise est dans un de ces états :

- *pending* (en attente) : état initial, la promesse n'est ni tenue, ni rompue ;
- *fulfilled* (tenue) : l'opération a réussi ;
- *rejected* (rompue) : l'opération a échoué avec une erreur.

Pour plus de détails consulter la documentation [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Créer votre première Promise

```javascript
// Créer une Promise
const maPromise = new Promise((resolve, reject) => {
    // Faire quelque chose d'asynchrone
    const reussit = Math.random() > 0.5; // 50% de chance de réussir
    
    setTimeout(() => {
        if (reussit) {
            resolve("🎉 Opération réussie !"); // Succès
        } else {
            reject("❌ Quelque chose s'est mal passé"); // Erreur
        }
    }, 2000);
});

// Utiliser la Promise
maPromise
    .then((message) => {
        console.log("Succès :", message);
    })
    .catch((erreur) => {
        console.log("Erreur :", erreur);
    });
```

### Application 3 : Convertir le callback en Promise

Transformer la fonction de téléchargement en utilisant les Promises.

### Méthodes utiles des Promises

#### Promise.all() - Attendre plusieurs Promises

```javascript
const promiseA = telechargerFichierPromise("fichierA.txt");
const promiseB = telechargerFichierPromise("fichierB.txt");
const promiseC = telechargerFichierPromise("fichierC.txt");

Promise.all([promiseA, promiseB, promiseC])
    .then((fichiers) => {
        console.log("Tous les fichiers téléchargés :", fichiers);
    })
    .catch((erreur) => {
        console.log("Au moins un téléchargement a échoué :", erreur);
    });
```

#### Promise.race() - La première qui se termine

```javascript
Promise.race([promiseA, promiseB, promiseC])
    .then((premierFichier) => {
        console.log("Premier fichier téléchargé :", premierFichier);
    });
```

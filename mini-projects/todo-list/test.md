# Test De Connaissanes

## Concepts de base

1. Variables & Types de données
    - Une variable est un espace mémoire associée à un nom qui stock une valeur succeptible d'être modifiée.

    - Déclaration de variable

    ```javascript
    let nom = "Toto";
    const age = 25;
    var ville = "Abeche"; // À éviter, préférer let/const
    ```

    - `let` vs. `var`

    Les variables déclarées avec `var` ont une porté globale. Elles sont accessibles dans tout le programme. Parcontre les variables declarées avec `const` ont une porté qui se limite exclusivement au bloc (`{}`) dans lequel elles ont été declarées.

    - Différence entre variable globale et locale

    La différence entre une variable locale et une variable globale réside dans leur portée, leur durée de vie et leur accessibilité. Une variable locale est déclarée à l'intérieur d'une fonction ou d'un bloc et n'est accessible que dans cette fonction ou ce bloc particulier. Par conséquent, elle n'existe que pendant l'exécution de cette fonction ou de ce bloc particulier et sa durée de vie est donc limitée à l'exécution de la fonction ou du bloc. Une variable globale est déclarée en dehors de toutes les fonctions et de tous les blocs et est disponible dans l'ensemble du programme, de sorte que sa durée de vie s'étend du début de l'exécution du programme jusqu'à sa fin. En résumé, une variable locale est confinée à l'intérieur d'une fonction ou d'un bloc et ne peut être accédée ou modifiée en dehors de la portée de la fonction ou du bloc, tandis qu'une variable globale est accessible partout dans le programme.

    - Types de données

    ```javascript
    let texte = "Hello";        // String
    let nombre = 42;            // Number  
    let estVrai = true;         // Boolean
    let liste = [1, 2, 3];      // Array
    let objet = {nom: "Paul"};  // Object
    ```

    - Le « hoisting » et « temporal dead zone » en JavaScript

    Le terme « hoisting » en JavaScript fait référence au comportement où les déclarations (variables, fonctions, classes, ...) sont déplacées vers le haut de leur portée. Il permet l'utilisation d'une variable/fonction avant sa déclaration. C'est particulièrement pertinent pour les variables déclarées avec `var` car elles ont une valeur initiale de `undefined` avant leur initialisation. Les variables déclarées avec `let` ou `const` sont également hissées (« hoisted ») mais ne sont pas initialisées, donc y accéder avant leur déclaration conduit à une « temporal dead zone » et résulte en une `ReferenceError`.

    Le terme de « temporal dead zone » (ou zone morte temporelle) en JavaScript désigne l'endroit où une variable déclarée avec `let`, `const`, ou `class` est placée depuis le début du bloc jusqu'à ce que l'exécution du code atteigne sa déclaration et son initialisation. Comme mentionné ci-dessus, toute tentative d'accès à la variable alors qu'elle se trouve dans la zone morte temporelle, résultera en une `ReferenceError`.

2. Les fonctions

    - Déclaration de fonction

    ```javascript
    function direBonjour() {
        console.log("Bonjour !");
    }
    ```

    - Fonction avec paramètres

    ```javascript
    function additionner(a, b) {
        return a + b;
    }
    ```

    - Fonction fléchée (optionnel mais utile)

    ```javascript
    const multiplier = (x, y) => x * y;
    ```

3. La stucture conditionnelle `if/else`

    ```javascript
    let tache = "";

    if (tache === "") {
        alert("Veuillez saisir une tâche !");
    } else {
        console.log("Tâche ajoutée : " + tache);
    }

    // Opérateur ternaire (bonus)
    let message = tache ? "Tâche valide" : "Tâche vide";
    ```

4. Selectionner un élément du DOM

    - Sélection par ID

    ```javascript
    const bouton = document.getElementById("monBouton");
    const input = document.getElementById("champTexte");
    ```

    - Sélection par classe

    ```javascript
    const elements = document.getElementsByClassName("maClasse");
    ```

    - Sélecteurs CSS (plus moderne)

    ```javascript
    const element = document.querySelector("#monId");
    const tous = document.querySelectorAll(".maClasse");
    ```

5. Manipulation du contenu

    - Changer le texte

    ```javascript
    element.textContent = "Nouveau texte";
    element.innerHTML = "<strong>Texte en gras</strong>";
    ```

    - Changer les attributs

    ```javascript
    input.value = "nouvelle valeur";
    image.src = "nouvelle-image.jpg";
    ```

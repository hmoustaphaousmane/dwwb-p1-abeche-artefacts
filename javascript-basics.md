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

2. Les stuctures conditionnelles (`if`, `if/else`, `switch/case`)

    Les strucutres conditionelles sont des structures de base en programmation qui permettent d'exécuter un bloc de code suivant une condition.

    - `if`

        La structure conditionnelle `if` exécute un bloc de code si un conditin est vérifier. Les intructions définis dans le bloc de code de `if` ne sera donc exécuter que si la condition qu'on lui passe en parmettre est évaluée à `true` (vrai).

        ```mermaid
        flowchart LR
        ID1[Début]
        ID1 --> ID2{Condition?}
        ID2 -- True --> ID3[Exécuter le bloc]
        ID2 -- False --> ID4[End]
        ID3 --> ID4[End]
        ```

        ```javascript
        let name = "ali";

        if (name === "ali") {
            console.log("Bonjour", name);
        }
        ```

    - `if/else`

        Cette structure permet d'exécuter un premier bloc de code si la condition retourne `true` ou un autre bloc de code au cas contraire. Donc, si la condition dans le `if` est vraie le bloc du `if` sera exécuté sinon le bloc du `else` sera exécuter.

        ```mermaid
        flowchart LR
        ID1[Début]
        ID1 --> ID2{Condition?}
        ID2 -- true --> ID3[Exécuter le bloc du if]
        ID2 -- False --> ID4[Exécuter le bloc du else]
        ID3 --> ID5[End]
        ID4 --> ID5[End]
        ```

        ```javascript
        let tache = "";

        if (tache === "") {
            alert("Veuillez saisir une tâche !");
        } else {
            console.log("Tâche ajoutée : " + tache);
        }
        ```

    - `switch/case`

        La stucture conditionnelle `switch/case` permet d'exécuter une suite d'instruction suivant la valeur d'une variable `case`. Elle permet de gérer les conditions multiples de manière plus lisible et structurée. Son fonctionnment est le suivant: on passe en paramètre à `switcht` la variable à évaluer, pour chaque cas `case` de figure (chaque valeur que peut prendre la variable), on exécute les intructions dans le bloc correspondant. Pour terminer, dans chaque `case` on met l'intruction `break` qui permet sortir de l'instruction switch. Si la valeur prise par la variable ne corredpond à aucune clause `case`, le programme va exécuter les instructions qui se trouve dans la clause optionnelle `default`. Cette clause est utilisée en dernier recours mais si elle n'est pas définie, le programme continue son exécution après l'instruction switch (sans exécuter aucune des intructions dans les clauses `case` bien-sûr).

        ```mermaid
        flowchart TD
        A[Début] --> B[Évaluer l'expression]
        B --> C{case?}
        C -->|Oui| D[Exécuter les instructions du bloc correspondant]
        D --> E{break?}
        E -->|Oui| F[Quitter l'instructin switch]
        E -->|Non| G[Continuer au case suivant]
        G --> C
        C -->|Aucune correspondance & pas de default| F
        C -->|Non, tester le case suivant| C
        C -->|Aucune correspondance mais la clause default existe| H[Exécuter le code du default]
        H --> F
        F --> I[Fin]
        ```

        ```javascript
        const ponctuation = ";"

        switch (ponctuation) {
            case ",":
                console.log("C'est une virgule.");
                break;
            case ";":
                console.log("C'est un point-virgule.");
                break;
            case ":":
                console.log("Ce sont deux-points.");
                break;
            case ".":
                console.log("C'est un point.");
                break;
            case "...":
                console.log("Ce sont des point de suspensions.");
                break;
            case "?":
                console.log("C'est un point d'interrogation.");
                break;
            case "!":
                console.log("C'est un point d'exclamation.");
                break;
            default:
                console.log("C'est n'est un signe de ponctuation.");
                break;
        }

        console.log("Instruction après swith");
        ```

    - L'opérateur ternaire (ternary operator)

        ```javascript
        // Opérateur ternaire (bonus)
        let message = tache ? "Tâche valide" : "Tâche vide";
        ```

3. Les fonctions

    Une fonction est un bloc (bout) de code qui exécute une tâche spécifique et qui peut être appelé plusieurs fois. Elle permet d'encapsuler un ensemble de tâches ou instructions fréquentes ou qui se repètent pour de fin de réutilisabilité et d'organisation. On peut dire que c'est un sous-programmme qui peut être appellé par un autre code du programme ou par lui-même dans le cas de la récursivité.

    - Déclaration de fonction

        En JavaScript, on peut déclarer ou définir une fonstion en utilisant l'un des deux synthaxes suivants:

        - Le mot clé `function`

        ```javascript
        function nomFonction() {
            // corps de la fonction
        }
        ```

        - Fonction fléchée

        ```javascript
        const nomFonction = () => {
            // corps de la fonction
        };
        ```

    - Fonction avec paramètres

        Une fonction peut prendre des valeurs en paramètre (argument) pour effectuer des traîtements éventuels sur ces valeurs. Les arguments d'une fonction sont placés dans les parenthèses qui suivent le nom de la fonction dans sa décalration.

        ```javascript
        function nomFonction(params) {
            // corps de la fonction
        }
        ```

    - Valeur de retour

        Une fonctions peut retourner également un resultat qui est appellé valeur de retour.

        ```javascript
        // une fonction que prend en paramètre deux nombres et retourne leur somme.
        const addition = (x, y) => {
            return x + y;
        }
        ```

4. Le DOM (Document Object Model) en JavaScript

    Le DOM est une interface de programmation (API) qui permet de représent les documents HTML (et XML) en un structure arborescente où chaque éléement du document est un nœud. JavaScript permet de manipuler ces nœud (éléments) pour rendre nos pages web dynamiques.

    ```mermaid
    graph TD
    A[document] --> B[html]
    B --> C[head]
    B --> D[body]
    C --> E[title]
    C --> F[meta]
    D --> G[h1]
    D --> H[p]
    D --> I[div]
    I --> J[ul]
    J --> K[li]
    J --> L[li]
    ```

    - Sélection un élément du DOM

        Javascript offre plusieur méthodes pour selectionner les éléments du DOM.

        - Sélection par ID: On peut sélectionner un élément par son identifiant en uitlisant la méthode `getElementById()`.

        ```javascript
        const bouton = document.getElementById("monBouton");
        const input = document.getElementById("champTexte");
        ```

        - Sélection par classe: La méthode `getElementsByClassName()` nous permet de sélctionner les éléments par leur classe. Elle prend en paramètre une classe et retourne une collection (liste) de tous les éléments qui ont cette classe.

        ```javascript
        const elements = document.getElementsByClassName("maClasse");
        ```

        - Sélecteurs CSS: Plus moderne, on sélection un(plusieurs) élément(s) par son sélecteur CSS grâce aux méthodes `querySelector()` et `querySelectorAll()`. Tous deux prennent en paramètre un sélecteur CSS. `querySelector()` retourne la première occurence d'élément ayant le sélecteur spécifié alors que `querySelectorAll()` retourne une collection de tous les éléments ayant le sélecteur.

        ```javascript
        const element = document.querySelector("#monId");
        const tous = document.querySelectorAll(".maClasse");
        ```

    - Manipulation du contenu

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

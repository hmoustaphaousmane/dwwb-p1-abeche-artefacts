# Test De Connaissanes

## Concepts de base

1. Variables & Types de données

    - Déclaration de variabel

    ```javascript
    let nom = "Toto";
    const age = 25;
    var ville = "Abeche"; // À éviter, préférer let/const
    ```

    - Types de données

    ```javascript
    let texte = "Hello";        // String
    let nombre = 42;            // Number  
    let estVrai = true;         // Boolean
    let liste = [1, 2, 3];      // Array
    let objet = {nom: "Paul"};  // Object
    ```

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

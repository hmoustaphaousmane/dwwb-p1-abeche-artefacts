# MongoDB - Challenges

## Challenge 1 : Création d’une base de données MongoDB et opérations CRUD

**Objectif :** Mettre en œuvre les opérations CRUD (Create, Read, Update, Delete) sur une base de données MongoDB représentant un catalogue de produits d’une boutique informatique.

1. Créez et sélectionnez une base de données nommée *info*.
2. Créez une collection nommée *produits*.
3. Insérez les documents suivants dans la collection `produits` (utiliser la méthode `inserOne()`)

    - Produit 1 :

    ```json
    {
      "nom": "Macbook Pro",
      "fabriquant": "Apple",
      "prix": 11435.99,
      "options": [
        "Intel Core i5",
        "Retina Display",
        "Long life battery"
      ]
    }
    ```

    - Produit 2 :

    ```json
    {
      "nom": "Macbook Air",
      "fabriquant": "Apple",
      "prix": 125794.73,
      "ultrabook": true,
      "options": [
        "Intel Core i7",
        "SSD",
        "Long life battery"
      ]
    }
    ```

    - Produit 3 :

    ```json
    {
      "nom": "Thinkpad X230",
      "fabriquant": "Lenovo",
      "prix": 114358.74,
      "ultrabook": true,
      "options": [
        "Intel Core i5",
        "SSD",
        "Long life battery"
      ]
    }
    ```

4. Insérez en une seule commande les 5 produits supplémentaires suivants en utilisant la méthode `insertMany()`

    ```json
    [
      {
        "nom": "Dell XPS 13",
        "fabriquant": "Dell",
        "prix": 135000.00,
        "ultrabook": true,
        "options": ["Intel Core i7", "Touchscreen", "SSD"]
      },
      {
        "nom": "HP Envy 15",
        "fabriquant": "HP",
        "prix": 95000.00,
        "options": ["Intel Core i5", "SSD", "Long life battery"]
      },
      {
        "nom": "Asus ZenBook",
        "fabriquant": "Asus",
        "prix": 123999.99,
        "ultrabook": true,
        "options": ["AMD Ryzen 7", "Retina Display"]
      },
      {
        "nom": "Acer Aspire 7",
        "fabriquant": "Acer",
        "prix": 78500.50,
        "options": ["Intel Core i5", "SSD"]
      },
      {
        "nom": "Thinkpad X1 Yoga",
        "fabriquant": "Lenovo",
        "prix": 1232324,
        "ultrabook": true,
        "options": ["Intel Core i7", "SSD", "Long life battery"]
      },
      {
        "nom": "Microsoft Surface",
        "fabriquant": "Microsoft",
        "prix": 144999.99,
        "ultrabook": true,
        "options": ["Intel Core i7", "Touchscreen", "SSD", "Pen Support"]
      }
    ]
    ```

5. Récupérez tous les produits de la collection.
6. Récupérez le premier produit de la collection.
7. Recherchez le document dont le champ *nom* est "Thinkpad X230" et affichez uniquement son *_id*.
8. Utilisez cet identifiant (*_id*) pour retrouver précisément ce produit.
9. Récupérez les produits dont le *prix* est strictement supérieur à 13723.
10. Affichez le premier produit dont le champ *ultrabook* est égal à true.
11. Affichez tous les produits triés :
    - par *prix* croissant (ascendant),
    - puis par *nom* décroissant (descendant).
12. Mettez à jour le prix du `Macbook Air` à la valeur 132000.00.
13. Supprimez tous les produits dont le fabriquant est `Apple`.
14. Supprimez le `Thinkpad X230` en utilisant uniquement son identifiant (_id).
15. Mettre à jour tous les produits `Lenovo` en ajoutant un champ `garantie: "2 ans"`.
16. Ajouter un champ stock à chaque produit avec une valeur aléatoire entre 10 et 50.
17. Exportez la collection produits au format JSON à l’aide de la ligne de commande avec `mongoexport`.

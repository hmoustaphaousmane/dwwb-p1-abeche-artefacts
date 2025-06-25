// console.log("Bonjour");
// setTimeout(() => {
//     console.log("J'attend");
// }, 5000);
// console.log("Au révoir");

// // Une fonction qui prend du temps à s'exécuter
// function preparerPlat(nomPlat, quandCestPret) {
//     console.log(`Je prépare ${nomPlat}...`);

//     // Simulation d'un délai de préparation
//     setTimeout(() => {
//         console.log(`${nomPlat} est prêt !`);
//         quandCestPret(); // On "appelle" le callback
//     }, 2000);
// }

// // Utilisation
// preparerPlat("Pizza", function() {
//     console.log("Merci, je vais la chercher !");
// });

let xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
let get = "GET";
let post = "post";

let data = "title=Post%20Title&body=Body";
xhr.open(get, url);
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(JSON.parse(xhr.response)[0]);
    } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
    console.error("Erreur");
}
}

xhr.send()

xhr.open(post, url);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
        console.log(JSON.parse(xhr.responseText));        
    } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 201) {
        console.erro("Erreur"); 
    }
}

xhr.send(data);
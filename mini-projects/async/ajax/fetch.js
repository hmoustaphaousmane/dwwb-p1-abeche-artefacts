const url = "https://jsonplaceholder.typicode.com/posts";
const data = "title=Post%20Title&body=Body";

// GET request
fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Erreur");
    return response.json();
  })
  .then(json => {
    console.log(json[0]);
  })
  .catch(error => {
    console.error(error.message);
  });

// POST request
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: data
})
  .then(response => {
    if (response.status !== 201) throw new Error("Erreur");
    return response.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(error => {
    console.error(error.message);
  });

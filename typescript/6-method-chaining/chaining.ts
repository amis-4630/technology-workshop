
fetch("https://api.randomuser.me/")
    .then(response => response.json())
    .then(json => json.results)
    .then(console.log)
    .catch(console.error);
const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
  response.send(`Welcome to our very plain site.`);
});

app.get(`/about`, (request, response) => {
  response.send(`It a cold dark rainy day in Pizzaville.`);
});

app.listen(4000, () => console.log(`Listening on port 4000`));
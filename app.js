const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
  response.send(`Welcome to our very plain site.`);
});

app.get(`/about`, (request, response) => {
  response.send(`It a cold dark rainy day in Pizzaville.`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const url = require("url");
const querystring = require("querystring");
// const Article = require("./models").Article;
const port = 3000;

let books = [
  { id: "1", name: "Republic", price: "15.00" },
  { id: "2", name: "MetaPhysics", price: "18.00" },
  { id: "3", name: "Utopia", price: "5.00" },
  { id: "4", name: "Critique of Practical Reason", price: "25.00" },
  { id: "5", name: "Dialogues Concerning Natural Religion", price: "20.00" },
  {
    id: "6",
    name: "Discours on Method, Meditations and Principles",
    price: "19.00",
  },
  { id: "7", name: "The Monadolohgy", price: "11.00" },
  { id: "8", name: "Ethics", price: "45.00" },
  { id: "9", name: "The Search After Truth", price: "22.00" },
  { id: "10", name: "Two Treatises of Government", price: "16.00" },
];

var countbook = new Array();

function contains(searchItem, i) {
  try {
    return this.filter(
      (x) =>
        x[Object.keys(x)[i]]
          .toLocaleLowerCase()
          .indexOf(searchItem.toLocaleLowerCase()) !== -1
    );
  } catch (error) {
    return -1;
  }
}

app.get("/book", (req, res) => res.json(books));

app.get("/book/:id", (req, res) => {
  let bookId = req.params.id - 1;
  let book = books[bookId];
  res.send(book);
});

app.get("/books/search", (req, res) => {
  let query = req.query.name.toLocaleLowerCase();
  res.send(
    books.filter((x) => x.name.toLocaleLowerCase().indexOf(query) !== -1)
  );

  // const queryObject = req.query.name;
  // var result = books.contains(queryObject, 1);
  // res.send(books);
});

app.get("/book/count/:count", (req, res) => {
  let count = req.params.count;
  for (let i = 0; i < count; i++) {
    countbook.push(books[i].id, books[i].name, books[i].price);
  }
  res.send(countbook);
});

app.listen(port, () => console.log(`Example app listening on port port!`));

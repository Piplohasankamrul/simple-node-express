const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Wow this is my First Node Projects.");
});

const users = [
  { id: 0, name: "Dina", email: "dina@gmail.com", phone: "0197778676" },
  { id: 1, name: "Diana", email: "Diana@gmail.com", phone: "0195565676" },
  { id: 2, name: "Dozzy", email: "Dozz@gmail.com", phone: "0197634476" },
  { id: 3, name: "Dintony", email: "Dintony@gmail.com", phone: "019998676" },
  { id: 4, name: "Dalia", email: "Dalia@gmail.com", phone: "0197223676" },
  { id: 5, name: "Dilsana", email: "Dilsana@gmail.com", phone: "0199066776" },
  { id: 6, name: "Dompia", email: "Dompia@gmail.com", phone: "01233248676" },
  { id: 7, name: "Despina", email: "Despina@gmail.com", phone: "0198752676" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("Post Hitting", req.body);
  // res.send(JSON.stringify(newUsers));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "orange", "banana", "Malta"]);
});
app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Fazli tak amam");
});
app.listen(port, () => {
  console.log("listening on port: " + port);
});

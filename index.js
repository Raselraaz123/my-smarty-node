const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World I am comming with node  kama jon");
});

const users = [
  {
    id: 1,
    name: "mamun",
    age: 26,
    email: "mamun123@gmail.com",
    phone: "017690000",
  },
  {
    id: 2,
    name: "alamin",
    age: 27,
    email: "alamin1gg23@gmail.com",
    phone: "013690000",
  },
  {
    id: 3,
    name: "jalal",
    age: 25,
    email: "jalal12883@gmail.com",
    phone: "018690004440",
  },
  {
    id: 4,
    name: "Roman",
    age: 24,
    email: "Roman125583@gmail.com",
    phone: "019690000",
  },
  {
    id: 5,
    name: "Rasel",
    age: 34,
    email: "Rasel1583@gmail.com",
    phone: "0176390000",
  },
  {
    id: 6,
    name: "Kamal",
    age: 46,
    email: "Kamal1253@gmail.com",
    phone: "01767890000",
  },
  {
    id: 7,
    name: "momin",
    age: 16,
    email: "momin1293@gmail.com",
    phone: "017634490000",
  },
  {
    id: 8,
    name: "momin1",
    age: 78,
    email: "momin129553@gmail.com",
    phone: "017634490",
  },
];

// app.get('/users', (req, res) => {
//   res.send(users)
// })

app.get("/users", (req, res) => {
// filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(matched)
  }
  else {
    
    res.send(users)
  }
});



app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id)
  res.send(user)
});


app.post('/user', (req, res) => {
  console.log('request', req.body);
  const user = req. body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
})




app.get('/fruits', (req, res) => {
  res.send(['mango', 'apple', 'oranges'])
});

app.get('/mango/tast/misty', (req, res) => {
  res.send('maja onak fojli am')
})

app.listen(port, () => {
  console.log(` listening on port `,port);
});
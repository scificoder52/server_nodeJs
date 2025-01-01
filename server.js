// // console.log('Server-side code running');
// // var add=(a,b)=>a+b;
// // console.log(add(2,3));

// // var fs = require("fs");
// // var os = require("os");

// // var user = os.userInfo();
// // console.log(user.username);

// // fs.appendFile("greetings.txt", `Hello` + user.username + `!`, () => {
// //   console.log("Data appended to file");
// // });

// // const notes=require('./notes.js');
// // console.log(notes.age);

// var _ = require("lodash");

// var data=["person","person",1,5,2,4,5,"1"];

// var filter=_.uniq(data);
// console.log(filter);

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World how are you?");
});

app.get("/menu", (req, res) => {
  var menu_list = { menu1: "chicken", menu2: "mutton", menu3: "fish" };

  res.send(menu_list);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

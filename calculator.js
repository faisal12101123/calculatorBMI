const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The calculation is "+result);
});

app.get("/bmiCal", function(req, res){
  res.sendFile(__dirname + "/bmiCal.html");
});

app.post("/bmiCal", function(req, res){

  var n1 = parseFloat(req.body.n1);
  var n2 = parseFloat(req.body.n2);
  var bmi = n2 / (n1*n2);
  res.send("Your BMI is "+bmi);
});

app.listen(3000, function(){
  console.log("Started in port 3000");
});

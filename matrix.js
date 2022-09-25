
const express = require("express");
const app = express();
const port = process.env.port || 8080;

const HTML_BLANK = "<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Oh My God</title> </head><body> OURTABLEHEARE </body></html>"

function rand50() {
  return Math.floor(Math.random() * 10) & 1;
}
function rand75() {
  return rand50() | rand50();
}
function generateColors() {
  let arr = []
  const randNum = Math.floor(Math.random() * 256) 
  for (let i = 0; i < randNum; i++) {
    arr.push(rand75())
  }
  const available = 256 - randNum;
  for (let i = 0; i < available; i++) {
    arr.push(2)
  }
  return arr
}
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function createTable(colorArr) {
  let k = 0;
  let table = "<table border='10' width = 700px height = 700px align='center'>"
  for (let i = 0; i < 16; i++) {
    table += "<tr>"
    for (let j = 0; j < 16; j++) {
      if (colorArr[k] == 0)
        table += "<td align='center' colspan='1' style=background-color:blue> </td> "
      else if (colorArr[k] == 1)
        table += "<td align='center' colspan='1' style=background-color:Green> </td> "
      else
        table += "<td align='center' colspan='1' style=background-color:Brown> </td> "
      k++;
    }
    table += "</tr>"
  }
  table += "</table>"
  const HTML = HTML_BLANK.replace('OURTABLEHEARE', table)
  return HTML
}

app.get("/", (req, res) => {
  let colors = generateColors();
  shuffle(colors)
  let board = createTable(colors)
  res.send(board)
});
app.listen(port, err => {
  if (err) {
    return Console.log("Error", err);

  }
  console.log(`Listening on port ${port}`);
});
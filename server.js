
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));

let left_g = 0, top_g = 0;

const port = process.env.port || 8080;

const phoenix = `<img src='http://localhost:${port}/images/phoenix.jpg' style="width: 200%;; height: 230%;" />`

const TD_STYLE = "style='position: absolute; width: 49px; height: 50px'"
const HTML_BLANK = "<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Oh My God</title> </head><body> OURTABLEHEARE </body></html>"

function createTable(n, left = 1, top = 1) {

  console.log("TABLE", left, top)
  let table = "<table border='10' width = 30% height = 500px align='center'>"
  for (let i = 0; i < n; i++) {
    table += "<tr>"
    for (let j = 0; j < n; j++) {
      if (i == top - 1 && j == left - 1)
        table += `<td align='center' colspan='1' ${TD_STYLE}> ${phoenix} </td>`
      else
        table += "<td align='center' colspan='1'> </td>"
    }
    table += "</tr>"
  }
  table += "</table>"

  const HTML = HTML_BLANK.replace('OURTABLEHEARE', table)

  return HTML
}


function movePhoenix(left, top, n) {
  if (isNaN(left) || isNaN(top) || left > n || left <= 0 || top > n || top <= 0) {
    const HTML = createTable(n)
   // console.log(HTML)
    return HTML
  }
  else {
    const HTML = createTable(n, left, top)
    return HTML
  }
}

app.get("/", (req, res) => {
  let top = req.query['top'] * 1
  let left = req.query['left'] * 1
  left_g += left
  top_g += top

  if (left_g % 4 == 0){
    left_g = left_g - left + 1;
  }
  else {
    left_g %= 4;
  }
  if (top_g % 4 == 0) {
    top_g = top_g - top + 1;
  }
  else {
    top_g %= 4;
  }
  const board = movePhoenix(left_g, top_g, 4)
  res.send(board)
});
app.listen(port, err => {
  if (err) {
    return Console.log("Error", err);

  }
  console.log(`Listening on port ${port}`);
});
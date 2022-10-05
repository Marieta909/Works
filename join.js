const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.port || 8080;
app.use(cors())
app.get('/', (req, res) => {
  let h = req.query['height'] * 1
  let w = req.query['width'] * 1
  let arr = []
  for(let i=0; i<h * w;i++){
    arr.push(Math.floor(Math.random() * 7));
  }   
  res.end(JSON.stringify(arr));
  });

    app.listen(port, err => {
      if (err) {
        return Console.log("Error", err);
      }
      console.log(`Listening on port ${port}`);
    });
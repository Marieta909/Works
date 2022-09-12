import express from "express";
import path from 'path';
const app = express();
const port=process.env.port || 8080;
app.use("/images", express.static('images'));
app.get("/images/:img", (req,res) => {
  let img= req.params["img"];
  res.sendFile(path.join(`/BFF/images/:img`)); 
  console.log(img);
});
app.listen (port, err  => {
  if (err) {
   return Console.log("Error", err);
  }
  console.log(`Listening on port ${port}`);
});

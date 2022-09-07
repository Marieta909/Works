import express from "express";
import path from "path";
const app = express();
const port=process.env.port || 8080;

app.get("/", (req,res) => {
  res.sendFile(path.resolve("BFF/Friendship.html")); 
});
app.listen (port, err  => {
  if (err) {
   return Console.log("Error", err);
  }
  console.log(`Listening on port ${port}`);
});

import express from "express";
const app = express();
const port=process.env.port || 8080;

function factorial(num) {
  if(num==0) {
    return 1;
  }
  else 
     return num*factorial(num-1)
}

app.get("/:number", (req,res) => {
  let num = req.params["number"];
  let factorial_num=factorial(parseInt(num));
  console.log(factorial_num)
  res.send(factorial_num.toString());
  
});
app.listen (port, err  => {
  if (err) {
   return Console.log("Error", err);
  
  }

  console.log(`Listening on port ${port}`);
});

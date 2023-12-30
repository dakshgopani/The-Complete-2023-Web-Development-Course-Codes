import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
//   "June 24, 2023" sample date
  const day = today.getDay();
  //   console.log(day);

  let type = " a weekday ";
  let adv = " It's time to work hard ";

  if(day===0 || day===6){
    type=" the weekend ";
    adv=" It's time to rest and have some fun ";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
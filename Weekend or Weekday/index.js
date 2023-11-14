import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

// const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// const weekend = ['Saturday', 'Sunday']


const date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDayOfWeek = daysOfWeek[date.getDay()];

let weekDay = daysOfWeek['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let weekEnd = daysOfWeek['Saturday', 'Sunday'];

let type = " a weekday. It's time to work hard"

if(weekEnd === currentDayOfWeek){
  type = " the weekend. It's time to have some fun";
}


app.get("/", (req, res) => {
    res.render("index.ejs",
    {
      dayType: type
    });
  });
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
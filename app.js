const express = require("express");
const port = 4000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/bfhl", (req, res) => {
    const body = req.body;
    const data = body.data;
    // res.json(data);
    const numbers = [];
    const alphabets = [];
    const highest_lowercase_alphabet = [];
    let alpha = null;
    for(let i of data){
        const num = isNumeric(i)
        if(num){
            alphabets.push(i);
            alpha = i;
        }
        else{
            numbers.push(i);
            if(i.toLowerCase()==i) alpha = i;
        }
    }
    if(alpha) highest_lowercase_alphabet.push(alpha);
    const result = {"is_success":true,"user_id": "john_doe_17091999","email" : "john@xyz.com","roll_number":"ABCD123",numbers,alphabets,highest_lowercase_alphabet};
    res.json(result);


});

app.get("/",(req,res)=>{
    res.json({"operation_code":1});
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

function isNumeric(str) {
    return !isNaN(Number(str));
  }

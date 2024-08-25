const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());

// Root route to send a simple message
app.get("/bfhl", (req, res) => {
 res.json( {"operation_code":1})
});

// Route for the /bfhl POST request
app.post("/bfhl", (req, res) => {
  const body = req.body;
  const data = body.data;
  
  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = null;
  
  for (let i of data) {
    if (isNumeric(i)) {
      numbers.push(i);
    } else {
      alphabets.push(i);
      if (i.toLowerCase() === i && (highestLowercaseAlphabet === null || i > highestLowercaseAlphabet)) {
        highestLowercaseAlphabet = i;
      }
    }
  }

  const result = {
    "is_success": true,
    "user_id": "john_doe_17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123",
    "numbers": numbers,
    "alphabets": alphabets,
    "highest_lowercase_alphabet": highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  };

  res.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Helper function to check if a string is numeric
function isNumeric(str) {
  return !isNaN(Number(str));
}

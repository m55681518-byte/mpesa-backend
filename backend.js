const express = require("express");
const app = express();

// Use environment PORT or default 3000
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.send("Backend is working!")
});

app.listen(port, () => {
 console.log(`Server running on port $ {port}`);
});

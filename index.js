const express = require('express')
const app = express()

app.use(express.json());

// const port = 3000
require("dotenv").config();
const env = process.env;
const port = env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log("Server running on port:", process.env.PORT);
    console.log(`Example app listening on port ${env.PORT}`)
    console.log(`Example app listening on port ${port}`)
});
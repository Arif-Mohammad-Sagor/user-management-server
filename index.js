const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("My User Management  Server is Running");
});

app.listen(port, (req, res) => {
    console.log(`my server is running on port :${port}`);
})
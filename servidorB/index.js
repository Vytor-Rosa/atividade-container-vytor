const port = process.env.PORT || 3001;
const express = require('express');
const router = require("./router");
const app = express();

app.use(express.json());
app.use('/api', router);

app.get("/", (req, res) => {
    res.send("Vytor - Home");
})

app.listen(port, () => {console.log("localhost:", port)});
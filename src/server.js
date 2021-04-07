const express = require('express');
const converter = require('./converter');

const app = express();
app.use(express.urlencoded());
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/rgb-to-hex", (req, res) => {
    if(Object.keys(req.query).length == 0) {
        res.send("Please insert rgb value");
    } else {
        const red = parseInt(req.query.red);
        const green = parseInt(req.query.green);
        const blue = parseInt(req.query.blue);
        res.send(converter.rgbToHex(red, green, blue));
    }
})

app.get("/hex-to-rgb", (req, res) => {
    const hex = req.query.hex;
    if(hex == undefined) {
        res.send("Please insert hex value");
    } else {
        const rgb = converter.hexToRgb(hex);
        res.send(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
    }
})

app.post("/hex-to-rgb", (req, res) => {
    const hex = req.body.hex;
    if(hex == "") {
        res.send("Please insert a hexadecimal value");
    } else {
        const rgb = converter.hexToRgb(hex);
        res.send(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
    }
})

app.post("/rgb-to-hex", (req, res) => {
    if(req.body.red == "" && req.body.green == "" && req.body.blue == "") {
        res.send("Please insert a valid rgb value");
    } else {
        const red = parseInt(req.body.red);
        const green = parseInt(req.body.green);
        const blue = parseInt(req.body.blue);
        res.send(converter.rgbToHex(red, green, blue));
    }
})

if(process.env.NODE_ENV === 'test') {
    module.exports = app;
} else {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}
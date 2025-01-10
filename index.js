import epxress from "express";

const app = epxress();

app.get("/hc", (req, res) => {
    res.send("ok")
})

app.listen(3000,() => {console.log("3000")})
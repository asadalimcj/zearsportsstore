const express = require("express");
const app = express();
const mongoDB = require("./Db");
mongoDB();
app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/Myorders"));
app.get("/", (req, res) =>{
    res.send("Hello World");
});
const PORT = process.env.PORT || 8500;
app.listen(PORT, () =>{
    console.log("rummimg server on port 8500");
});
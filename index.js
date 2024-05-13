const express  = require('express')
const App =  express()

App.use(express.json());
let Arry = []

App.get("/", (req,res) => 
{
    console.log();
    res.send(Arry);
})

App.post("/", (req,res) =>
{
    console.log(req.body);
    Arry.push(req.body)
    res.send("Data Is Post")
})

App.delete("/:id", (req,res) =>
{
    console.log(req.params);
    res.send("Data Is Delete");
    let {id} = req.params;
    Arry.splice(id,1)
})

App.listen(8000,() =>
{
    console.log("Server Is Runnig On Port 8000");
})
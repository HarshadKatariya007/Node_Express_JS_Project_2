const express  = require("express")
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
    res.send(Arry)
})

App.delete("/:id", (req,res) =>
{
    console.log(req.params);
    res.send(Arry);
    let {id} = req.params;
    Arry.splice(id,1)
})
App.patch("/:id",(req,res) =>
{
    let {id} = req.params
    Arry[id] = {...Arry[id],...req.body}
    res.send(Arry)
})

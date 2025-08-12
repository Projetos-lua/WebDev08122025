const express = require ("express")

const app = express();

app.get("/teste",(req,res)=>{
    res.send("Olá mundo Dev")
})

app.listen(3000, ()=> {
    console.log("Servidor rodando na porta http://localhost:3000/teste ")
})
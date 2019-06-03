const express=require('express');
app=express()

app.get('/',(req,res)=>{
    res.send("================ok====================")
})
port=5000;
app.listen(port, () => console.log(`\nServer running on localhost:${port}`))
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to masagwadi")
})

app.listen(3000,()=>{
    console.log("wazzup");
});



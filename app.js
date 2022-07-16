const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to masagwadi")
})

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log("wazzup");
});



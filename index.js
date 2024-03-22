const express = require('express');
const app = express();
port = 3000;


app.use('/', (req,res)=>{

      res.json("rout is working")
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
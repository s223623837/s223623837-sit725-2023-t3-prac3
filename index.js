const express = require('express');
const app = express();
const port =   process.env.port ||8080

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})

app.use(express.static(__dirname + '/front'));

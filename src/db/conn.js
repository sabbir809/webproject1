const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sabbirnite",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection is active");
}).catch((error)=>{
    console.log(error);

})
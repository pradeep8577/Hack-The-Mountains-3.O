const mongoose=require('mongoose');

//mongodb://localhost:27017/userdata

mongoose.connect("mongodb+srv://thapa:3ltdKtZpth5N0Z6Y@cluster0.cnp8n.mongodb.net/mernstack?retryWrites=true&w=majority",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected with Atlas");
}).catch((err)=>{
    console.log("No Connection to Database");
})
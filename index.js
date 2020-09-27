const express= require("express")
const app=express();
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Nidhi:nidhishr1998@cluster0.djmsn.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(()=> console.log('DB CONNECTED'))
                        .catch(err=>console.error(err))
app.get('/', (req,res)=>{
    res.send('hello')
});



app.listen(5000)
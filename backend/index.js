const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routers/index');
  
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()) ;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useUniFiedTopology:true})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/',routes);

const port = process.env.PORT;

app.listen(port,()=>{
    console.log("Server is running on port:",port )
})


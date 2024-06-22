const sampleProduct = require('./products')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const con = require('./connect')

app.post('/api/products', async(req, res)=>{
   try {
    const products = await sampleProduct.create(req.body)
    res.status(200).json(products)
   } catch (error) {
    res.status(500).json( {message: error.message})
   }

})


mongoose.connect( 'mongodb+srv://kamaudavid1803:2xUI4OH9akfPFjtV@cluster0.xhlubgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(() =>console.log('Connected to mongoDb'))
.catch(err => console.error('could not connect to mongoDb', err))




app.listen(5000, ()=>{
    console.log('app listen at port');
})


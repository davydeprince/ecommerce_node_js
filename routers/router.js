const express = require('express');
const router = express.Router();
const db = require('../database/connect');
const product = require('../models/products')

// Route to display all products
router.get('/home', async (req, res) => {
  try {
    
    db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error')
    } res.render('pages/index', {results:results})
  })
} catch(error) {
   console.error(error);
}
});


// Route to display a single product
router.get('/product/:id', async (req, res) => {

    const id = parseInt(req.params.id, 10);

    try {
        
      const products = await db.query("SELECT * FROM products WHERE id = ?", [id])

         if (products) {
            res.status(200).render('pages/singleP', {products:products})
         } else {

            res.status(404).send('product not found')
         }



    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  

module.exports = router;

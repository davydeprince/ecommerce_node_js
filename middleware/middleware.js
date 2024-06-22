
// const render = require('ren')

function redirectToHome(req, res, next){

    // try {
    //     db.query("SELECT * FROM products", (err, results) => {

    //         if (err) {
    //             return res.status(500).send("Database query error");
    //         }
    //         // res.render('pages/index', { results: results });
            
    //     });
    // } catch (error) {
    //     console.log(error);
    // }
    
    res.redirect('/phonepalace/home')

   
}

function redirectToShop(req, res, next) {
    res.redirect('/phonepalce/shop')
}

function redirectToBlog(req, res, next) {
    res.redirect('/phonepalace/blog')
}

function redirectToAbout(req, res, next) {
    res.redirect('/phonepalace/about')
}

function redirectToSingleP(req, res, next) {
    res.redirect('/phonepalace/singleP')
}

function redirectToCart(req, res, next) {
    res.redirect('/phonepalace/cart')
}

module.exports = {
    redirectToHome,
    redirectToShop,
    redirectToBlog,
    redirectToAbout,
    redirectToSingleP,
    redirectToCart
}
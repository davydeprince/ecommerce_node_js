const express = require('express');
const ejs = require('ejs');
const path = require('path');
const db = require('./database/connect')
const app = express();
const router = require('./routers/router')
const bodyParser = require('body-parser')
const middleware = require('./middleware/middleware')

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views/pages'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('phonepalace/home', middleware.redirectToHome)
app.use('/phonepalace', router);


app.get('/phonepalace/shop', (req, res) => {
    res.render('pages/shop');
});

app.get('/phonepalace/blog', (req, res) => {
    res.render('pages/blog');
});

app.get('/phonepalace/about', (req, res) => {
    res.render('pages/about');
});

app.get('/phonepalace/cart', (req, res) => {
    res.render('pages/cart');
});

app.get('/phonepalace/contact', (req, res) => {
    res.render('pages/contact');
});

app.get('/phonepalace/singleP', (req, res) => {
    res.render('pages/singleP');
});
// Form post method
app.post('/phonepalace/form', (req, res) => {
    console.log(req.body);
    res.send('Form data received');
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});


app.use(bodyParser.urlencoded({extended:true}))

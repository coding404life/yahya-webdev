require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const sendMail = require('./mail')
const {
    render
} = require('ejs');

// init express <3
const app = express();
const log = console.log;
const PORT = process.env.PORT || 3005
app.post('/webhook', (req, res) => {
    console.log(req, res)
    res.send('ok')
})

// middlewares
app.set('view engine', 'ejs') //register view engine to change the default folder for views app.set('views', 'myviews')
app.use(express.static('dist')) // middleware static files
app.use(morgan('dev')); // to see logger requests in propar format
app.use(express.urlencoded({
    extended: true
})); // look at requests accepting form data
// ----------------------------------------------------------------

// render home page
app.get('/', (req, res) => {
    res.render('index');
});

// render blog page
app.get('/blog', (req, res) => {
    res.render('blog');
});

// render contact us page
app.get('/contact', (req, res) => {
    res.render('contact');
});

//render services 
app.get('/services', (req, res) => {
    res.render('services');
});

// start render portfolio pages *********
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
})

// render resturant project
app.get('/portfolio/resturant-project', (req, res) => {
    res.render('portfolio-projects/resturant');
})

// render portfolio project
app.get('/portfolio/portfolio-project', (req, res) => {
    res.render('portfolio-projects/portfolio');
})

// render portfolio project
app.get('/portfolio/hospital', (req, res) => {
    res.render('portfolio-projects/hospital');
})
// end render portfolio pages *********

//email contact form
app.post('/emailSent', (req, res) => {
    // todo:
    //send email here
    const {
        subject,
        email,
        text
    } = req.body;
    console.log('data', req.body);
    // email, subject, text
    sendMail(email, subject, text, (err, data) => {
        if (err) {
            res.status(500).json({
                message: 'internal error'
            })
        } else {
            res.json({
                message: 'Email sent!!!!'
            });
        }
    });

});
app.get('/sent', (req, res) => {
    res.render('mailsent');
});

// render 404 page
app.use((req, res) => {
    res.status(404).render('404');
});

//listen to port

app.listen(PORT, () => log(`server connnected on port :${PORT}`));
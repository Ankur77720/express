const express = require('express')
const app = express()


app.set('view engine', 'ejs')



app.use(function (req, res, next) {

    req.data = 'this is a data'
    console.log('this is a global middleware')

    next()
})

/* 

global middleware
route specific middleware

*/



app.get('/', function (req, res, next) {

    console.log('this is a route "/" specific middleware')
    next()

}, function (req, res) {


    console.log(req.data)


    res.render('index', {
        username: "john",
        age: 20,
    })
})


app.get('/about',

    function (req, res, next) {

        console.log('this is a route "/about" specific middleware')
        next()
    },

    function (req, res) {
        res.send('about')
    })

app.get('/profile', function (req, res) {

    /* 
    req.query
    req.params
    req.body
    */

    res.json({
        name: 'John',
        age: 20,
        email: 'john@gmail.com',
    })
})

app.listen(3000, function () {
    console.log('server is running on port 3000')
})

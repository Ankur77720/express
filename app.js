const express = require('express');
const app = express();
const morgan = require('morgan');

app.set("view engine", "ejs");
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const notes = []

app.get('/', (req, res) => {
    res.render('index', { notes: notes });
})

app.post('/create-note', (req, res) => {
    try {
        notes.push(req.body)
        console.log(notes)
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.send("internal error")
    }
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
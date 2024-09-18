const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const notes = []

app.get('/', (req, res) => {
    res.render('index', { notes: notes });
})

app.post('/create-note', (req, res) => {

    notes.push(req.body)
    console.log(notes)
    res.redirect('/')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
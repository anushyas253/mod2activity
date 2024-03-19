const express = require('express');
const app = express();

app.set('view engine','ejs');

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {
    res.render('form')
});

app.post('/submit', (req,res) => {

    console.log(req.body);

    res.redirect('/');
}
)

app.use(express.urlencoded({ extended: true }));
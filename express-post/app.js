const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

let accessCount = 0;

// custom middleware
const count = () => {
    return (req, res, next) => {
        accessCount++;
        console.log('access count: ', accessCount);
        next();
    }
}

// use middleware globally
app.use(count());

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/login', (req, res) => {
    console.log('username from request body: ', req.body.username);
    console.log('password from request body: ', req.body.password);
    res.render('dashboard', { name: req.body.username });
});

app.listen(3000);
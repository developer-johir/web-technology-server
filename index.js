const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/web-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === '08'){
        res.send(course);
    }
    else{
        const categoryCourse = course.filter(c => c.category_id === id);
        res.send(categoryCourse);
    }
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find( c => c._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
  console.log('Example app listening on port', port)
})

module.exports = app;
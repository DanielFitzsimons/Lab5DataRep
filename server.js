const express = require('express') // different way of using import..  imports express
const app = express()
const port = 3000 // represents the local host server -> localhost/3000
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//app.get + app.post => targets information from server and pulls and displays data .

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/datarep', (req, res) =>
{
    res.send('Welcome to Data Rep and Query!')
})

app.get('/hello/:name', (req, res) =>{
    console.log(req.params.name);
    res.send("Hello " + req.params.name);
})

app.get('/api/books', (req, res) =>{
    
    const books = [

        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]
    
    
    res.json({
        book: books
    })
})

app.get('/test', (req, res) =>{

    res.sendFile(__dirname + '/index.html'); // grabs html file from directory name and displays as page
})

app.get('/name', (req, res) =>{
    console.log(req.query.fname); //pulls query from URL
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})


//embeds into body, requires more than get method, have to install body-parser to invoke
app.post('/name', (req, res) =>{
    console.log(req.body);
    res.send('Hello from post ' + req.body.fname + ' ' + req.body.lname); // pulls data from body of http
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
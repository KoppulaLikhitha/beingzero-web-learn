const express = require('express');
 
const app = express();
 
app.use(express.static(__dirname+"/frontend"));
app.use(express.urlencoded({extended : true}));


app.get("/", function(req, res){
    res.send("Welcome to Likhitha's Basic Site");
})

app.get("/resume", function(req, res){
    //res.send("Welcome to Likhitha's Resume");
    let vari =__dirname + "/frontend/resume.html";
    res.sendFile(vari);

})

app.get("/google",function(req,res){
    let a=__dirname + "/frontend/google.html";
    res.sendFile(a);
})

app.get("/apple",function(req,res)
{
    let b=__dirname + "/frontend/apple.html";
    res.sendFile(b);
})
 
app.get("/color",function(req,res)
{
    let c=__dirname + "/frontend/color.html";
    res.sendFile(c);
})
 
app.get("/login",function(req,res)
{
    let d=__dirname+"/frontend/login.html";
    res.sendFile(d);
})

app.get("/register",function(req,res)
{
    let e= __dirname+"/frontend/register.html";
    res.sendFile(e);
})

app.get("/piechart",function(req,res)
{
    let f=__dirname+"/frontend/piechart.html";
    res.sendFile(f);
})

app.get("/todo",function(req,res)
{
    let g=__dirname+"/frontend/todo.html";
    res.sendFile(g);
})

let books=[];

app.post('/book',(req,res) => 
{
 const book=req.body;
 console.log(book);
books.push(book);
res.send('Book is added');


});

app.get('/books', (req, res) => {
    res.json(books);
});



app.get('/book/:bookid', (req, res) => {
    const bookid= req.params.bookid;

    for (let book of books) {
        if (book.bookid === bookid) {
            res.json(book);
            return;
        }
    }

    res.status(404).send('Book not found');
});


app.delete('/book/:bookid', (req, res) => {
    
    const bookid = req.params.bookid;

    books = books.filter(i => {
        if (i.bookid !== bookid) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});


app.post('/book/:bookid', (req, res) => {

    const bookid = req.params.bookid;
    const newBook = req.body;

    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.bookid === bookid) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

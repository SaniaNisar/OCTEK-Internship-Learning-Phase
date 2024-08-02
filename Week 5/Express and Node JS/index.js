// Requiring module
const express = require('express');
const app = express();

app.use(express.static("public"))
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs"); 
app.use(logger);  // calling middleware function at top works as middleware
// Handling '/' request

// if you want the logger function to be used just in this:
// app.get('/', logger,logger,logger, (req, res) => {
// runs logger function first then the get

app.get('/', (req, res) => {
    // res.sendStatus(200);
    // res.send('<h2>Hello from Express.js server!!</h2>');
    // res.status(500).send('Hi Its an Error Message');
    // res.json({message: 'Hi Its in Json format'});
    // res.download('index.js');
    //  res.render("index", {text123: 'Hello World'})
      res.render("index", {text: "World"})
});

const userRouter = require('./routes/users' )
// const userNewRouter = require('./routes/users' )
const aboutRouter = require('./routes/about' )
// app.use(logger);

app.use('/users', userRouter)
// app.use('/users/new', userNewRouter)
app.use('/about', aboutRouter)

// middleware function for logging out
function logger(req,res,next){
   console.log(req.originalUrl)
   // this will print the url from which 
   // this request comes from
   next()
}
// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
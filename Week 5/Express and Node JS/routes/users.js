const express = require("express");
const router = express.Router();

// router.use(logger)
//Routing
// Handling '/users' request
router.get("/", (req, res) => {
  console.log(req.query.name)
  res.send("<h1>Users Routing Added</h1>");
});

router.get("/new", (req, res) => {
//   res.send("<h1>New Routing Added</h1>");
res.render("users/new",{firstName: "Sania"})
});

router.post("/", (req, res) => {
//   res.send("Lets Create a new user");
  const isValid = true
  if(isValid){
     users.push({firstName: req.body.firstName})
     res.redirect(`/users/${users.length-1}`)
  }
  else{
   console.log("Error")
   res.render("users/new",{firstName: req.body.firstName})
  }
//   console.log(req.body.firstName); // This should print the first name from the form
});

// router
//   .route(":/id")
//   .get((req, res) => {
//     res.send(`New User with id ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`Update User with id ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`New User with id ${req.params.id} is now deleted`);
//   });

router.get("/:id", (req,res)=>{
   console.log(req.user)
   res.send(`New User with id ${req.params.id}`)
})

router.put("/:id", (req,res)=>{
   res.send(`Update User with id ${req.params.id}`)
})

router.delete("/:id", (req,res)=>{
   res.send(`New User with id ${req.params.id} is now deleted`)
})

const users = [{name: "Sania"},{name: "Shaaf"}]
router.param("id",(req,res,next,id)=>{
   // console.log(id)
   // next()

   req.user=users[id]
   next()
})

// // middleware function for logging out
// function logger(req,res,next){
//    console.log(req.originalUrl)
//    // this will print the url from which 
//    // this request comes from
//    next()
// }
module.exports = router;

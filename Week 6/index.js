const express = require("express")
const app = express()
const {Jobs} = require('./models')

// app.get('/select',(req,res)=>{
//     Jobs.findAll({where:{firstName:"Sania Nisar"}}).then((jobs)=>{
//         res.send(jobs)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

const db = require('./models')
app.get('/select',(req,res)=>{
    Jobs.findAll().then((jobs)=>{
        res.send(jobs)
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.get('/insert',(req,res)=>{
    Jobs.create({
        firstName: "Zain Nisar",
        age: 21
    }).catch(err=>{
         if(err)
         {
            console.log(err)
         }
    })
    res.send('Data added Sucessfully')
})
app.get('/delete',(req,res)=>{
    Jobs.destroy({where:{id:2}})
    res.send('delete')
})

db.sequelize.sync().then((req)=>{
    app.listen(8080,() =>{
        console.log("Server is running on port 8080")
    })
})


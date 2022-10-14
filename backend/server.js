import express from "express"
import mysql from 'mysql'
import cors from 'cors'

const app = express()





// middleware
app.use(express.json())
app.use(cors())

// creating the database
const db = mysql.createConnection({
    host:"localhost",
    password:"window",
    user:"root",
    database:"test"
})


app.get('/',(req,res)=>{
    res.send("hello this is for client side")
})



app.get('/books',(req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books(`title`,`Description`,`price`,`cover`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.Description,
        req.body.price,
        req.body.cover,
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("successfully added to the database")
    })
})

app.delete('/books/:id',(req,res)=>{
    const bookID = req.params.id
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q,[bookID],(err,data)=>{
        if(err) return res.json(err)
        return res.json("books has been delete succesfully ")

    })
    
})






app.listen(8000,(req,res)=>{
   console.log("hello from the server")
})


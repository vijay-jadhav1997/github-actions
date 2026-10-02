import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))





app.get("/", (req, res, next)=>{
  res.status(201).json({
    success: true,
    message: "Shree Dnyanoba Mauli Tukaram..!!"
  })

})




app.listen(8080, ()=>{
  console.log("Server is running on port - ", 8080);
})
const express = require("express")
const app = express()
const port = 3030
const cors = require("cors")
const router = require("./routes")
const errorHandler = require("./middlewares/errorhandler")

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`server run on port ${port}`);
})
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://sivani_r_anil:siva123@ac-0k7dbum-shard-00-00.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-01.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-02.ojotgu3.mongodb.net:27017/nssdb?ssl=true&replicaSet=atlas-gxc29u-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("MongoDb connected")
    }
).catch(
    (error) => {
        console.log("error")
    }
)



const nss =mongoose.model("Volunteers", new mongoose.Schema(
    {
        id:String,
        name:String,
        email:String,
        phone:String,
        dob:String,
        gender:String,
        bloodGroup:String,
        dept:String,
        year:String,
        campName:String,
        hours:String,
        address:String,
        unitNo:String
    }
))


app.post("/add-volunteer",async (req,res) =>{
    await nss.create(req.body)
    res.json({"status":"success"})
})


app.listen(3000, () => {
    console.log("Server started")
})
import app from "./app.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

if(process.env.NODE_ENV!=="PRODUCTION"){
    dotenv.config({path:"backend/config.env"})
};

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://pramodhmereddy:YBaiavpi2Mx6JAD@dbscluster1.132s3gt.mongodb.net/data?retryWrites=true&w=majority");
  console.log("connected to database")

  
}



app.listen(5000,()=>{
    console.log(`server is running on port 5000`)
})
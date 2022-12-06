import Config from ".";
import mongoose from "mongoose";
import fs from "fs";
export default class DBConnection {
  static connect() {
    // console.log("DB trying to connect on " + new Date() + Config.DB);
const options= []
console.log(Config.DB)
    return mongoose
      .connect(Config.DB, {
       
        useNewUrlParser: true, 

        useUnifiedTopology: true 
       })
      .then(() => {
        console.log("Database connnected...",);
      })
      .catch((err) => {
        console.log("error",err);
      });
  }
}

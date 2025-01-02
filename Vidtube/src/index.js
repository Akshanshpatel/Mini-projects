import {app} from './app.js';
import connectDB from './db/index.js';


const port = process.env.PORT || 7000

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`SErver is listening at port ${port}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection error",err);
})
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//express.json() is a method inbuilt in express to recognize the incoming 
//Request Object as a JSON Object. This method is called as a middleware in your 
//application using the code: app.use(express.json())

//express.urlencoded() is a method inbuilt in express to recognize
// the incoming Request Object as strings or arrays.

// Note: You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.
// NOTE: You NEED express.json() and express.urlencoded() for POST and PUT requests,
// because in both these requests you are sending data
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//To serve static files such as images, CSS files, and JavaScript files, 
//use the express.static built-in middleware function in Express.
app.use(express.static("public"))

//Cookie-parser middleware is used to parse the cookies 
//that are attached to the request made by the client to the server
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)


export { app }
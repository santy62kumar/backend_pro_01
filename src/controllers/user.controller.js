import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser=asyncHandler(async (req,res)=>{
    res.status(400).json({
        message: "hii how are you"
    })
})

export {registerUser}
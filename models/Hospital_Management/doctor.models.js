import mongoose from "mongoose"
const doctorSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        salary:{
            type:String,
            required:true
        },
        experience:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        workingospital:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Hospital"
            },
            {
                
            }
        ]
    },{timestamps:true})

export const Doctor=mongoose.model("Doctor",doctorSchema)
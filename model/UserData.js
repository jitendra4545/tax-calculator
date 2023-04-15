const mongoose=require(`mongoose`)



const UserSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    contact:Number,
    gender:String,
    assesmentyear:String,
    streetaddress:String,
    city:String,
    state:String,
    postalcode:Number,
    adhar:Number,
    pan:String,
    bankdetails:Number,
    ifsc:String,
    income:Number,
    agriculture:Number
},{
    versionKey:false
})



const UserModel=mongoose.model("taxpayer",UserSchema)



module.exports={
    UserModel
}






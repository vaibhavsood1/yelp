var mongoose = require("mongoose");
var user  = require("../models/user.js")
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var commentSchema= new Schema({
    
    text:String,
    author: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    username : String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("comment",commentSchema);
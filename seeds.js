var mongoose=require("mongoose");
const campgrounds = require("./models/campgrounds.js");
var campground=require("./models/campgrounds.js");
var comment=require("./models/comment.js");
var data=[
    {
        name:"buddy",
        image:"https://tse2.mm.bing.net/th?id=OIP.BjpnTrSOlymZjNSIAfy3eAHaLG&pid=Api&P=0&w=300&h=300",
        discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"lulu",
        image:"https://tse1.mm.bing.net/th?id=OIP.uxjhjKGgLy7iPz_71CVgdwHaLX&pid=Api&P=0&w=300&h=300",
        discription:"hey hey hey"
    },
    {
        name:"bubu",
        image:"https://tse3.mm.bing.net/th?id=OIP.g9040VGLe8HGQvh3_0O6rwHaKx&pid=Api&P=0&w=300&h=300",
        discription:"hey hey hey"
    }
];
function seedDB(){
    campground.deleteMany({},function(err){
        if(err) console.log(err);
        
            console.log("removed campgrounds!");
        });
}
module.exports=seedDB;
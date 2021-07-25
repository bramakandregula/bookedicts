var express= require('express');
var app=express();
var mongoose=require("mongoose");
var passport= require("passport");
var Localstrategy = require("passport-local");
var User = require("./models/user.js");
var flash=require("connect-flash");
var methodOverride=require("method-override");
var seedDB=require("./seeds");
var campground=require("./models/campgrounds.js");
var comment=require("./models/comment.js");

 var bookRoutes= require("./routes/books"),
     commentRoutes=require("./routes/comments.js"),
     indexRoutes=require("./routes/index");


//seedDB();
const db="mongodb+srv://brama_2024:brama@1234@cluster1.ogcyx.mongodb.net/campgrounds?retryWrites=true&w=majority";
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(()=>console.log('MongoDB connected.....'))
 .catch(err=>console.log(err));
 var campground=require("./models/campgrounds");
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));
app.use(require("express-session")({
    secret:"yeah huhhh",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    res.locals.error= req.flash("error");
    res.locals.success=req.flash("success");
    next();
});


app.use(bookRoutes);
app.use(commentRoutes);
app.use(indexRoutes);
var PORT=process.env.PORT || 2500;
app.listen(PORT,console.log(`server has started at port ${PORT}`));
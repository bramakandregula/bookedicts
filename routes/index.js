var express=require("express");
var router=express.Router();
var passport=require("passport");
var User=require("../models/user");


router.get('/',(req,res)=>res.render("landing"));


router.get("/register",(req,res)=>{
    res.render("register");
})
router.post("/register", (req,res)=>{
    var newUser= new User({username: req.body.username});
    User.register(newUser,req.body.password,(err,user)=>
    {
          if(err){
               req.flash("error",err.message);
              res.render("register");
          }
          passport.authenticate("local")(req,res,()=>{
            req.flash("success","welcome to book eddicts"+ user.username);
               res.redirect("/books");
          });
    });
});
//login routh================
router.get("/login",(req,res)=>{
    res.render("login");
})
router.post("/login",passport.authenticate("local",{
  successRedirect:"/books",
  failureRedirect:"/login"
}) ,(req,res)=>{

})
//logout======================
router.get("/logout",(req,res)=>{
    req.logout();
    req.flash("success","logged you out!");
    res.redirect("/books");
})
module.exports=router;
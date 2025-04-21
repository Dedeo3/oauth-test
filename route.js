const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/auth/google', passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback', passport.authenticate('google',{failureRedirect:'/login'}), (req,res)=>{
    res.redirect('/home')
});
router.get('/home',(req,res)=>{
    res.send("BERHASIL LOGIN")
})
router.get('/logout',(req, res)=>{
    req.logOut();
    res.redirect('/')
});

module.exports= router;
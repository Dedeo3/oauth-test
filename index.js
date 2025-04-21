const express= require ('express');
const session = require ('express-session');
const passport = require ('passport');

const app = express()

require('./passport.js')

app.use(session({
    secret:'you secret can you node >',
    resave: false,
    saveUninitialized: false
}));
const route= require('./route.js')
app.use(passport.initialize());
app.use(passport.session());
app.use('/',route )

app.listen(3000,()=>{
    console.log('server is run')
})
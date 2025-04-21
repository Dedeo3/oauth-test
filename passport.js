const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID:'your client id',
            clientSecret:'your secret',
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done)=>{
            console.log(accessToken,'+', profile)
            return done(null, profile)
        }
    )
);

//menyimpan ke session apa aja yang mau disimpan
passport.serializeUser((user, done) => {
    console.log( "user:", user.emails)
    done(null, user.emails)
});
//mengambil data user dari db biasanya klo belum ada berarti belum regis
passport.deserializeUser((user, done) => {
    done(null,user)
});
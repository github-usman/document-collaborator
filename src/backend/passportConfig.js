const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const {User } = require('./database');

exports.initializingPassport = (passport) => {
    passport.use( new LocalStrategy(async (username, password, done) => {
            try {
                const user = await User.findOne({ username: username });
                if (!user) {
                    return done(null, false, { message: 'Incorrect user_id.' });
                }
                if (user.password !== password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            if (!user) {
                return done(null, false, { message: 'User not found' });
            }
            done(null, user);
        } catch (e) {
            done(e, false);
        }
    });
};


exports.isAuthenticated = (req,res,next)=>{
    if(req.user) return next();
    res.redirect('/');
};
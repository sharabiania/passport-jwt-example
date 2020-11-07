const express = require('express');
const passport = require('passport');

const users = [{id: 123, name: 'ali sharabiani'}];
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromHeader('x-api-key');
opts.secretOrKey = 'sharabsecret';
opts.issuer = 'ali sharabiani';
opts.audience = 'sharabiani.codes';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    const user = users.find(u => u.id === jwt_payload.sub);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
}));

const app = express();

app.get('/', (req, res) => {
    res.send('passport-jwt server is running...');
});

app.get('/protected', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send('success');
    }
);

app.listen(8080);
console.info('passport sandbox running at http://localhost:8080');
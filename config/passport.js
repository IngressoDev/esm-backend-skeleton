const passport = require('passport');
const TwitchStrategy = require('passport-twitch').Strategy;

passport.use(
  new TwitchStrategy(
    {
      clientID: 't4fuz7i0azhbrjnpsm6mywzm1urmgn',
      clientSecret: 'axx2prs9ypb2nsm13v6cwmdnfyewkp',
      callbackURL: 'https://streamernetwork.free.beeceptor.com',
      scope: 'user_read',
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, { id: 123, firstname: 'Affe', lastname: 'Hombula' });
    },
  ),
);

module.exports = passport;

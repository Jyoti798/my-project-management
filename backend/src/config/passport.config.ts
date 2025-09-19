import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { config } from './app.config';
import { findUserById, verifyUserService } from '../services/auth.service';
import { signJwtToken } from '../utils/jwt';
import { StrategyOptions, ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

// Setting up Local authentication strategy (username and password)
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (email, password, done) => {
      try {
        const user = await verifyUserService({ email, password });
        return done(null, user);
      } catch (error: any) {
        return done(error, false, { message: error?.message });
      }
    }
  )
);

interface JwtPayload {
  userId: string;
}

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET,
  audience: ['user'],
  algorithms: ['HS256'],
};

passport.use(
  new JwtStrategy(options, async (payload: JwtPayload, done) => {
    try {
      const user = await findUserById(payload.userId);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(null, false);
    }
  })
);

export const passportAuthenticationJWT = passport.authenticate('jwt', { session: false });
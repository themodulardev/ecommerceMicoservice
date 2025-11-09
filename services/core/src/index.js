import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import compression from 'compression';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
import { userRoutes } from "./modules/user/index.js";

// 🔐 Security & performance middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*', // change to your domain in production
  credentials: true
}));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// 🪪 JWT Passport Strategy (basic example)
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'defaultsecret'
};

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  try {
    // Example validation — replace with DB lookup
    if (jwt_payload?.id) return done(null, jwt_payload);
    else return done(null, false);
  } catch (err) {
    return done(err, false);
  }
}));

app.use(passport.initialize());
app.use("/api/users", userRoutes);
// 🌐 Routes
app.get('/', (req, res) => res.send('Hello from core service!'));

app.get('/secure', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'You accessed a protected route!', user: req.user });
});

// 🚀 Start server
const PORT = process.env.PORT || 5079;
app.listen(PORT, () => console.log(`🚀 Core running on port ${PORT}`));
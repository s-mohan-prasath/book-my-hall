import JwtPassport from "passport-jwt";
import { config } from "dotenv";
import { UserModel } from "../models/allModels.js"

config()
const JWtStrategy = JwtPassport.Strategy;
const ExtractJWT = JwtPassport.ExtractJwt;

/**
 * head{
 *  Authorization: "Bearer: wpipffhewae08gewr80tyery08eyg"
 * }
 */

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.APP_SECRET,
};

export default (passport) => {
    passport.use(
        new JWtStrategy(options, async (jwt__payloads, done) => {
            try {
                const user = await UserModel.findById(jwt__payloads.user);
                if (!user) return done(null, false);
                return done(null, { name: user.name, email: user.email, phoneNumber: user.phoneNumber });
            } catch (error) {
                throw new Error(error);
            }
        })
    )
};
import jwt from "jsonwebtoken";

export default (req,res,next)=>{
    const token = req.cookies.token;
    try{
        const user = jwt.verify(token,process.env.APP_SECRET)
        req.user = user;
        next();
    }catch(e){
        res.clearCookie("token");
        return res.redirect("/")
    }
}
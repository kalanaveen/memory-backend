import jwt from "jsonwebtoken";


const auth = (req,res,next)=>{
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];
        const isCustomAuth = token.length<500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token,'test');

            req.userId = decodedData;
        }else{
            decodedData = jwt.decode(token);

            req.userId = decodedData;
        }
        next();
    }catch(error){
        console.log(error);
    }
};

export default auth;
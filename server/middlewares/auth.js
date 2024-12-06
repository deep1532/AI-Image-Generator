import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized. Token is missing",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedToken.id) {
      req.body.userId = decodedToken.id;
    }
    else {
      return res.json({
        success: false,
        message: "Not Authorized. User does not exist",
      });
    }
    
    next();
      
  }
  catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default userAuth;

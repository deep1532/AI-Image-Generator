import express from "express";
import {
  registerUser,
  loginUser,
  getUserCredit,
  paymentRazorpay,
  verifyRazorpay,
} from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credit", userAuth, getUserCredit);
userRouter.post("/pay-razor", userAuth, paymentRazorpay);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;

const express = require("express");
const controllersAuth = require("../controllers/auth");
const controllersUser = require("../controllers/user");
const validator = require("../validator");
const router = express.Router();

router.post("/signUp", validator.userSignupValidator, controllersAuth.signUp);
router.post("/signIn", controllersAuth.signIn);
router.get("/signOut", controllersAuth.signOut);
router.param("userId", controllersUser.userById);
router.put("/forgot-password", controllersAuth.forgotPassword);
router.put(
  "/reset-password",
  validator.passwordResetValidator,
  controllersAuth.resetPassword
);
router.post("/social-login", controllersAuth.socialLogin);
router.param("userId", controllersUser.userById);
module.exports = router;

const express = require("express");
const controllersUser = require("../controllers/user");
const { requireSignIn } = require("../controllers/auth");
const router = express.Router();
router.put(
  "/user/follow",
  requireSignIn,
  controllersUser.addFollowing,
  controllersUser.addFollower
);
router.put(
  "/user/unFollow",
  requireSignIn,
  controllersUser.removeFollowing,
  controllersUser.removeFollower
);
router.get("/users", controllersUser.allUsers);
router.get("/user/photo/:userId", controllersUser.userPhoto);
router.get("/user/:userId", requireSignIn, controllersUser.getUser);
router.put("/user/:userId", requireSignIn, controllersUser.updateUser);
router.delete("/user/:userId", requireSignIn, controllersUser.deleteUser);
router.get(
  "/user/findPeople/:userId",
  requireSignIn,
  controllersUser.findPeople
);
router.param("userId", controllersUser.userById);

module.exports = router;

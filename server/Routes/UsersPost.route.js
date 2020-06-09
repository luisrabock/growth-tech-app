const express = require("express");
const router = express.Router();

const UserPostsController = require("../Controllers/UsersPost.Controller");

//Get a list of all Users
router.get("/users", UserPostsController.getAllUsers);

//Get a list of all Posts
router.get("/posts", UserPostsController.getAllPosts);

//Get a list of all UsersPosts
router.get("/merge", UserPostsController.getAllUsersPosts);

module.exports = router;

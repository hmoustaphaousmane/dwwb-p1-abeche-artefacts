const express = require("express");

const { register,login, verify } = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.patch("/verify-email", verify);
router.post("/login", login);

module.exports = router;

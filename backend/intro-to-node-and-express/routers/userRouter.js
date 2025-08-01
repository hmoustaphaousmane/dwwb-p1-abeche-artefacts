const express = require("express");

const { register, verify } = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.patch("/verify-email", verify);

module.exports = router;

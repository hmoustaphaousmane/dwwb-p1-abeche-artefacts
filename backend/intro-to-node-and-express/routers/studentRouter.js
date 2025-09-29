const express = require("express");
const studentController = require("../controllers/studentController");
const authMiddleware = require("../middlewares/authMiddleware")

const router = express.Router();

router.get("/:page/:limit", studentController.getStudents);
router.get("/:id", studentController.getSingleStudent);
router.post("/", authMiddleware, studentController.addStudent);
router.patch("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;

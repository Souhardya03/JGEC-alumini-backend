const { Router } = require("express");
const { ScholarshipCreate, getScholarships } = require("../controllers/scholarship");
const router = Router();
router.post("/create-scholarship", ScholarshipCreate);
router.get("/get-scholarship",getScholarships)
module.exports = router;

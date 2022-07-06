// Express
const express = require("express")
const router = express.Router()

// Middleware
const upload = require("../../middleware/multer")
const protect = require("../../middleware/authMiddleware")

// Routes
const {
  allListings,
  singleListing,
  createListing,
  updateListing,
  deleteListing,
} = require("../../controller/inventoryController")

//  extend route '/api/inventory'
router
  .route("/")
  .get(allListings)
  .post(protect, upload.any("image"), createListing)
router
  .route("/:id")
  .get(singleListing)
  .patch(updateListing)
  .delete(deleteListing)

module.exports = router

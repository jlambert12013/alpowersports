require("dotenv").config()
require("colors")

//  Config
const URI = process.env.URI
const PORT = process.env.PORT

// Paths
const path = require("path")

// Root Paths
const ROOT = path.join(__dirname)
const VIEWS = path.join(ROOT, "views")
const UPLOAD = path.join(VIEWS, "upload.html")
const DASHBOARD = path.join(VIEWS, "dashboard.html")

//  Express
const express = require("express")
const app = express()
const cors = require("cors")

// Cors
app.use(
  cors({
    origin: "http://127.0.0.1:5000",
  })
)

// View Engine Setup
app.use(express.static(VIEWS))

//  Error Handling
const errorHandler = require("./middleware/errorHandler")

//  Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorHandler)

//  Mongo
const mongo = require("./config/db")
mongo(URI)

//  API Routes
app.use("/api/inventory", require("./routes/api/inventoryRoute"))
app.use("/api/users/dashboard", require("./routes/api/adminRoute"))
app.use("/api/users", require("./routes/api/userRoute"))

//  Views Routes
// app.get("/", (req, res) => res.render("index"))
app.get("/upload", (req, res) => res.sendFile(UPLOAD))
app.get("/", (req, res) => res.sendFile(DASHBOARD))

// Server
app.listen(PORT, () => {
  console.log(`             `)
  console.log(`  ALABAMA POWERSPORTS `.underline.brightRed.bgWhite.bold)
  console.log(`SERVER: RUNNING ON PORT ${PORT.green}`)
})

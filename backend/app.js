require("dotenv").config()
require("colors")

//  Config and Paths
const URI = process.env.URI
const PORT = process.env.PORT

// Paths
const path = require("path")
const ROOT = path.join(__dirname)
const VIEWS = path.join(ROOT, "views")

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
app.set("view engine", "ejs")
app.set("views", VIEWS)
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
app.get("/", (req, res) => res.render("index", { user: "Jim" }))
app.get("/inventory", (req, res) => res.render("pages/inventory"))
// app.get("/inventory/new", (req, res) => res.render("pages/upload"))
// app.get("/inventory/edit", (req, res) => res.render("pages/inventory/update"))
// app.get("/inventory/delete", (req, res) => res.render("pages/inventory/delete"))
// app.get("/dashboard", (req, res) => res.render("pages/dashboard"))
// app.get("/users/login", (req, res) => res.render("pages/login"))
// app.get("/404", (req, res) => res.render("pages/nopage"))

// Server
app.listen(PORT, () => {
  console.log(`             `)
  console.log(`  ALABAMA POWERSPORTS `.underline.brightRed.bgWhite.bold)
  console.log(`SERVER: RUNNING ON PORT ${PORT.green}`)
})

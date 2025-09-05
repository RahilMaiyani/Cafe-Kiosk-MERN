const express = require("express")
const MenuItem = require("../models/MenuItem")
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/adminAuth")

const router = express.Router()

// Get all menu items grouped by category
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find().sort({ category: 1, createdAt: 1})

    // Group by category
    const groupedMenu = {}
    menuItems.forEach((item) => {
      if (!groupedMenu[item.category]) {
        groupedMenu[item.category] = []
      }
      groupedMenu[item.category].push(item)
    })

    res.json(groupedMenu)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

// Get menu item by ID
router.get("/:id", async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id)
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" })
    }
    res.json(menuItem)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server error")
  }
})

module.exports = router

/*

    for additional organizing we created this file to contain all the routes of the project
    and import it at the main file

*/

const express = require("express")

const Product = require("../database/db_schema")



const Router = express.Router()

Router.get("/", (req, res) => {
    res.send("welcome")
    res.end()
})

Router.get("/products", (req, res) => {
    Product.find().then((products) => {
        res.status(200).json(products)
        res.end()
    })
})
Router.get("/products/:id", (req, res) => {
    Product.find({ id: req.params.id}).then((product) => {
        res.status(200).json(product)
        res.end()
    })
})
Router.get("/products/category/:category", (req, res) => {
    Product.find({ category: req.params.category}).then((product) => {
        res.status(200).json(product)
        res.end()
    })
})
module.exports = Router
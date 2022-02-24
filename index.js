const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) // Allow app to parse JSON input

app.get('/', (req, res) => {
    return res.send("Welcome to Amazon Scrapper API")
})


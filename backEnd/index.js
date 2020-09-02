
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

app.post('/', async (request, response) => {
    const username = request.username;
    const password = request.password;

    if (!username || !password) {
        return response.status(404).json("Invalid credentials")
    }

    /* Database logic here for username here */

    const decryptP = await bcrypt.compare(password, db.password)
    
    if (!decryptP) {
        return response.status(404).json("Invalid password")
    } 

    /* jwt logic here */

    return response.status(200).json("Login successful")


})

app.get('/', (request, response) => {
    return response.json("Hello")
})

server.listen(3001, () => {
    console.log('Server running on port 3001')

})
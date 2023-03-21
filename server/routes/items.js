const express = require('express')
const router = express.Router()
const { Item } = require('../models')

//GET route for viewing all items
router.get('/items', async (res, req) => {
    try {
        const items = await Item.findAll()
        res.send(items)
    } catch (error){
        console.error(error)
    }
})

//GET route for viewing individual items
router.get('/items', async (res, req) => {
    try {
        const item = await Item.findByPk(req.params.id);
        res.send(item);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;
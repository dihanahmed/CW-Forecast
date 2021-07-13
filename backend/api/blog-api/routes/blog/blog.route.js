const express = require('express')
const router = express.Router()
const blogController = require('../../controllers/BlogController/blog.controller')

router.get('/all',blogController.findAll)
router.post('/user-get',blogController.findByEmail);
router.post('/add',blogController.makeBlog);
router.post('/id-get',blogController.findByBlogId)
router.post('/post-remove',blogController.findAndRemove)



module.exports = router;
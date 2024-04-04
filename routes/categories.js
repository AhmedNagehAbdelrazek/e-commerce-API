const { BackUpImage } = require('../lib/BackupImge');
const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();
const { GetCategories, GetCategoryById, AddCategory, updateCategory, deleteCategory } = require('../controller/categoriesController');


router.get(`/`, GetCategories);
router.get('/:id',GetCategoryById )

router.post('/', AddCategory)
router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

module.exports =router;

const express = require('express');

const { getAllProducts, getProductById, addNewProduct, updateProduct, deleteProduct, productCount, getFeaturedProducts, uploadGalleryImages } = require('../controller/productController');
const router = express.Router();
const multer = require('multer');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if(isValid) {
            uploadError = null
        }
      cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        
      const fileName = file.originalname.split(' ').join('-');
      const extension = FILE_TYPE_MAP[file.mimetype];
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
})

const uploadOptions = multer({ storage: storage })

router.get(`/`, getAllProducts);

router.get(`/:id`, getProductById)

router.post(`/`, uploadOptions.single('image'), addNewProduct);

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.get(`/get/count`, productCount)

router.get(`/get/featured/:count`, getFeaturedProducts)

router.put('/gallery-images/:id', uploadOptions.array('images', 10),uploadGalleryImages);

module.exports =router;
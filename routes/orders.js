const express = require('express');

const { getAllorders, getOrderById, addOrder, updateOrder, deleteOrder, getTotalSales, getOrdersCount, getUserOrders } = require('../controller/ordersController');
const router = express.Router();

router.get(`/`, getAllorders );
router.get(`/:id`, getOrderById);

router.post('/', addOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

router.get('/get/totalsales', getTotalSales);
router.get(`/get/count`, getOrdersCount)
router.get(`/get/userorders/:userid`, getUserOrders)

module.exports =router;
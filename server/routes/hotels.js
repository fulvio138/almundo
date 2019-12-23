const { Router } = require('express');
const router = new Router();
const hotelCtrl = require('../controllers/hotel.controllers')

router.get('/', hotelCtrl.getHotels);
router.get('/:id', hotelCtrl.getHotel);
router.delete('/:id', hotelCtrl.deleteHotel);

module.exports = router;
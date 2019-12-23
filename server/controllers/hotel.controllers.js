const hotels = require('../data.json');
const holtelCtrl = {};

holtelCtrl.getHotels = (req, res) => {
    res.json(hotels);    
};

holtelCtrl.getHotel = async (req, res) => {
    const { id } = req.params;
    const hotel = await hotels.find(hotel => hotel.id === id);
    res.json(hotel);    
};

holtelCtrl.deleteHotel = async (req, res) => {
    const { id } = req.params;
    const hotel = await hotels.filter(hotel => hotel.id != id);
    res.json(hotel);
};

module.exports = holtelCtrl;
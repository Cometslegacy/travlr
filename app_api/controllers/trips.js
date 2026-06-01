const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - list all trips
// Regardless of outcome, response must include HTML status code
// and json message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();

        // Uncomment the following line to show result of query on the console
        //console.log(q)

    if (!q) {
        // Database returned no data
        return res.status(404).json(err)
    } else {
        //return resulting trip list
        return res.status(200).json(q)
    }
};

// GET: /trips/:tripCoded - lists a single trip regardless of outcome
// Response must include HTML status code and JSON message to requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model.find({'code': req.params.tripCode}).exec();

    // Uncomment the following line to show the results of the query to the console
    console.log(q);

    if (!q) {
        // Database returned no data
        return rees.status(404).json(err);
    } else { // Return Resulting trip list
        return res.status(200).json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
}
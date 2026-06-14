const express = require('express'); // Express app
const router = express.Router();    // Router logic


const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router.route('/register').post(authController.register);
//router.route('/login').post(authController.login);

router
    .route("/trips")
    .get(tripsController.tripsList) // GET method routes tripList
    .post(tripsController.tripsAddTrip); // POST Method adds a trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

router
    .route('/login')
    .post(authController.login);
    
module.exports = router; 
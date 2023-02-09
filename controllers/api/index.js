const router = require('express').Router();
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');
const movieRoutes = require('./movie-routes');

router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);


module.exports = router;

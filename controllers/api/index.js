const router = require('express').Router();

const userRoutes = require('./users-routes');
const movieRoutes = require('./movie-routes');
const reviewRoutes = require('./review-routes');


router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/reviews', reviewRoutes);



router.use((req, res) => {
    res.status(404).end();
  });
  
module.exports = router;

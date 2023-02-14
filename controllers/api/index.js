const router = require('express').Router();

const userRoutes = require('./users-routes');
const movieRoutes = require('./movie-routes');
const reviewRoutes = require('./review-routes');
const postRoutes = require('./post-routes.js');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/reviews', reviewRoutes);
router.use('/post', postRoutes)

router.use((req, res) => {
    res.status(404).end();
  });
  
module.exports = router;

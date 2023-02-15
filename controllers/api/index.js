const router = require('express').Router();

const userRoutes = require('./users-routes');
const movieRoutes = require('./movie-routes');
const postRoutes = require('./post-routes');


router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/posts', postRoutes);

module.exports = router;

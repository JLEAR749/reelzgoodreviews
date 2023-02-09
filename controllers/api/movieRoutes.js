const router = require('express').Router();

const {Movie} = require ('../../models');

//-----------------------find all movies

router.get('/', async (req, res) => {
    try {
      const movieData = await Movie.findAll({
        //include: [{ model: Product }],
        
      });
  
      res.status(200).json(movieData);
    } catch (err) {
      res.status(500).json(err);
      console.log(movieData);
    }
  });
  
  
   // ------------------------------- find one user by its `id` value
  router.get('/:id', async (req, res) => {
    try {
      const movieData = await Movie.findByPk(req.params.id, {
        //include: [{model: Product}]
      });
  
    if (!movieData) {
      res.status(404).json({ message: `No movies with this id!`});
      return;
    }
    res.status(200).json(movieData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  
  //--------------------NOT SURE WE NEED TO DELETE MOVIES--------------------//
  // ------------------------------- create a new category
  /*router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  */
  

  module.exports = router;
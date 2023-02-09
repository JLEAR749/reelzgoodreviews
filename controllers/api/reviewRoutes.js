const router = require('express').Router();

const {Review} = require ('../../models');

//-----------------------find all reviews

router.get('/', async (req, res) => {
    try {
      const reviewData = await Review.findAll({
        //include: [{ model: Product }],
        
      });
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
      console.log(reviewData);
    }
  });
  
  
   // ------------------------------- find one review by its `id` value
  router.get('/:id', async (req, res) => {
    try {
      const reviewData = await Review.findByPk(req.params.id, {
        //include: [{model: Product}]
      });
  
    if (!reviewData) {
      res.status(404).json({ message: `No review with this id!`});
      return;
    }
    res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  // ------------------------------- create a new review
  router.post('/', async (req, res) => {
    try {
      const reviewData = await Review.create(req.body);
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;

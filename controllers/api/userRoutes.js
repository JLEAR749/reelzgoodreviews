const router = require('express').Router();

//const {} = require ('');

//-----------------------find all users

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        //include: [{ model: Product }],
        
      });
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
      console.log(userData);
    }
  });
  
  
   // ------------------------------- find one user by its `id` value
  router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        //include: [{model: Product}]
      });
  
    if (!userData) {
      res.status(404).json({ message: `No user with this id!`});
      return;
    }
    res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  // ------------------------------- create a new category
  router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

  module.exports = router;
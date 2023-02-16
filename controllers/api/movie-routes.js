const router = require('express').Router();
const {Movie} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll();
    

    res.status(200).json(movieData);

} catch (err) {
    res.status(500).json(err);
    console.log(movieData);
}
});



router.get('/:id', async (req, res) => {
    try {
        const movieData = await Movie.findByPk(req.params.id);
    
        if(!movieData) {
            res.status(404).json({ message: `No Movie with this id!`});
        }

    res.status(200).json(movieData);

} catch (err) {
    res.status(500).json(err);
    console.log(movieData);
}
});

module.exports = router;
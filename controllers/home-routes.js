const router = require('express').Router();

const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [{
				model: User, 
				attributes: ['username'],
			},],
		});

		const posts = postData.map((post) => post.get({
			plain: true
		}));

		res.render('homepage', {
			posts,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/post/:id', async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['username'],
				}, {
					model: Comment,
					include: [User]
				}
			],
		});

    const post = postData.get({
			plain: true
		});

		res.render('post', {
			...post,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	}
});


router.get('/profile', withAuth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: {
				exclude: ['password']
			},
			include: [{
				model: Post
			}],
		});

		const user = userData.get({
			plain: true
		});

		res.render('profile', {
			...user,
			logged_in: true
		});
	} catch (err) {
		res.status(500).json(err);
	}
});



router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn }); //using template literal
});

router.get("/profile", async (req, res) => {
  res.render("[profile]", { loggedIn: req.session.loggedIn });// template literal
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});


module.exports = router;
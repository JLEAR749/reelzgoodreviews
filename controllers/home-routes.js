const router = require("express").Router();

const { Post, User, Movie } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const dbMovieData = await Movie.findAll({
      // include: [
      //   {
      // 	model: Movie,
      // 	attributes: [
      // 	'title',
      // 	'rated',
      // 	'length',
      // 	'genre',
      // 	'description',
      // 	'imdb_rating']
      //   },
      // ],
    });

    const movies = dbMovieData.map((movie) => movie.get({ plain: true }));
    console.log(movies);
    res.render("homepage", {
      movies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = postData.map((post) =>
      post.get({
        plain: true,
      })
    );

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const post = postData.get({
      plain: true,
    });

    res.render("post", {
      ...post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: Post,
        },
      ],
    });

<<<<<<< HEAD
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
=======
    const user = userData.get({
      plain: true,
    });

    res.render("dashboard", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
>>>>>>> 0a409b5290b7502a4750c52cfc4035b23c4b7966
});

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn }); //using template literal
});

<<<<<<< HEAD
router.get("/profile", async (req, res) => {
  res.render("[profile]", { loggedIn: req.session.loggedIn });// template literal
=======
router.get("/dashboard", async (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn }); // template literal
>>>>>>> 0a409b5290b7502a4750c52cfc4035b23c4b7966
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
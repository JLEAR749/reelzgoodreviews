const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");
// fix  this
router.post("/", withAuth, async (req, res) => {
  console.log(req);
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(req.body);

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
    console.log(res.status);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "404 Post not found" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
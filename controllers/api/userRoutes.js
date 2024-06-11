const router = require('express').Router();
const { DJ } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const DJData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = DJData.id;
      req.session.logged_in = true;

      res.status(200).json(DJData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const DJData = await User.findOne({ 
			where: { username: req.body.username } 
		});

    if (!DJData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await DJData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = DJData.id;
      req.session.logged_in = true;
      
      res.json({ user: DJData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

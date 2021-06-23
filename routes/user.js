const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('Hey! its user route calling you');
});

module.exports = router;

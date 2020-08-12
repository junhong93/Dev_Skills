var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/:Skill', skillsCtrl.show);


// router.get('/')

module.exports = router;

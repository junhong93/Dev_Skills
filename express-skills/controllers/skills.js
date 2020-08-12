const skillsDb = require('../models/skill');



  function index(req, res, next) {
    res.render('skills/index.ejs', {
      skills: skillsDb.getAll()
    });
  }


  function show (req,res,next) {
    res.render('skills/show', {
      skills: skillsDb.getOne(req.params.Skill)
    })
  }

module.exports = {
  index,
  show
}
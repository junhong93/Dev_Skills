const skills = [
    {id: 123456, Skill: 'HTML5', Level: 'Medium'},
    {id: 123457, Skill: 'CSS3', Level: 'Medium'},
    {id: 123458, Skill: 'JavaScript', Level: 'Medium'},
    {id: 123459, Skill: 'NodeJS', Level: 'low'},
    {id: 123460, Skill: 'Python', Level: 'low'}
  ];
  

  function getAll() {
    return skills;
  }


function getOne(Level) {
  return skills.find(skills => skills.Skill === Level)
}


  module.exports = {
    getAll,
    getOne
  };
  

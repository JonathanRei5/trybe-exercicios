const joi = require('joi');

module.exports = {
  validateUser: (user) => {
    const schema = joi.object({
      username: joi.string().required().min(3),
      password: joi.string().required().not().empty(),
    }).required().label('user');

    joi.assert(user, schema);
  },
};

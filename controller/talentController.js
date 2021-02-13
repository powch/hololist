const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.Talent.create(req).catch((err) => res.status(422).json(err));
  },

  findAll: (req, res) => {
    db.Talent.find({})
      .then((talents) => res.json(talents))
      .catch((err) => res.status(422).json(err));
  },
};

const mongoose = require('mongoose');

const TalentSchema = new mongoose.Schema({
    name: String,
    screenName: String,
    url: String,
    status: {
        createdAt: String,
        id: String,
        text: String
    },
    profileImgUrl: String,
    branch: String
});

const Talent = mongoose.model('Talent', TalentSchema);

module.exports = Talent;
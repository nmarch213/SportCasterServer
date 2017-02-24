/*
  This is the user Schema that will be used for each of the people who wish
  to sign up for an account on the site.

  Roles:
    Admin - Control the entire site
    Coach - A Specific team's coach, might be able to input score
    Organization Admin - Intended for a park president
    Player - Maybe?
    User - Generic User who can follow teams.

    Roles will be determined by the Admin
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//The Schema for a specific game/match\
const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true},
    role: String,
    phoneNumber: Number,
    organization: String,
    firstName: String,
    lastName: String
});


module.exports = mongoose.model('User', userSchema);
